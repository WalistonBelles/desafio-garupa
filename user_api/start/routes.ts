import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.post('/users', 'v1/UserController.create')
  Route.patch('/users', 'v1/UserController.update')
}).middleware(['auth', 'authApiKey'])
