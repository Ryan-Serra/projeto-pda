import sys, os
import time
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler
import getpass
import requests

#TODO olhar o excel e o json!

# caso queira não salvar em logs portanto apenas mostrando no terminal sem salvar nada
class Handler(PatternMatchingEventHandler):
    def __init__(self) -> None:
        PatternMatchingEventHandler.__init__(self, patterns=['*.xlsx'],
                                             ignore_directories=True,
                                             case_sensitive=False)
    def on_created(self, event):
        print(f"Um evento de criação foi feito: {event.src_path}")
    
    def on_modified(self, event):
        self.last_modified_time = 0
        print(f"Um evento de modificação foi feito: {event.src_path}")
        # atualizar o flask
        # mudar o link para a página correta
        #requests.post('http://localhost:5000/', json={'caminho_arquivo': event.src_path})
        # o caminho_arquivo é literalmente o caminho do arquivo
        #requests.post('http://localhost:5000/', json={'caminho_arquivo': 'modificado'})
        
        # testando colocar um limitador
        current_time = time.time()
        if current_time - self.last_modified_time > 1.0:
            print(f'Arquivo Modificado: {event.src_path}')
            self.last_modified_time = current_time
            time.sleep(1)
    
    def on_deleted(self, event):
        print(f"Um evento de exclusão foi feito: {event.src_path}")
    
if __name__ == '__main__':
    # esperar a pasta ser criada | se sim: Começa o monitoramento | se não: espera
    caminho = './output'

    while not os.path.exists(caminho):
        print(f'Pasta {caminho} não encontrada, aguardando...')
        time.sleep(10)

    print(f'Iniciando monitoramento da pasta: {caminho}')  

    #event_handler = LoggingEventHandler()
    event_handler = Handler()
    observer = Observer()
    observer.schedule(event_handler, caminho, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        observer.join()