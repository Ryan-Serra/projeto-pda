from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json
import os
from datetime import date
from werkzeug.utils import secure_filename
from convert_df import dataframes


hj = date.today()
# import database

# PARTE APENAS INICIAL - O ENVIO DE PLANILHA SERA FEITO POR MEIO DE BOTOES
df = pd.read_excel('./Vagas.xlsx')


# #PAGINA INICIAL ONDE MOSTRA A PLANILHA PODENDO SER FILTRADA, PERMITINDO ENVIO DE ARQUIVOS

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():

    df_base = dataframes()
    
    return render_template('index.html', data=df_base.to_json(orient='records'))
 

#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)