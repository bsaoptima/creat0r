import requests
import base64
import pandas as pd

client_id = "b8e4d590-72b5-4aeb-b22d-477e9299b75c"
secret = "bd73b665-2cfc-4572-b588-6309a366f8d4"
to_encode = client_id + ":" + secret
base_64_encode = base64.b64encode(to_encode.encode('utf-8')).decode('utf-8')

def get_all_users():
    url = "https://api.staging.getphyllo.com/v1/users"
    headers = {
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers)
    return response.json()

# users = get_all_users()
# print(users)

def create_user():
    url = "https://api.staging.getphyllo.com/v1/users"
    payload = {
        "name": "John Doe",
        "external_id": "179a0bb4-c572-4477-9457-7dacf1b84849"
    }
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

def create_sdk_token():
    url = "https://api.staging.getphyllo.com/v1/sdk-tokens"
    payload = {
    "user_id": "bf96d8e5-ce3f-422a-b782-de026edf706c",
    "products": ["IDENTITY", "IDENTITY.AUDIENCE", "ENGAGEMENT", "ENGAGEMENT.AUDIENCE", "INCOME"]
    }
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()


def retrieve_accounts():
    url = "https://api.staging.getphyllo.com/v1/profiles"
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers)
    return response.json()
    
# accounts = retrieve_accounts()
# print(accounts)


def retrieve_comments():
    url = "https://api.staging.getphyllo.com/v1/social/comments"

    querystring = {"account_id":"11c19e75-3cc9-4d40-a28f-b2dcb81d7e62","content_id":"f0115f6d-bf74-4cd4-8f73-1e495237da02"}

    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }

    response = requests.get(url, headers=headers, params=querystring)

    return response.json()
    
comments = retrieve_comments()
print(comments)

def getProfile(account_id):
    url = "https://api.staging.getphyllo.com/v1/profiles"
    params = {"account_id":account_id}
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers, params=params)
    return response.json()

# profile = getProfile("1a34a23c-42b3-489f-b372-7f38d4b200b4")
# print(profile)

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

engagement = PHYLLO_getEngagement("1a34a23c-42b3-489f-b372-7f38d4b200b4")
print(engagement)