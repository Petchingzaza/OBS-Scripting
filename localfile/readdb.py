import requests
import time
from sync import change_text
url = "https://learning-337d2-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json"
prv = None
while True:
    time.sleep(1)
    data = requests.get(url)
    upd = data.json()!=prv
    if not upd: continue
    prv = data.json()
    change_text(data.json()[list(data.json().keys())[-1]]['question'])
    
