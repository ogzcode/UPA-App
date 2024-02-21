import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Home from "../views/Home";
import About from "../views/About";
import Category from "../views/Category";
import Post from "../views/Post";

import HouseIcon from "../assets/icons/HouseIcon";
import CategoryIcon from "../assets/icons/CategoryIcon";
import BookIcon from "../assets/icons/BookIcon";

import { CustomDrawer } from "./CustomDrawer";
import { CustomHeaderLeft } from "./CustomHeaderLeft";

import { slate } from "../assets/style/color";
import { size } from "../assets/style/size";

const Drawer = createDrawerNavigator();

const getDrawerIcon = (props) => {
    let iconComponent;
    if (props.route.name === 'Anasayfa') {
        iconComponent = <HouseIcon size={size["6"]} color={slate[700]} />;
    } else if (props.route.name === 'Kategoriler') {
        iconComponent = <CategoryIcon size={size["6"]} color={slate[700]} />;
    } else if (props.route.name === 'Hakkında') {
        iconComponent = <BookIcon size={size["6"]} color={slate[700]} />;
    }
    return iconComponent;
}


export default function DrawerStack() {
    return (
        <Drawer.Navigator screenOptions={(props) => ({
            drawerActiveBackgroundColor: slate[100],
            drawerActiveTintColor: slate[500],
            drawerInactiveTintColor: slate[500],
            headerTitleStyle: {
                fontFamily: "Roboto-Medium",
                fontSize: size["6"],
                color: slate[800]
            },
            headerStyle: {
                backgroundColor: "white",
                shadowColor: "rgba(0, 0, 0, .8)",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0,
                shadowRadius: 0,
                elevation: 4,
            },
            headerLeft: () => <CustomHeaderLeft {...props} />,
            drawerIcon: () => getDrawerIcon(props),
        })
        }
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Anasayfa" component={Home} options={{
                drawerLabelStyle: styles.drawerLabel
            }} />
            <Drawer.Screen name="Kategoriler" component={Category} options={{
                drawerLabelStyle: styles.drawerLabel
            }} />
            <Drawer.Screen name="Hakkında" component={About} options={{
                drawerLabelStyle: styles.drawerLabel
            }} />
            <Drawer.Screen
                name="Post"
                component={Post}
                options={{
                    drawerLabel: () => null,
                    drawerItemStyle: { display: "none" }
                }}
            />
        </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    drawerLabel: {
        fontSize: size["4"],
        fontFamily: "Roboto-Medium",
        color: slate[700]
    }
})
