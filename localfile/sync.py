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

def on_off(SCENE_NAME, SOURCE_NAME, on=True):


    items = client.get_scene_item_list(
        SCENE_NAME
    )

    item_id = None

    for item in items.scene_items:

        if item["sourceName"] == SOURCE_NAME:

            item_id = item["sceneItemId"]
            break

    if item_id is not None:

        # ปิด
        if not on:
            client.set_scene_item_enabled(
                SCENE_NAME,
                item_id,
                False
            )

        else:
            client.set_scene_item_enabled(
                SCENE_NAME,
                item_id,
                True
            )

    else:

        print("Source not found")