
const makeRequest = async <T>(url: string, method: string, body?: unknown): Promise<T> => {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, config);
  const data = (await response.json()) as T;
  return data;
};

const get = async <T>(url: string): Promise<T> => {
  return makeRequest<T>(url, 'GET');
};

const post = async <T>(url: string, body: unknown): Promise<T> => {
  return makeRequest<T>(url, 'POST', body);
};

export const Api = {
  get,
  post
};