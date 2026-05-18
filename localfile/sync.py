import obsws_python as obs

client = obs.ReqClient(host='localhost', port=4455, password='N68xJPtTN0s6Ug2k')

res = client.set_input_settings(
    "wstxt",
    {
        "text": "a"
    },
    overlay=False
)

print(res)