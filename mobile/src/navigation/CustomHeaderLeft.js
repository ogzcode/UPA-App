import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";

import Menu from '../assets/icons/Menu';
import ArrowLeft from '../assets/icons/ArrowLeft';

import { size } from '../assets/style/size';
import { slate } from '../assets/style/color';

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: size["5"]
    }
})

export const CustomHeaderLeft = (props) => {
    if (props.route.name === 'Geri Dön') {
        return <TouchableOpacity onPress={() => props.navigation.navigate(props.route.params.back)} style={styles.headerLeft}>
            <ArrowLeft size={size[8]} color={slate[800]}  />
        </TouchableOpacity>
    }
    return (
        <TouchableOpacity style={styles.headerLeft} onPress={() => {
            props.navigation.openDrawer();
        }}>
            <Menu size={size[9]} color={slate[800]} />
        </TouchableOpacity>
    )
}