import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { View, Image, StyleSheet } from "react-native"

import { size } from "../assets/style/size"
import { border } from "../assets/style/border"
import { slate } from "../assets/style/color"

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: border.width["default"],
        borderBottomColor: slate[300],
        paddingBottom: size["4"],
    },
    logo: {
        width: size["56"],
        resizeMode: "contain"
    },
    itemContainer: {
        padding: size["2"],
        marginTop: size["2"]
    }
})

export const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/image/logo.png")} style={styles.logo} />
            </View>
            <View style={styles.itemContainer}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}