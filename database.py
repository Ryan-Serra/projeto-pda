import pyodbc
import pandas as pd
from datetime import datetime
import schedule, time
import asyncio

def abrir_conexao():
    server = '127.0.0.1'
    database = 'pda'
    user = 'root'
    pwd = 'CZct!k8wE32f'

    conexao = pyodbc.connect(f"""DRIVER={{MySQL ODBC 8.2 Unicode Driver}};
                             SERVER={server};
                             DATABASE={database};
                             UID={user};
                             PWD={pwd}""")
    
    cursor = conexao.cursor()

    return conexao, cursor

base = "Projeto Mapeamento dos processos seletivos.xlsx"


def selecionar_bd(bd):
    
    conexao, cursor = abrir_conexao()

    # Comando que seleciona a tabela!
    select = f"SELECT * FROM {bd}"

    # Use a função read_sql_query para colocar o resultado da consulta em um DataFrame
    df = pd.read_sql_query(select, conexao)

    conexao.close()

    return df


# DESENVOLVIMENTO -_-
def adicionar_vaga():

    conexao, cursor = abrir_conexao()

    empresa = None
    modelo_contra = None
    modelo_trab = None
    modelo_curso = None
    curso = None
    setor = None
    area = None
    estados = None
    duracao = None
    tempo = None
    site = None
    formacao_mim, formacao_max = None
    requisitos = None
    link = None

    #é um comando SQL que adciona uma linha
    comando = f"""INSERT INTO VAGAS(id_vaga, Empresa, Modelo de contratação, 
    Modelo de trabalho, Modelo de curso, Cursos aceitos, Setor, Área do estágio, Estados, 
    Duração em dias do processo, 
    entre início e contratação (ex: 90), Site de vagas, 
    Data de formação mínima, Data de formação máxima, 
    Requisitos, Link de inscrição)
    VALUES
        ('{empresa}','{modelo_contra}', '{modelo_trab}', '{modelo_curso}', '{curso}', '{setor}', '{area}', 
'{estados}', '{duracao}', '{tempo}', '{site}', '{formacao_mim}', '{formacao_max}', '{requisitos}', '{link}')"""
    
    cursor.execute(comando)
    conexao.commit()
# DESENVOLVIMENTO -_-


def adicionar_excel(base):

    conexao, cursor = abrir_conexao()

    df = pd.read_excel(base)

    #--- colocando a daframe com as colunas corretas
    df_base = pd.DataFrame(df)
    #Definindo a linha 0 como os novos nomes das colunas
    df_base.columns = df_base.iloc[0]
    # Excluindo a linha 0, que agora contém os nomes antigos das colunas
    df_base = df_base[1:]
    # Resetando os índices
    df_base.reset_index(drop=True, inplace=True)


    # Consulta Planilha dinamicamente
    columns = ', '.join(f"`{col}` TEXT" for col in df_base.columns)
    values = ', '.join(['%s' for _ in range(len(df_base.columns))])
    

    sql = f'CREATE TABLE vagas ({columns})'
    
    #cursor.execute(sql)
    #cursor.commit

    print('\n' + df_base.columns)

    query = f"""INSERT INTO VAGAS ({columns}) VALUES ({values})"""

    # [ _ indica que a variavel é descartada! | _, ]
    for _, row in df.iterrows():
        cursor.execute(query, tuple(row))
    
    #conexao.commit()
    conexao.close()


def adicionar_excel2(base):

    conexao, cursor = abrir_conexao()

    df = pd.read_excel(base)

    #--- colocando a daframe com as colunas corretas
    df_base = pd.DataFrame(df)
    #Definindo a linha 0 como os novos nomes das colunas
    df_base.columns = df_base.iloc[0]
    # Excluindo a linha 0, que agora contém os nomes antigos das colunas
    df_base = df_base[1:]
    # Resetando os índices
    df_base.reset_index(drop=True, inplace=True)

    #existe um metodo pra isso já!
    
    df_base.to_sql('vagas', con=conexao, if_exists='append', index=False)


# Assim que a data da VAGA fechar será enviada para tabela VAGAS_FECHADAS
def movendo_bd():

    conexao, cursor = abrir_conexao()

    cursor.execute("""SELECT * FROM VAGAS
    WHERE `Final das inscrições` < CURDATE()""")

    fechado = cursor.fetchall()

    # obter os nomes das colunas

    nomes_das_colunas = [i[0] for i in cursor.description]

    # Inserir cada linha na nova tabela

    for f in fechado:

        query = f"""
        INSERT INTO vagas_fechadas ({', '.join(nomes_das_colunas)})
        VALUES ({', '.join(['%s'] * len(f))})
        """
        cursor.execute(query, f)

    # Excluir as linhas da tabela original
    
    cursor.execute("""
                   DELETE FROM VAGAS
                   WHERE `Final das inscrições` < CURDATE()
                   """)    
    
    conexao.commit()
    conexao.close()
    
# Agenda tarefa para ser executada todos os dias 00:00
schedule.every().day.at("00:00").do(movendo_bd)

adicionar_excel2(base)

print("OK")
#while True:
#    schedule.run_pending()
#    time.sleep(3600)
#    # 3600 segundos = 1 hora
