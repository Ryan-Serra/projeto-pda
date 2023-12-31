from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json
import os
from werkzeug.utils import secure_filename

# PARTE APENAS INICIAL - O ENVIO DE PLANILHA SERA FEITO POR MEIO DE BOTOES

base = pd.read_excel("Projeto Mapeamento dos processos seletivos.xlsx")

# colocando a daframe com as colunas corretas
df_base = pd.DataFrame(base)
#Definindo a linha 0 como os novos nomes das colunas
df_base.columns = df_base.iloc[0]
# Excluindo a linha 0, que agora contém os nomes antigos das colunas
df_base = df_base[1:]
# Resetando os índices
df_base.reset_index(drop=True, inplace=True)

df_base2 = df_base.drop(['Início das inscrições', 'Final das inscrições', 'Etapas', 'Considerado Diferenciais', 'Quantas vagas abriram?',   
       'Salário informado (se for variável, colocar a média)',
       'Média salarial do Glassdoor (colocar se a empresa não informar)', 'Tem APRENDA COM QUEM FEZ dentro do PDA?',       
       'Informações extras'], axis=1)


lista1 = df_base2['Empresa'].unique()

filtered_options = [
        option for option in lista1
    ]
filtered_json = json.dumps(filtered_options)

# AQUI ACABA A PARTE INIVIAL DA PLANILHA 


app = Flask(__name__)

selecionado = 'Não Selecionado'  # Variável a ser atualizada dinamicamente

# FUNÇÃO DE FILTRO DE EMPRESA CONFORME A TABELA/PLANILHA NO BANCO DE DADOS
def filtro_empresas(selecionado):
    
    df_filtered = df_base2.copy()

    if selecionado == 'Não Selecionado':
        return df_filtered
    else:
        condition_empresa = df_filtered['Empresa'].isin([selecionado]) if selecionado else True 
        df_filtered = df_filtered[condition_empresa]
        
    return df_filtered


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
            
            return redirect(url_for('index'))
        else:
            return 'Arquivo no formato incorreto!'
    else:
        return 'Nenhum arquivo foi enviado', 400


#PAGINA INICIAL ONDE MOSTRA A PLANILHA PODENDO SER FILTRADA, PERMITINDO ENVIO DE ARQUIVOS
@app.route('/', methods=['GET', 'POST'])
def index():
    global selecionado
    
    if request.method == "POST":
        
        data = request.get_json()
        selecionado = data.get('selecionado')
        
        html_output = filtro_empresas(selecionado)

        return html_output.to_html() 
    else:        
        return render_template("index.html", filtered_json=filtered_json, filtered_options=filtered_options)


#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
   