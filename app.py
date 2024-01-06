from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json
import os
from werkzeug.utils import secure_filename
import database_2

#import database

# PARTE APENAS INICIAL - O ENVIO DE PLANILHA SERA FEITO POR MEIO DE BOTOES

def dataframes(table_name='vagas'):

    df_base = database_2.selecionar_bd(table_name)

    result = {}

    if df_base.empty:
        result['filtered_options'] = []
        result['df_base2'] = df_base
    else:
        df_base2 = df_base.drop(['Etapas', 'Considerado Diferenciais', 'Quantas vagas abriram?',   
            'Salário informado (se for variável, colocar a média)',
            'Média salarial do Glassdoor (colocar se a empresa não informar)', 'Tem APRENDA COM QUEM FEZ dentro do PDA?',       
            'Informações extras'], axis=1)

        filtered_options = df_base2['Empresa'].unique().tolist()

        result['filtered_options'] = filtered_options
        result['df_base2'] = df_base2
    
    return result

    


app = Flask(__name__)

selecionado = 'Não Selecionado'  # Variável a ser atualizada dinamicamente

# FUNÇÃO DE FILTRO DE EMPRESA CONFORME A TABELA/PLANILHA NO BANCO DE DADOS
def filtro_empresas(selecionado='Não selecionado', table_name='vagas'):

    #parte nova
    result = dataframes(table_name)
    filtered_options = result['filtered_options']

    #if result['df_base2'].empty or result['df_base2'] is None:
    #    df_filtered = result['df_base2']
    #    return df_filtered, filtered_options
    #else:
    df_base2 = result['df_base2']
    df_filtered = df_base2.copy()

    if df_base2.empty:
        filtered_options = []
        return df_filtered, filtered_options
    else:
        if selecionado == 'Não Selecionado':
            return df_filtered, filtered_options
        else:
            condition_empresa = df_filtered['Empresa'].isin([selecionado]) if selecionado else True 
            df_filtered = df_filtered[condition_empresa]
        
    return df_filtered, filtered_options


# CHECAR ENVIO DE ARQUIVO .XLSX | EXTENSÃO DE PLANILHA
def is_excel(filename):
    _, extension = os.path.splitext(filename)

    return extension.lower() == '.xlsx'

# FUNÇÃO QUE RECEBE O ARQUIVO, TRATA ERROS BÁSICOS E ARMAZENA A PLANILHA
@app.route('/uploader', methods=["POST"])
def upload_file():
    if 'file' in request.files:
        f = request.files['file']

        if is_excel(f.filename):
            #Defina o caminho onde você deseja salvar o arquivo
            path = r"saves"
            if not os.path.exists(path):
                os.makedirs(path)
            f.save(os.path.join(path, secure_filename(f.filename)))
            
            # Executa a junção da planilha assim que for salva!
            #planilha = f"saves/{f.filename}"
            #database.adicionar_excel(planilha)

            return redirect(url_for('index'))
            # podia mandar um pop-up confirmando o envio   
        else:
            # está levando para uma pagina mas quero que retorne para pagina inicial!
            # ou mande só um pop-up
            return 'Arquivo não selecionado!'
    else:
        return 'Nenhum arquivo foi enviado', 400


@app.route('/get_options', methods=['POST'])
def get_options():
    data = request.get_json()
    table_name = data.get('table_name')

    df_filtered, filtered_options = filtro_empresas(table_name)

    return jsonify(filtered_options)


#Função para retornar apenas o dataframe original
@app.route('/get_dataframe', methods=['POST'])
def get_dataframe():

    data = request.json()
    table_name = data.get('table_name')

    df = dataframes(table_name)

    return df


#PAGINA INICIAL ONDE MOSTRA A PLANILHA PODENDO SER FILTRADA, PERMITINDO ENVIO DE ARQUIVOS
@app.route('/', methods=['GET', 'POST'])
def index():
    global filtered_options
    global selecionado


    if request.method == "POST":
         
        data = request.get_json()
        selecionado = data.get('selecionado')
        table_name = data.get('table_name')
        df_filtered, filtered_options = filtro_empresas(selecionado, table_name)
        html_output = df_filtered
                
        return html_output.to_html() 
    else:   
        # Adicione aqui o código para criar o dataframe quando a página for carregada
        df_filtered, filtered_options = filtro_empresas(selecionado)
        html_output = df_filtered
        output = html_output.to_html()

        #Retorna o dataframe original
        df = dataframes()
        
        return render_template("index.html", output=output) 

#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
   