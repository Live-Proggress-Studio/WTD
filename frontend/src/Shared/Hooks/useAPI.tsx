import ky from "ky";
import { API_URL } from "@Shared/variables";

const api = ky.create({
  prefixUrl: API_URL,
});

async function useApi(url, method, data = null, useCookies = false) {
  try {
    const options = {
      method,
      headers: {},
    };

    if (data) {
      options.json = data;
    }

    // Проверяем флаг useCookies, и если он true, добавляем credentials: "include"
    if (useCookies) {
      options.credentials = "include";
    }

    const response = await api(url, options);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}

export default useApi;
