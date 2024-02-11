from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json
import os
from datetime import date
from werkzeug.utils import secure_filename


hj = date.today()
# import database

# PARTE APENAS INICIAL - O ENVIO DE PLANILHA SERA FEITO POR MEIO DE BOTOES
df = pd.read_excel('./Mapeamento dos processos seletivos 2.xlsx')

# Tratamento das Colunas
df_base = df.copy()
df_base.columns = df_base.iloc[0]
df_base = df_base[1:]
df_base.reset_index(drop=True, inplace=False)

# Convertendo datetime em date


def convert_to_date(element):
    if isinstance(element, str):
        return element
    else:
        return element.date()
        
    

# convertendo dinamicamente
col = ['Final das inscrições', 'Início das inscrições',
       'Data de formação mínima', 'Data de formação máxima']

for i in col:
    df_base[i] = df_base[i].apply(convert_to_date)

# criação da função para ordenação


def ordena(final):
    if final == 'sempre aberto':
        return 1
    elif final == 'Tempo Indeterminado':
        return 2
    elif final == 'não informado':
        return 3
    elif isinstance(final, date) and final > hj:
        return 4
    elif final == 'fechado':
        return 5
    elif isinstance(final, date) and final <= hj:
        return 6
    else:
        return 7


def dataframes():

    # criando nova coluna
    df_base.loc[:, 'sort'] = df_base['Final das inscrições'].apply(ordena)

    # ordene o dataframe
    df_base.sort_values('sort', inplace=True)
    # print(df_base[['Final das inscrições', 'sort']].head(20))

    # inplace=True -> substitui no proprio dataframe
    df_base.drop('sort', axis=1, inplace=True)

    df_base.to_excel('Vagas.xlsx', index=False)

    return df_base

dataframes()

