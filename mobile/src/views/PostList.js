import { useFocusEffect, useNavigation } from "@react-navigation/native"
import React, { useState, useCallback } from "react"
import { Text, View, ActivityIndicator, StyleSheet, ScrollView, ImageBackground, Pressable } from "react-native"
import { getByCategory, getByCategoryAndPage } from "../services/request";
import Pagination from "./Pagination";
import PostFooter from "./components/PostFooter";

import { useSelector } from "react-redux";

import { sky, slate } from "../assets/style/color";
import { size } from "../assets/style/size";
import { typography } from "../assets/style/typography";
import { border } from "../assets/style/border";



const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: size[6],
    },
    header: {
        color: sky[800],
        fontSize: typography["fontSizes"]["2xl"],
        fontFamily: "Roboto-Bold",
        marginBottom: size[2],
    },
    scroll: {
        flex: 1,
    },
    postBox: {
        backgroundColor: "white",
        marginBottom: size[8],
        position: "relative",
    },
    postBackground: {
        height: size["80"],
    },
    createDate: {
        position: "absolute",
        top: size[4],
        right: size[4],
        backgroundColor: "white",
        paddingVertical: size[2],
        paddingHorizontal: size[4],
        borderRadius: border["rounded"]["full"],
        zIndex: 1,
    },
    dateText: {
        color: slate[800],
        fontSize: typography["fontSizes"]["sm"],
        fontFamily: "Roboto-Bold",
    }
});


export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedCategory } = useSelector((state) => state.category);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            getByCategory(selectedCategory)
                .then((response) => {
                    setPosts(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });

            return () => {
                setPosts([]);
                setLoading(true);
            }
        }, [selectedCategory])
    )

    const handlePage = (page) => {
        setLoading(true);
        getByCategoryAndPage(page)
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleNavigateToPostPage = (link) => {
        navigation.navigate("Geri Dön", { link, back: "Postlar" });
    }

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color={sky[800]} />}
            {
                !loading && posts.length !== 0 && (
                    <>
                        <Text style={styles.header}>{posts?.category?.header}</Text>
                        <ScrollView style={styles.scroll}>
                            {posts?.category.posts?.map((post, index) => (
                                <View style={styles.postBox} key={index}>
                                    <View style={styles.createDate}>
                                        <Text style={styles.dateText}>{post.create_date}</Text>
                                    </View>
                                    <ImageBackground src={post.image} style={styles.postBackground} imageStyle={{ borderRadius: border["rounded"]["lg"] }} />
                                    <PostFooter title={post.title} onNavigatePostPage={() => handleNavigateToPostPage(post.link)} />
                                </View>
                            ))}
                            <Pagination paginate={posts.pagination} onPaginatePage={handlePage} />
                        </ScrollView>
                    </>
                )
            }
        </View>
    )
}