import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import Cadastrar from './cadastrar'

const drawerNavigation = createDrawerNavigator({
    Home,
    Cadastrar
});

export default createAppContainer(drawerNavigation);