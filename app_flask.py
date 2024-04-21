from flask import Flask, request, jsonify
import pandas as pd, os
import database_planilha
from datetime import datetime
# PERMITINDO ENVIO DE ARQUIVOS

app = Flask(__name__)

def pega_planilha():
    df = pd.read_excel('./output/Vagas.xlsx')
    for coluna in df.iloc[:,:2]:
        for k, data in enumerate(df[coluna]):
            
            if isinstance(data, datetime):
                df.loc[k, coluna] = df.loc[k, coluna].strftime('%Y-%m-%d')

    df.to_json('./output/planilha.json', orient='records', force_ascii=False)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
 
        if 'arquivo' in request.files:
            arquivo = request.files['arquivo']

            database_planilha.main(arquivo)
            pega_planilha()
            return 'Planilha Importada'
        
        else:
            
            arquivo_modificado = request.get_json().get('caminho_arquivo')
            if arquivo_modificado:
                pega_planilha()     

            return 'Planilha atualizada'
        
        
    
        
    elif request.method == 'GET':

        if not os.path.exists('./output/Vagas.xlsx'):
            planilha = pd.DataFrame()

        else:
            planilha = pd.read_excel('./output/Vagas.xlsx')
        
        for coluna in planilha.iloc[:,:2]:
            for k, data in enumerate(planilha[coluna]):
                
                if isinstance(data, datetime):
                    planilha.loc[k, coluna] = planilha.loc[k, coluna].strftime('%Y-%m-%d')
        planilha.to_json('./output/planilha.json', orient='records', force_ascii=False)
        
        return 'Peguei a planilha!'


#caminho para testes, AINDA NÃO FINALIZADO!
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
