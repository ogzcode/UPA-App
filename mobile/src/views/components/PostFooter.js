import { View, Pressable, Text, StyleSheet } from "react-native"

import { size } from "../../assets/style/size"
import { border } from "../../assets/style/border"
import { typography } from "../../assets/style/typography"

const styles = StyleSheet.create({
    postFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: size["20"],
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomLeftRadius: border["rounded"]["lg"],
        borderBottomRightRadius: border["rounded"]["lg"],
        justifyContent: "center",
    },
    postHeader: {
        color: "white",
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Roboto-SemiBold",
        padding: size[4],
    },
})

export default function PostFooter({ title, onNavigatePostPage }) {
    return (
        <View style={styles.postFooter}>
            <Pressable onPress={() => onNavigatePostPage()}>
                <Text style={styles.postHeader}>{title.substring(0, 64)}</Text>
            </Pressable>
        </View>
    )
}