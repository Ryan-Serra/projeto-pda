import pandas as pd
import os

# FASE DE TESTES

# Deixe APENAS 1 VARIAVEL ARQUIVO
arquivo = ("./Projeto Mapeamento dos processos seletivos.xlsx")
#arquivo = ("./Mapeamento dos processos seletivos 2.xlsx")

# recebe do html um arquivo excel ou csv
def pega_arquivo(arquivo=None):
    
    if not arquivo == None:
        if os.path.splitext(arquivo)[1] == ".csv":
            df = pd.read_csv(arquivo)
        elif os.path.splitext(arquivo)[1] == ".xlsx":
            df = pd.read_excel(arquivo)
        else:
            return "Arquivo não compatível"
        
        return df
    else:
        pass



def exclui_nalinhas(df):
    df = df.dropna(how="all")
    return df


def ajeita_coluna(df_base):

    # ajeitando o nome da coluna
    df_base.columns = df_base.iloc[0]
    df_base = df_base[1:]
    df_base.reset_index(drop=True, inplace=False)

    return df_base


def salva_df(df_base):

    # Salvando | Criando pasta e arquivo

    df_base.to_excel('./output/Vagas.xlsx', index=False)


def main(arquivo=None):

    # Criar forma de receber planilha!
    if arquivo == None:
        return ""
        
    df2 = pega_arquivo(arquivo=arquivo)
    
    #checa se o diretório não existe (for "Verdade" ele cria o diretório. "Falso" continua o código)
    if not os.path.isdir("./output"):
        os.makedirs("./output")

    #checa se o arquivo "Vagas.xlsx" existe | (Se "Verdade" passar o arquivo | "Falso" formata/cria o arquivo "Vagas.xlsx")
    if os.path.isfile("./output/Vagas.xlsx"):
        # fazer o concat usando o arquivo existente
        df_vagas = pd.read_excel("./output/Vagas.xlsx")


        df2 = exclui_nalinhas(df2)

        df2 = ajeita_coluna(df2)

        # unindo dataframes
        df_uniao = pd.concat([df_vagas, df2], ignore_index=True)

        salva_df(df_uniao)


    else:
        # fazer o tratamento do arquivo e coloca-lo na pasta com o nome Vagas.xlsx
        df2 = exclui_nalinhas(df2)

        df2 = ajeita_coluna(df2)

        salva_df(df2)

main()
print("Concluído")
