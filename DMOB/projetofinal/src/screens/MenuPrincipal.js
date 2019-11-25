import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Container, Header, Content, Body } from 'native-base'

import Home from './Home'
import Cadastrar from './cadastrar'
import MeusDados from './MeusDados'
import Pagina from './Pagina'



const drawerNavigation = createDrawerNavigator({
    Home,
    MeusDados,
    Cadastrar,
    Pagina
});


export default createAppContainer(drawerNavigation);