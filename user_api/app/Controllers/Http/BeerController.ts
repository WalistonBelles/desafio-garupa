import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpBody from 'App/Models/Transfer/HttpBody'
import BeerService from 'App/Services/BeerService'
export default class UserController {

  private beerService: BeerService = new BeerService();

  public async search(ctx: HttpContextContract) {
    const result = await this.beerService.search(ctx.request.param('page'), ctx.request.param('per_page'));
    
    const body: HttpBody = { code: 'SEARCH_SUCCESS', result };

    ctx.response.status(200).send({ code: body.code, result: body.result.body});
  }
}