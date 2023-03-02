import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style'

export const Title = ({ item, setCurrentTask }) => {
    return (
        <TouchableOpacity key={item.title} onPress={() => setCurrentTask(item.title)}>
            <View style={styles.sideBar.titleLayout}>
                <View style={styles.sideBar.titleContainer}>
                    <View style={styles.sideBar.square} backgroundColor={item.color}></View>
                    <Text style={styles.sideBar.titleText}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}