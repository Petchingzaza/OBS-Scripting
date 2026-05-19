import obsws_python as obs

client = obs.ReqClient(host='localhost', port=int(input("PORT : ")), password=input("PASSWORD : "))

def change_text(text):
    res = client.set_input_settings(
        "wstxt",
        {
            "text": text
        },
        overlay=True
    )
