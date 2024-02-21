import { createContext, useContext } from "react";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native";

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
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    )
}

export const useFont = () => useContext(FontContext);