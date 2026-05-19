import requests
import time
from sync import change_text, on_off
url = "https://learning-337d2-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json"
prv = None
while True:
    time.sleep(1)
    data = requests.get(url)
    upd = data.json()!=prv
    if not upd: continue
    prv = data.json()

    try:
        change_text(data.json()[list(data.json().keys())[-1]]['question'])
        on_off("normal", "Main", True)
        time.sleep(5)
        on_off("normal", "Main", False)
    except Exception as e:
        print(e)
        pass
    
