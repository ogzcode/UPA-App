import React from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"

import ChevronDoubleLeft from "../assets/icons/ChevronDoubleLeft"
import ChevronLeft from "../assets/icons/ChevronLeft"
import ChevronDoubleRight from "../assets/icons/ChevronDoubleRight"
import ChevronRight from "../assets/icons/ChevronRight"


import { slate, sky } from "../assets/style/color"
import { size } from "../assets/style/size"
import { typography } from "../assets/style/typography"
import { border } from "../assets/style/border"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: size[6],
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    page: {
        color: slate[800],
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Roboto-Bold",
        marginHorizontal: size[2],
    },
    paginateBtn: {
        width: size[12],
        height: size[12],
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: border["rounded"]["full"],
        marginHorizontal: size[2],
        borderWidth: border["width"]["default"],
    },
    activeBtn: {
        backgroundColor: sky[800],
        borderWidth: 0,
    },
    activeText: {
        color: "white",
    }
})

const getPaginateIcon = (page, isActive) => {
    switch (page) {
        case "First":
            return <ChevronDoubleLeft size={size[6]} color={slate[800]} />
        case "Previous":
            return <ChevronLeft size={size[6]} color={slate[800]} />
        case "Next":
            return <ChevronRight size={size[6]} color={slate[800]} />
        case "Last":
            return <ChevronDoubleRight size={size[6]} color={slate[800]} />
        default:
            return <Text style={[styles.page, isActive && styles.activeText]}>{page}</Text>
    }
}

export default function Pagination({ paginate, onPaginatePage }) {
    if (paginate.length <= 5) {
        return (
            <View style={styles.container}>
                {paginate.map((item, index) => (
                    <Pressable key={index} onPress={() => onPaginatePage(item.link)} style={[styles.paginateBtn, item.link === "#" && styles.activeBtn]}>
                        {getPaginateIcon(item.page, item.link === "#")}
                    </Pressable>
                ))}
            </View>
        )
    }

    const isNumber = (value) => {
        return !isNaN(value);
    }

    const getPaginate = (item, index) => {
        if (!isNumber(item.page)) {
            return (
                <Pressable key={index} onPress={() => onPaginatePage(item.link)} style={[styles.paginateBtn]}>
                    {getPaginateIcon(item.page)}
                </Pressable>
            )
        }

        if (item.link === "#") {
            return (
                <Pressable key={index} onPress={() => onPaginatePage(item.link)} style={[styles.paginateBtn, styles.activeBtn]}>
                    {getPaginateIcon(item.page, true)}
                </Pressable>
            )
        }
    }

    return (
        <View style={styles.container}>
            {
                paginate.map((item, index) => getPaginate(item, index))
            }
        </View>
    )
}