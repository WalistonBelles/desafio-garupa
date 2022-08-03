import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.post('/login', 'LoginController.login')
  Route.get('/logout', 'LoginController.logout')
});

Route.group(() => {
  Route.post('/users', 'UserController.create')
  Route.patch('/users', 'UserController.update')
  Route.get('/users', 'UserController.search')
  Route.get('/user/:id', 'UserController.find')

  Route.get('/beers/:page/:per_page', 'BeerController.search')
}).middleware(['auth', 'authApiKey']);