import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { useState } from "react";
import styles from '../style'

export const AddNewTaskForm = ({ item, addTask, setShouldShowNewTaskForm }) => {
    const [task, setTask] = useState();
    return (
        <View style={styles.addNewButton.addMenu}>
            <TouchableOpacity onPress={() => setShouldShowNewTaskForm(false)}>
                <Text fontSize='1' alignSelf='flex-end'>X</Text>
            </TouchableOpacity>
            <KeyboardAvoidingView flex={1} >
                <TextInput style={styles.addNewButton.input} placeholder={'Task name'}
                    value={task} onChangeText={text => setTask(text)} />
            </KeyboardAvoidingView>
            <TouchableOpacity flex={2} onPress={() => addTask(item.title, task)}>
                <View style={styles.addNewButton.addButton} width={60} >
                    <Text>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}