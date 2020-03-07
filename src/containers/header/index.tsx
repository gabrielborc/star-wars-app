import React from 'react';

import {
    Icon,
    TopNavigation,
    TopNavigationAction,
  } from '@ui-kitten/components';

const MenuIcon = (style) => (
    <Icon {...style} name='menu-outline'/>
);

const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon}/>
);

const renderLeftControls = (navigation) => {
    return (
        <MenuAction onPress={() => { navigation.openDrawer() }} />   
    );
}

export default function Header({navigation, title}: any) {
    return (
        <TopNavigation
            title={title}
            leftControl={renderLeftControls(navigation)}
            style={{marginTop: 24}}
        />
);
}