import requests
import base64
import pandas as pd

client_id = "b8e4d590-72b5-4aeb-b22d-477e9299b75c"
secret = "f00c13ba-ee93-4809-aabd-3aa2d28c563c"
to_encode = client_id + ":" + secret
base_64_encode = base64.b64encode(to_encode.encode('utf-8')).decode('utf-8')


def PHYLLO_getAccount(account_id):
    url = f"https://api.staging.getphyllo.com/v1/accounts/{account_id}"
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers)
    return response.json()


def PHYLLO_getProfile(account_id):
    url = "https://api.staging.getphyllo.com/v1/profiles"
    params = {"account_id":account_id}
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers, params=params)
    return response.json()


def PHYLLO_getContent(account_id):
    url = "https://api.staging.getphyllo.com/v1/social/contents"
    params = {"account_id":account_id}
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers, params=params)
    return response.json()

def PHYLLO_getEngagement(account_id):
    content_info = PHYLLO_getContent(account_id)["data"]
    posts = len(content_info)
    df = pd.DataFrame(content_info)
    views = df["engagement"].apply(lambda x: x.get("view_count", 0)).sum()
    likes = df["engagement"].apply(lambda x: x.get("like_count", 0)).sum()

    response = {
        "posts": posts,
        "likes": likes,
        "views": views
    }
    return response

    
