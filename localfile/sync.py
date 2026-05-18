from pydoc import text

import obsws_python as obs
from torch import res

client = obs.ReqClient(host='localhost', port=4455, password='N68xJPtTN0s6Ug2k')

def change_text(text):
    res = client.set_input_settings(
        "wstxt",
        {
            "text": text
        },
        overlay=True
    )
