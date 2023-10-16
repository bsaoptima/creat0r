import axios from "axios";

const PHYLLO_BASE_URL = "https://api.staging.getphyllo.com";
const URL_CREATE_USER = "/v1/users";
const URL_CREATE_USER_TOKEN = "/v1/sdk-tokens";
const URL_GET_ACCOUNT = "/v1/accounts";

const PHYLLO_CLIENT_ID = "b8e4d590-72b5-4aeb-b22d-477e9299b75c";
const PHYLLO_SECRET_ID = "f00c13ba-ee93-4809-aabd-3aa2d28c563c";

// const PHYLLO_BASE_URL = "https://api.sandbox.getphyllo.com";
// const URL_CREATE_USER = "/v1/users";
// const URL_CREATE_USER_TOKEN = "/v1/sdk-tokens";
// const URL_GET_ACCOUNT = "/v1/accounts";

// const PHYLLO_CLIENT_ID = "70dd45cd-729d-476c-b113-6cb8d7bacbae";
// const PHYLLO_SECRET_ID = "d65743d9-5306-4125-ad19-dafb34944804";

const getAxiosInstance = () => {
  const api = axios.create({
    baseURL: PHYLLO_BASE_URL,
    auth: {
      username: PHYLLO_CLIENT_ID,
      password: PHYLLO_SECRET_ID,
    },
  });
  return api;
};

const createUser = async (username, externalId) => {
  try {
    const userId = localStorage.getItem("PHYLLO_USER_ID");
    if (Boolean(userId)) {
      return userId;
    }
    const api = getAxiosInstance();
    let response = await api.post(URL_CREATE_USER, {
      name: username,
      external_id: externalId,
    });
    localStorage.setItem("PHYLLO_USER_ID", response.data.id)
    return response.data.id;
  } catch (err) {
    return err.body;
  }
};

const createUserToken = async (userId) => {
  try {
    const token = localStorage.getItem("PHYLLO_SDK_TOKEN");
    if (Boolean(token)) {
      return token;
    }
    const api = getAxiosInstance();
    let response = await api.post(URL_CREATE_USER_TOKEN, {
      user_id: userId,
      products: ["IDENTITY", "ENGAGEMENT"],
    });
    return response.data.sdk_token;
  } catch (err) {
    return err.body;
  }
};

const getAccounts = async (userId) => {
  try {
    const api = getAxiosInstance();
    let response = await api.get(`${URL_GET_ACCOUNT}?user_id=${userId}`);
    return response;
  } catch (err) {
    return err.body;
  }
};

export { createUser, createUserToken, getAccounts };
