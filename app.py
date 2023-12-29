from flask import Flask, render_template, request
import pandas as pd
import json

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


app = Flask(__name__)

selecionado = ''  # Variável a ser atualizada dinamicamente

def filtro_empresas(selecionado):
    
    df_filtered = df_base2.copy()

    if selecionado:
        condition_empresa = df_filtered['Empresa'].isin([selecionado]) if selecionado else True 
        df_filtered = df_filtered[condition_empresa]
        
    return df_filtered

def mostra_ai(selecionado):
    
    df_filtered = filtro_empresas(selecionado)

    return df_filtered



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

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
   