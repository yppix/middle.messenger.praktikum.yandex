enum METHOD {
  GET = 'Get',
  POST = 'Post',
  PUT = 'Put',
  DELETE = 'Delete',
  PATCH = 'Patch'
}

type Options = {
  method?: METHOD;
  timeout?: number;
  headers?: Record<string, string>;
  data?: any;
};

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = '/', data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.GET,
      data,
    });
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.PUT,
      data,
    });
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.PATCH,
      data,
    });
  }

  public delete<Response>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.DELETE,
      data,
    });
  }

  private request<Response>(url: string, options: Options = {}): Promise<Response> {
    //const {method, data} = options;
    const {method = METHOD.GET, data} = options;
    const isFormData = data instanceof FormData;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(
            method,
            isGet && !!data
              ? `${url}${queryStringify(data)}`
              : url,
          );

      xhr.onreadystatechange = () => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({reason: 'abort'});
      xhr.onerror = () => reject({reason: 'network error'});
      xhr.ontimeout = () => reject({reason: 'timeout'});

      if (!isFormData) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === METHOD.GET || !data) {
              xhr.send();
            } else {
              xhr.send(isFormData ? data : JSON.stringify(data));
            }
    });
  }
}
