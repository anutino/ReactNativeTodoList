import { Text, TouchableOpacity, View, } from 'react-native';
import { useState } from 'react'
import styles from '../style.js'
import { AddNewButton } from '../addNewButton'
import { AddNewTaskForm } from './addNewTaskForm.js';

export const Item = ({ item, addTask, setSelectedTask }) => {
    const [shouldShowNewTaskForm, setShouldShowNewTaskForm] = useState(false)
    return (
        <View>
            <Text style={{ color: item.color, fontSize: 18, fontWeight: 'bold' }} padding={3} margin={3}>{item.title}</Text>
            {
                item.subtasks.map((value) => {
                    return <TouchableOpacity key={value.item} onPress={() => setSelectedTask(item.title, value.item)}>
                        <View style={styles.tasks.taskLayout}>
                            <View style={styles.tasks.taskContainer}>
                                <View style={styles.tasks.circle} backgroundColor={value.isSelected ? '#008000' : 'white'} ></View>
                                <Text style={styles.tasks.taskText}>{value.item}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                })
            }
            <TouchableOpacity onPress={() => setShouldShowNewTaskForm(!shouldShowNewTaskForm)}>
                <View style={styles.tasks.taskLayout}>
                    <AddNewButton text={"+ New task"} />
                </View>
            </TouchableOpacity>
            {
                shouldShowNewTaskForm ? (
                    <AddNewTaskForm setShouldShowNewTaskForm={setShouldShowNewTaskForm} addTask={addTask} item={item} />
                ) : null
            }
        </View >
    )
}
