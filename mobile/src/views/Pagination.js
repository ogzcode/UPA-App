import React, { useEffect, useState } from "react"
import { View, Text, Pressable, StyleSheet, Modal, ScrollView, TouchableOpacity, Dimensions } from "react-native"

import ChevronDoubleLeft from "../assets/icons/ChevronDoubleLeft"
import ChevronLeft from "../assets/icons/ChevronLeft"
import ChevronDoubleRight from "../assets/icons/ChevronDoubleRight"
import ChevronRight from "../assets/icons/ChevronRight"
import Cross from "../assets/icons/Cross"


import { slate, sky, red } from "../assets/style/color"
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
        color: slate[500],
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
        borderColor: slate[500],
    },
    activeBtn: {
        backgroundColor: sky[700],
        borderWidth: 0,
    },
    activeText: {
        color: "white",
    },
    centeredView: {
        width: "100%",
        height: size[40],
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: border["width"]["default"],
        borderTopColor: slate[300],
    },
    inner: {
        position: "relative",
        paddingHorizontal: size[2],
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: border["rounded"]["lg"],
        alignItems: "flex-end",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: size[8],
    },
    modelPageText: {
        color: slate[600],
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Roboto-Bold",
    },
    closeBtn: {
        position: "absolute",
        top: size[2],
        borderWidth: border["width"]["default"],
        borderColor: red[500],
        borderRadius: border["rounded"]["full"],
        width: size[12],
        height: size[12],
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    }
})

const getPaginateIcon = (page, isActive) => {
    switch (page) {
        case "First":
            return <ChevronDoubleLeft size={size[6]} color={slate[500]} />
        case "Previous":
            return <ChevronLeft size={size[6]} color={slate[500]} />
        case "Next":
            return <ChevronRight size={size[6]} color={slate[500]} />
        case "Last":
            return <ChevronDoubleRight size={size[6]} color={slate[500]} />
        default:
            return <Text style={[styles.page, isActive && styles.activeText]}>{page}</Text>
    }
}

export default function Pagination({ paginate, onPaginatePage }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [lastPage, setLastPage] = useState(0);
    const [paginateData, setPaginateData] = useState(null);
    const leftPosition = (Dimensions.get('window').width - size[10]) / 2;
    const [activePage, setActivePage] = useState(null);

    if (!paginate) {
        return null;
    }

    useEffect(() => {
        let copy = paginate[paginate.length - 1];
        setLastPage(copy.link.split("/"));

        if (paginate?.length > 5) {
            let copy = paginate?.filter((item, index) => {
                if (!isNumber(item.page)) {
                    return item;
                }

                if (item.link === "#") {
                    return item;
                }
            })
            setPaginateData(copy);
        }
        else {
            setPaginateData(paginate);
        }

        setActivePage(parseInt(paginate.filter((item, index) => item.link === "#")[0].page));
    }, [paginate])

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
                <Pressable key={index} onPress={() => setModalVisible(true)} style={[styles.paginateBtn, styles.activeBtn]}>
                    {getPaginateIcon(item.page, true)}
                </Pressable>
            )
        }

        if (paginateData?.length <= 5) {
            return (
                <Pressable key={index} onPress={() => onPaginatePage(item.link)} style={[styles.paginateBtn]}>
                    {getPaginateIcon(item.page)}
                </Pressable>
            )
        }
    }

    return (
        <View style={styles.container}>
            {
                paginateData?.length > 0 && paginateData?.map((item, index) => getPaginate(item, index))
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                
            >
                <View style={styles.centeredView}>
                    <View style={styles.inner}>
                        <Pressable style={[styles.closeBtn, { left: leftPosition }]} onPress={() => setModalVisible(!modalVisible)}>
                            <Cross size={size[8]} color={red[500]} />
                        </Pressable>

                        <ScrollView contentContainerStyle={styles.modalView} horizontal={true}>
                            {
                                Array.from({ length: parseInt(lastPage[2]) }, (v, k) => k + 1).map((page, index) => (
                                    <TouchableOpacity  key={index} style={[styles.paginateBtn, page === activePage && styles.activeBtn]} onPress={() => onPaginatePage(`${lastPage[0]}/page/${page}`)}>
                                        <Text style={[styles.modelPageText, {
                                            color: page === activePage ? "white" : slate[600]
                                        }]}>{page}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}