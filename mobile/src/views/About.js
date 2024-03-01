import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getAbout } from '../services/request';

import { sky, slate } from "../assets/style/color";
import { size } from "../assets/style/size";
import { typography } from "../assets/style/typography";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: size[6],
    },
    contentContainer: {
        flex: 1,
    },
    text: {
        marginBottom: size[4],
        color: slate[700],
        fontFamily: "Roboto-Medium",
        fontSize: typography["fontSizes"]["lg"],
        lineHeight: typography["lineHeights"]["2xl"],
    },
});

export default function About() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAbout().then(response => {
            setAbout(response.data);
            setLoading(false);
        });
    }
    , []);
    return (
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size="large" color={sky[700]} /> :
                    <ScrollView style={styles.contentContainer}>
                        {
                            about.map((item, index) => {
                                return (
                                    <Text key={index} style={[styles.text]}>{item}</Text>
                                )
                            })
                        }
                    </ScrollView>
            }
        </View>
    )
}