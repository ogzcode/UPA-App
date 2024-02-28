import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { getTodayDate } from '../utils/util';
import { getHome } from '../services/request';
import PostFooter from './components/PostFooter';

import { slate } from "../assets/style/color";
import { size } from "../assets/style/size";
import { typography } from "../assets/style/typography";
import { border } from "../assets/style/border";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    headerBox: {
        paddingHorizontal: size[6],
        paddingVertical: size[8],
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
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
    postList: {
        paddingHorizontal: size[6],
    },
    postBox: {
        marginBottom: size[8],
        position: "relative",
    },
    postBackground: {
        height: size["80"],
    },
});

export default function Home() {
    const navigation = useNavigation();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getHome().then((res) => {
            setPostList(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleNavigateToPostPage = (link) => {
        navigation.navigate("Geri Dön", { link, back: "Anasayfa" });
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <Text style={styles.headerText}>Son Yazılar</Text>
                <Text style={styles.dateText}>{getTodayDate()}</Text>
            </View>
            <FlatList
                style={styles.postList}
                data={postList}
                renderItem={({ item }) => (
                    <View style={styles.postBox}>
                        <ImageBackground src={item.image} style={styles.postBackground} imageStyle={{ borderRadius: border["rounded"]["lg"] }} />
                        <PostFooter title={item.header} onNavigatePostPage={() => handleNavigateToPostPage(item.link)} />
                    </View>
                )}
            />
        </View>
    )
}