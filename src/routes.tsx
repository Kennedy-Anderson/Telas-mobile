import login from './pages/login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import cadastrar from './pages/cadastro';
import home from './pages/home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: login,
    Cadastro: cadastrar,
    Principal: home,
  })
);

export default Routes;