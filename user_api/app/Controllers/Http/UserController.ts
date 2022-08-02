import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpBody from 'App/Models/Transfer/HttpBody'
import HttpHeader from 'App/Models/Transfer/HttpHeader'
import UserService from 'App/Services/UserService'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
export default class UserController {

  private userService: UserService = new UserService();

  public async create(ctx: HttpContextContract) {
    // @ts-ignore
    await ctx.bouncer.with('UserPolicy').authorize('create', await ctx.auth.use('api'))

    const payload = await ctx.request.validate(CreateUserValidator)

    const result = await this.userService.create(payload)

    const headers: HttpHeader[] = [
      { key: 'Content-type', value: 'application/json' }
    ]

    const body: HttpBody = { code: 'CREATE_SUCCESS', result }

    ctx.response.default(body, headers, 200);

  }

  public async update(ctx: HttpContextContract) {

    // @ts-ignore
    await ctx.bouncer.with('UserPolicy').authorize('update', await ctx.auth.use('api'))

    const payload = await ctx.request.validate(UpdateUserValidator)

    const result = await this.userService.update(payload)

    const headers: HttpHeader[] = [
      { key: 'Content-type', value: 'application/json' }
    ]

    const body: HttpBody = { code: 'UPDATE_SUCCESS', result }

    ctx.response.default(body, headers, 200)

  }
}