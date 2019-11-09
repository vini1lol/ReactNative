import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import { Container, Header, Content, Body } from 'native-base'

import Home from './Home'
import Cadastrar from './cadastrar'
import MeusDados from './MeusDados'
import Pagina from './Pagina'

// const CostumDrawerComponent = (props) => (
//     // <SafeAreaView style={{ flex: 1 }}>
//     //     <View style={{ height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: "center" }}>
//     //         <Image source={{ uri: "https://viverdeblog.com/wp-content/uploads/2017/04/como-escrever-um-livro-topo.png" }} style={{ height: 120, width: 120 }} />
//     //     </View>
//     //     <ScrollView>
//     //         <DrawerItems {...props} />
//     //     </ScrollView>
//     // </SafeAreaView>

//     <ScrollView>
//         <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//             <DrawerItems {...props} />
//         </SafeAreaView>
//     </ScrollView>

//     // <Container>
//     //     <Header style={{ height: 250 }}>
//     //         <Body>
//     //             <Image
//     //                 source={{ uri: "https://viverdeblog.com/wp-content/uploads/2017/04/como-escrever-um-livro-topo.png" }}
//     //                 style={{ height: 120, width: 120 }}
//     //             />
//     //         </Body>
//     //     </Header>
//     //     <Content>
//     //         <DrawerItems {...props} />
//     //     </Content>
//     // </Container>
// );

const drawerNavigation = createDrawerNavigator({
    Home,
    MeusDados,
    Cadastrar,
    Pagina
}, {
    // contentComponent: props => {
    //     <ScrollView>
    //         <DrawerItems {...props} />
    //         <Text>Your Own Footer Area After</Text>
    //     </ScrollView>
    // }
});


export default createAppContainer(drawerNavigation);