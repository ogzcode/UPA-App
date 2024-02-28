import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getPost } from '../../services/request';

import { Header } from './Header';

import { slate, sky, blue } from '../../assets/style/color';
import { size } from '../../assets/style/size';
import { border } from '../../assets/style/border';
import { typography } from '../../assets/style/typography';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    thumbBox: {
        paddingHorizontal: size[6],
    },
    thumbImage: {
        width: "100%",
        height: size["64"],
        borderRadius: border["rounded"]["lg"],
    },
    contentContainer: {
        padding: size[6],
    },
    header: {
        color: slate["800"],
        fontSize: typography["fontSizes"]["2xl"],
        fontFamily: "Roboto-Bold",
        marginBottom: size[2],
    },
    subtitle: {
        color: slate["700"],
        fontSize: typography["fontSizes"]["xl"],
        fontFamily: "Roboto-Bold",
        marginBottom: size[2],
        lineHeight: typography["lineHeights"]["3xl"],
    },
    paragraph: {
        color: slate["700"],
        fontSize: typography["fontSizes"]["lg"],
        fontFamily: "Roboto-Regular",
        marginBottom: size[4],
        lineHeight: typography["lineHeights"]["3xl"],
    },
    link: {
        color: blue["500"],
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Roboto-Regular",
        marginBottom: size[4],
        lineHeight: typography["lineHeights"]["3xl"],
    },
    list: {
        marginBottom: size[4],
    },
    listItem: {
        color: slate["600"],
        fontSize: typography["fontSizes"]["md"],
        fontFamily: "Roboto-Regular",
        lineHeight: typography["lineHeights"]["3xl"],
        fontStyle: "italic",
    },
    imageCaption: {
        color: slate["600"],
        fontSize: typography["fontSizes"]["sm"],
        fontFamily: "Roboto-Light",
        marginBottom: size[4],
        lineHeight: typography["lineHeights"]["3xl"],
        fontStyle: "italic",
        textAlign: "center",
    }
});

const parseContent = (content, index) => {
    if (content.type === "header") {
        return <Text key={index} style={styles.header}>{content.content}</Text>
    }
    else if (content.type === "subtitle") {
        return <Text key={index} style={styles.subtitle}>{content.content}</Text>
    }
    else if (content.type === "paragraph") {
        return <Text key={index} style={styles.paragraph}>{content.content}</Text>
    }
    else if (content.type === "image") {
        return <Image key={index} source={{ uri: content.content }} style={styles.thumbImage} resizeMode='contain' />
    }
    else if (content.type === "link") {
        return (
            <Text
                key={index}
                style={styles.link}
                onPress={() => Linking.openURL(content.content)}
            >
                {content.content}
            </Text>
        )
    }
    else if (content.type === "list") {
        return <View key={index} style={styles.list}>
            {
                content.content.map((item, index) => {
                    return <Text style={styles.listItem} key={index}> - {item}</Text>
                })
            }
        </View>
    }
    else if (content.type === "blockquote") {
        return <Text key={index} style={styles.paragraph}>{content.content}</Text>
    }
    else if (content.type === "image-caption") {
        return <Text key={index} style={styles.imageCaption}>{content.content}</Text>
    }
}

export default function Post() {
    const route = useRoute();
    const { link } = route.params;

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPost(link)
            .then((data) => {
                setPost(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });

        return () => {
            setPost({});
            setLoading(true);
        }
    }, [link]);
    return (
        <ScrollView style={styles.container}>
            {loading && <ActivityIndicator size="large" color={sky["800"]} style={{ marginTop: size[6] }} />}
            {
                !loading && post.content && (
                    <View>
                        <Header heading={post?.header?.heading} date={post?.header?.date} readingCount={post?.header?.reading_count} />
                        <View style={styles.thumbBox}>
                            <Image source={{ uri: post?.thumb }} style={styles.thumbImage} />
                        </View>
                        <View style={styles.contentContainer}>
                            {
                                post?.content?.map((item, index) => parseContent(item, index))
                            }
                        </View>
                    </View>
                )
            }
        </ScrollView>
    )
}