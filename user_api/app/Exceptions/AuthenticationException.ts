import HttpContext, { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Exception as StandaloneException } from '@adonisjs/core/build/standalone'
import Logger from "@ioc:Adonis/Core/Logger"

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new TestException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class AuthenticationException extends StandaloneException {

  constructor(code: string , status: number = 401) {
    const ctx: HttpContextContract = HttpContext.getOrFail()

    super(ctx.i18n.formatMessage(`exceptions.${code}`), status, code);
  }
  
  public report(error: this) {
    Logger.error(JSON.stringify(error))
  }
}
