import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { useState } from 'react'
import { folderColors } from '../data'
import styles from '../style'

export const AddNewFolderForm = ({ setShouldShowNewFolderForm, addFolder }) => {
  const [task, setTask] = useState()
  let folderColor = null
  const setFolderColor = (color) => {
    folderColor = color
  }
  const onAdd = () => {
    if (folderColor == null) {
      folderColor = folderColors[Math.floor(Math.random() * folderColors.length)]
    }
    addFolder(task, folderColor)
    folderColor = null
    setTask(null);
  }

  return (
    <View style={styles.addNewButton.addMenu}>
      <KeyboardAvoidingView flex={1} >
        <TextInput style={styles.addNewButton.input} placeholder={'Folder name'}
          value={task} onChangeText={text => setTask(text)} />
      </KeyboardAvoidingView>
      <View flex={1} flexDirection='row' alignItems='center' justifyContent='space-between'>
        {
          folderColors.map((item) => {
            return (
              <TouchableOpacity key={item} onPress={() => setFolderColor(item)}>
                <View
                  width={10}
                  height={10}
                  backgroundColor={item}
                  opacity={0.4}
                  borderRadius={10}
                  marginRight={1} />
              </TouchableOpacity>

            )
          })
        }
      </View>
      <View flex={1} flexDirection='row' justifyContent='space-between'>
        <TouchableOpacity onPress={() => onAdd()}>
          <View style={styles.addNewButton.addButton} alignSelf='center' width={50} >
            <Text color='white'>Add</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShouldShowNewFolderForm(false)}>
          <View style={styles.addNewButton.cancelButton} alignSelf='center' width={55} >
            <Text color='white'>Cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
