import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpBody from 'App/Models/Transfer/HttpBody'
import HttpHeader from 'App/Models/Transfer/HttpHeader'
import BeerService from 'App/Services/BeerService'
export default class UserController {

  private beerService: BeerService = new BeerService();

  public async search(ctx: HttpContextContract) {
    const result = await this.beerService.search(ctx.request.param('page'), ctx.request.param('per_page'));

    const headers: HttpHeader[] = [
      { key: 'Content-type', value: 'application/json' }
    ];

    const body: HttpBody = { code: 'SEARCH_SUCCESS', result };

    ctx.response.status(200).send({body, headers });
  }
}