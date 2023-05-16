import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.leftIcon}>
                <Text style = {styles.indexIcon}>{props.index}</Text>
            </View>
            <Text style = {styles.task}>{props.text}</Text>
            <TouchableOpacity onPress= {() => props.deleteTask()}>
                <View style = {styles.rightIcon}></View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'center',
        margin: 15,
    },
    task: {
        flex: 0.88,
        marginLeft: 5,
        padding: 10,
        fontSize: 19,

    },
    leftIcon: {
        padding:1,
        width: 29,
        height: 29,
        borderRadius: 5,
        flexDirection: 'row',
        borderColor: 'green',
        borderWidth: 2,
        marginLeft: 7,

    },
    rightIcon: {
        width: 22,
        height: 29,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 2,
      
    },
    indexIcon: {
        marginLeft: 6,
        marginTop: 2,
    }
})

export default Task;