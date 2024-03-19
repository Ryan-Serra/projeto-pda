from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json, os
import database_planilha

# PERMITINDO ENVIO DE ARQUIVOS

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
 
        data = request.get_json()
        arquivo = data.get('arquivo')
        arquivo_modificado = data.get('caminho_arquivo')
        
        
        if arquivo:
            # passando planilha recebida para programa
            database_planilha.main(arquivo)
            df = pd.read_excel('./output/Vagas.xlsx')
            return jsonify(planilha=df.to_dict(orient='records'))
            

        elif arquivo_modificado == './output/Vagas.xslx':
            df = pd.read_excel('./output/Vagas.xlsx')
            return jsonify(planilha=df.to_dict(orient='records'))
    
    return jsonify(planilha=[])

#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
