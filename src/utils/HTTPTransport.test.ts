import sinon from "sinon";
import HTTPTransport from "./HTTPTransport";
import {expect} from "chai";

describe('HTTPTransport class', () => {

  const originalXMLHttpRequest = global.XMLHttpRequest;
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];
  const testData = {a: 1};

  beforeEach(() => {
    const XHR = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = XHR;

    XHR.onCreate = (xhr) => {
      requests.push(xhr)
    }
  })

  afterEach(() => {
    requests.length = 0;
  });

  after(() => {
    global.XMLHttpRequest = originalXMLHttpRequest;
  })

  describe('Get method', () => {
    it('should make GET request', () => {
      const transport = new HTTPTransport('/');

      transport.get();

      expect(requests[0].method.toUpperCase()).to.eq('GET');
    });

    it('should have parameters in GET request', () => {
      const transport = new HTTPTransport('/');

      transport.get('/', testData);

      // @ts-ignore
      const query = Object.keys(testData).map(key => `${key}=${encodeURIComponent(testData[key])}`)

      expect(requests[0].url).to.includes(query);
    });
  });

  describe('Post method', () => {
    it('should make POST request', () => {
      const transport = new HTTPTransport('/');

      transport.post('/');

      expect(requests[0].method.toUpperCase()).to.eq('POST');
    });

    it('should have parameters in POST request', () => {
      const transport = new HTTPTransport('/');

      transport.post('/', testData);

      const query = JSON.stringify(testData);

      expect(requests[0].requestBody).to.eq(query);
    });
  });

  describe('Put method', () => {
    it('should make PUT request', () => {
      const transport = new HTTPTransport('/');

      transport.put('/', testData);

      expect(requests[0].method.toUpperCase()).to.eq('PUT');
    });

    it('should have parameters in PUT request', () => {
      const transport = new HTTPTransport('/');

      transport.put('/', testData);

      const query = JSON.stringify(testData);

      expect(requests[0].requestBody).to.eq(query);
    });

    it ('should send FormData in PUT request', () => {
      const transport = new HTTPTransport('/');

      const formData = new FormData();

      transport.put('/', formData);

      expect(requests[0].requestBody).to.be.instanceof(FormData);
    });

    it ('should send FormData with image in PUT request', () => {
      const transport = new HTTPTransport('/');

      let blob = new Blob([""], { type: 'text/html' });
      let fakeF = <File>blob;

      const formData = new FormData();
      formData.append('test', 'test');
      formData.append('image', fakeF, 'tests/file.png')

      transport.put('/', formData);

      expect(requests[0].requestBody).to.eq(formData);
    });
  });

  describe('Delete method', () => {
    it('should make DELETE request', () => {
      const transport = new HTTPTransport('/');

      transport.delete('/', testData);

      expect(requests[0].method.toUpperCase()).to.eq('DELETE');
    });

    it('should have parameters in DELETE request', () => {
      const transport = new HTTPTransport('/');

      transport.delete('/', testData);

      const query = JSON.stringify(testData);

      expect(requests[0].requestBody).to.eq(query);
    });
  })
})

