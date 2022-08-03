import HttpResponse from 'App/Models/Transfer/HttpResponse';
import https from 'https'

export default class BeerService {
  public options;
  public protocol;

  constructor(options?) {
    this.options = options;
    this.protocol = https;
  }

  public async search(page: number, per_page: number): Promise<HttpResponse> {
    return this.request({ 
      hostname: 'api.punkapi.com',
      method: "GET", 
      path: `/v2/beers?page=${page}&per_page=${per_page}`
    })
  }
  
  public async request(body?) : Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      const req = this.protocol.request(body, (res) => {
        let chunks: any = "";
        res.on('data', data => chunks+=data);
        
        res.on('end', () => {
          const result = { 
            status: res.statusCode, 
            headers: res.headers, 
            body: this.requestParse(res.headers, chunks)
          }

          if (res.statusCode < 200 || res.statusCode > 299) {
            reject(result)
          } else {
            resolve(result)
          }
        })
      });

      req.on('error', (err) => {
        console.log(err)
        reject({ status: 500 })
      })
      
      req.end();
    })
  }

  public requestParse(headers, chunks) {
    let resBody = chunks;

    const contentType = headers['content-type'] ? headers['content-type'].split(";")[0] : "application/json" 
    switch(contentType) {
      case 'application/json':
        resBody = chunks ? JSON.parse(chunks) : chunks;
        break;
    }
    return resBody;
  }
}