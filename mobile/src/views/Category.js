import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from '../store/slice/CategorySlice';
import { getCategories } from '../store/slice/CategorySlice';

import { sky } from "../assets/style/color";
import { border } from "../assets/style/border";
import { size } from "../assets/style/size";
import { typography } from "../assets/style/typography";

const getImageByCategory = (category) => {
    switch (category) {
        case "amerika":
            return require("../assets/image/abd.jpg");
        case "avrupa":
            return require("../assets/image/avrupa.jpg");
        case "asya":
            return require("../assets/image/asya.jpg");
        case "afrika":
            return require("../assets/image/afrika.jpg");
        case "okyanusya":
            return require("../assets/image/okyanusya.jpg");
        case "balkanlar":
            return require("../assets/image/balkanlar.jpg");
        case "digerleri":
            return require("../assets/image/diger.jpg");
        case "kafkasya":
            return require("../assets/image/kafkaslar.jpg");
        case "ortadogu":
            return require("../assets/image/ortadogu.jpg");
        case "turk-dis-politikasi":
            return require("../assets/image/turkiye.jpg");
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: size[4],
    },
    contentContainer: {
        flex: 1,
        position: "relative",
    },
    thumbBox: {
        borderRadius: border["rounded"]["lg"],
    },
    bottom: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderBottomLeftRadius: border["rounded"]["lg"],
        borderBottomRightRadius: border["rounded"]["lg"],
        padding: size[2],
        zIndex: 1,
    },
    title: {
        color: "white",
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Roboto-Bold",
        textAlign: "center",
    },
    thumbImage: {
        width: "100%",
        height: 200,
        borderRadius: border["rounded"]["lg"],
    }
});

const NavItem = ({ item, index }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    if (item.url === "") return null;

    const handleClicked = (category) => {
        dispatch(selectCategory(category));
        navigation.navigate("Postlar");
    }

    return (
        <View style={[styles.contentContainer, {
            marginRight: index % 2 === 0 ? size[6] : 0,
            marginBottom: size[6],
        }]}>
            <View style={styles.bottom}>
                <Pressable onPress={() => handleClicked(item.url)}>
                    <Text style={styles.title}>{item.title}</Text>
                </Pressable>
            </View>
            <View style={styles.thumbBox}>
                <Image
                    source={getImageByCategory(item.url)}
                    style={styles.thumbImage}
                />
            </View>
        </View>
    )
}

export default function Category() {
    const dispatch = useDispatch();
    const { categories, loading } = useSelector((state) => state.category);

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getCategories());
        }
    }, []);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color={sky["800"]} />}
            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <NavItem item={item} index={index} />
                }
            />
        </View>
    )
}