import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { View, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'

import Home from './Home'
import Cadastrar from './cadastrar'

const CostumDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: "center" }}>
            <Image source={{ uri: "https://viverdeblog.com/wp-content/uploads/2017/04/como-escrever-um-livro-topo.png" }} style={{ height: 120, width: 120 }} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
    // <Container>
    //     <Header>
    //         <Body>
    //             <Image
    //                 source={{ uri: "https://viverdeblog.com/wp-content/uploads/2017/04/como-escrever-um-livro-topo.png" }}
    //                 style={{ height: 120, width: 120 }}
    //             />
    //         </Body>
    //     </Header>
    //     <Content>
    //         <DrawerItems {...props} />
    //     </Content>
    // </Container>
);

const drawerNavigation = createDrawerNavigator({
    Home,
    Cadastrar
}, {
    contentComponent: CostumDrawerComponent
});


export default createAppContainer(drawerNavigation);