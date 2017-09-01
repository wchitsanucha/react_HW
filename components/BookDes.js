import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView, Image, Button } from 'react-native';
import BookDetail from './BookDetail'
import MyScreen from './MyScreen'
import { Actions } from 'react-native-router-flux';

const BookDes = (props) => (
    <View style={styles.container}>
        <Image source={{uri: props.book_image}} style={styles.image} />
        <View style={styles.container2}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.author}>{props.description}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    container2: {
        paddingTop: 20,
    },
    image: {
        paddingLeft: 15,
        height: 150,
        width: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        textAlign: "right",
    },
    author: {
        fontSize: 12,
        textAlign: "right",
    }
});
export default BookDetail;