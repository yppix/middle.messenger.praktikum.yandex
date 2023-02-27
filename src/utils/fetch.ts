enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method?: METHOD;
  timeout?: number;
  headers?: Record<string, string>;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

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
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHOD.GET});
  };

  put = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHOD.PUT});
  }

  post = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest>  => {
    return this.request(url, {...options, method: METHOD.POST});
  }

  delete = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest>  => {
    return this.request(url, {...options, method: METHOD.DELETE});
  }


  request(url: string, options: Options = {}): Promise<XMLHttpRequest> {
    const {method= METHOD.GET, data, headers = {}, timeout = 3000} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.open(method, url);

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
