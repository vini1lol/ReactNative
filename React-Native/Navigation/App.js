import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from "react-navigation-tabs";
import Home from "./src/components/Home"
import Perfil from './src/components/Perfil'

const navigation = createBottomTabNavigator({
  Home,
  Perfil
})

export default createAppContainer(navigation)
