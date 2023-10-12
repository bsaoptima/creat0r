import requests
import base64

client_id = "b8e4d590-72b5-4aeb-b22d-477e9299b75c"
secret = "f00c13ba-ee93-4809-aabd-3aa2d28c563c"
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
    url = "https://api.sandbox.getphyllo.com/v1/profiles"
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": f"Basic {base_64_encode}"
    }
    response = requests.get(url, headers=headers)
    
accounts = retrieve_accounts()
print(accounts)