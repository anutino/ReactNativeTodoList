
import { View, Text, TouchableOpacity } from 'react-native';
import { AddNewFolderForm } from './addNewFolderFrom';
import { AddNewButtom } from '../addNewButtom';
import { useState } from 'react';
import { Title } from './title'
import styles from '../style'

export const SideBar = ({ tasks, addFolder, setCurrentTask }) => {

    const [shouldShowNewFolderForm, setShouldShowNewFolderForm] = useState(false);

    return <View style={styles.sideBar.container} >
        <View>
            <TouchableOpacity onPress={() => setCurrentTask('')}  >
                <View style={styles.sideBar.allTaskItem}>
                    <Text>All task</Text>
                </View>
            </TouchableOpacity>
            {tasks.map((item) => {
                return (
                    <Title item={item} setCurrentTask={setCurrentTask} key={item.title} />
                )
            })
            }
            <TouchableOpacity onPress={() => setShouldShowNewFolderForm(!shouldShowNewFolderForm)} >
                <AddNewButtom text={"+ Add new folder"} />
            </TouchableOpacity>
            {shouldShowNewFolderForm ? (
                <AddNewFolderForm setShouldShowNewFolderForm={setShouldShowNewFolderForm} addFolder={addFolder} />
            ) : null}
        </View>
    </View >
}