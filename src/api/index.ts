interface IFetch {
  method: 'POST' | 'GET';
  url: string;
  data?: BodyInit;
}

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const [resource, config] = args;

  // request interceptor starts
  // resource = 'https://jsonplaceholder.typicode.com/todos/2';
  // request interceptor ends

  const response = await originalFetch(resource, config);

  // if (!response.ok && response.status === 404) {
  //   // 404 error handling
  //   return Promise.reject(response);
  // }

  // response interceptor starts
  // const json = () =>
  //   response
  //     .clone()
  //     .json()
  //     .then((data) => ({ ...data, title: `Intercepted: ${data.title}` }));

  // response.json = json;
  // response interceptor ends

  return response;
};

// eslint-disable-next-line import/prefer-default-export
export async function http<T>(options: IFetch): Promise<T> {
  const fetchOptions: RequestInit = {
    method: options.method,
  };

  if (options.data) {
    fetchOptions.body = options.data;
  }

  const url = import.meta.env.VITE_BASE_URL + options.url;

  const response = await fetch(url, fetchOptions);
  const data: T = await response.json();

  return data;
}
