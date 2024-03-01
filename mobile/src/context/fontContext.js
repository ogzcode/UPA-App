import { createContext, useContext } from "react";
import { useFonts } from 'expo-font';
import { ActivityIndicator, View, Image } from "react-native";
import { sky, slate } from "../assets/style/color";
import { size } from "../assets/style/size";

const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [loaded] = useFonts({
        "Roboto-Thin": require('../assets/font/RobotoSlab-Thin.ttf'),
        "Roboto-ExtraLight": require('../assets/font/RobotoSlab-ExtraLight.ttf'),
        "Roboto-Light": require('../assets/font/RobotoSlab-Light.ttf'),
        "Roboto-Regular": require('../assets/font/RobotoSlab-Regular.ttf'),
        "Roboto-Medium": require('../assets/font/RobotoSlab-Medium.ttf'),
        "Roboto-SemiBold": require('../assets/font/RobotoSlab-SemiBold.ttf'),
        "Roboto-Bold": require('../assets/font/RobotoSlab-Bold.ttf'),
        "Roboto-ExtraBold": require('../assets/font/RobotoSlab-ExtraBold.ttf'),
        "Roboto-Black": require('../assets/font/RobotoSlab-Black.ttf'),
    });

    if (!loaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: size[8] }}>
                <Image source={require("../assets/image/logo.png")} width={size[48]} />
                <ActivityIndicator size="large" color={sky[800]} />
            </View>
        )
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    )
}

export const useFont = () => useContext(FontContext);