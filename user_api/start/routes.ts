import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.post('/login', 'LoginController.login')
  Route.get('/logout', 'LoginController.logout')
});

Route.group(() => {
  Route.post('/users', 'UserController.create')
  Route.patch('/users', 'UserController.update')
}).middleware(['auth', 'authApiKey']);