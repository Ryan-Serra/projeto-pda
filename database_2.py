import pandas as pd
import pyodbc
from sqlalchemy import create_engine, text, inspect, exc
from sqlalchemy.orm import sessionmaker
import urllib.parse

base = "Projeto Mapeamento dos processos seletivos.xlsx"


def abrir_conexao():

    server = '127.0.0.1'
    database = 'pda2'
    user = 'root'
    pwd = 'CZct!k8wE32f'
    senha_codificada = urllib.parse.quote_plus(pwd)
    engine = create_engine(f'mysql+pymysql://{user}:{senha_codificada}@{server}/{database}')
    # usuario = nome de usuario
    # senha = senha
    #localhost = host

    Session = sessionmaker(bind=engine)
    session = Session()

    return engine, session
    


def adicionar_excel(base):

    engine, session = abrir_conexao()

    df = pd.read_excel(base)
    # Tratamento
    df_base = pd.DataFrame(df)
    df_base.columns = df_base.iloc[0]
    df_base = df_base[1:]
    df_base.reset_index(drop=True, inplace=True)

    #existe um metodo pra isso já!
    
    df_base.to_sql('vagas', con=engine, if_exists='append', index=False)

    session.close()


def movendo_bd():

    engine, session = abrir_conexao()

    
    session.execute("""CREATE TABLE vagas_fechadas AS SELECT * FROM vagas 
    WHERE `Final das inscrições` < CURDATE()""")
    # Neste campo Não está passando o valor data!


    # Excluir as linhas da tabela original
    
    #cursor.execute("""
#                   DELETE FROM VAGAS
#                   WHERE `Final das inscrições` < CURDATE()
#                   """)    
    
    session.close()


def selecionar_bd(table='vagas'):

    engine, session = abrir_conexao()

    # PARTE NOVA

    try:

        result = (f"SELECT * FROM {table} ORDER BY `Final das inscrições` DESC")
        df = pd.read_sql_query(result, engine)
        session.close()
        return df 
    
    except exc.ProgrammingError:
        df = pd.DataFrame()     
        return df
    
    


