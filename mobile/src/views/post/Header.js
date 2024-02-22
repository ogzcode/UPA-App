import { StyleSheet, View, Text } from "react-native"

import { slate } from "../../assets/style/color"
import { size } from "../../assets/style/size"
import { typography } from "../../assets/style/typography"
import { border } from "../../assets/style/border"
import EyeIcon from "../../assets/icons/EyeIcon"

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: size[6],
        paddingVertical: size[8],
    },
    dateText: {
        color: slate[500],
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Roboto-Regular"
    },
    headerText: {
        color: slate[700],
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Roboto-SemiBold"
    },
    headerBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: size[2],
    },
    date: {
        color: slate[500],
        fontSize: typography["fontSizes"]["sm"],
        fontFamily: "Roboto-Regular",
    },
    readingBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: size[2],
    },
    readingText: {
        color: slate[500],
        fontSize: typography["fontSizes"]["sm"],
        fontFamily: "Roboto-Regular",
        textAlign: "center",
    },
});


export const Header = ({ heading, date, readingCount }) => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{ heading }</Text>
            <View style={styles.headerBottom}>
                <Text style={styles.date}>{ date }</Text>
                <View style={styles.readingBox}>
                    <EyeIcon size={20} color={slate[500]} />
                    <Text style={styles.readingText}>{ readingCount }</Text>
                </View>
            </View>
        </View>
    )
}