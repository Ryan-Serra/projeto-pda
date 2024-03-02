from flask import Flask, render_template, request, jsonify, redirect, url_for
import pandas as pd
import json


# PERMITINDO ENVIO DE ARQUIVOS

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    
    df = pd.read_excel('./output/Vagas.xlsx')

    #return render_template('index.html', data=df_base.to_json(orient='records'))
     return data=df.to_json(orient='records')

#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
