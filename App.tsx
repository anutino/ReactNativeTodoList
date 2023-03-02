import React, { useState, useMemo } from 'react'
import { FlatList, View, } from 'react-native'
import { Keyboard } from 'react-native'
import { Item } from './components/tasks/taskItem'
import { Tasks } from './components/data'
import { SideBar } from './components/sideBar/sideBar'
import styles from './components/style'

function App() {
  const [tasks, setTasks] = useState([...Tasks])
  const [currentTask, setCurrentTask] = useState('')

  const currentTaskMemo = useMemo(() => {
    return currentTask === '' ? tasks : tasks.filter(item => item.title == currentTask);
  }, [currentTask, tasks])

  const setSelectedTask = (title, subtitle) => {
    setTasks((prev) => prev.map(item => {
      if (title === item.title) {
        item.subtasks.map(e => {
          if (e.item === subtitle) {
            e.isSelected = !e.isSelected
            return e
          } else {
            return e
          }
        })
      }
      return item
    }))
  }

  const addFolder = (task, folderColor) => {
    Keyboard.dismiss();
    if (task != null) {
      setTasks([...tasks, { title: task, color: folderColor, subtasks: [] }])
    }
  }

  const addTask = (title, task) => {
    Keyboard.dismiss();
    setTasks((prev) => prev.map(item => {
      if (title === item.title) {
        item.subtasks.push({ item: task, isSelected: false })
        return { ...item }
      } else {
        return item
      }
    }))
  }
  return (
    <View style={[styles.mainCard]}>
      <SideBar tasks={tasks} addFolder={addFolder} setCurrentTask={setCurrentTask} />

      <View style={styles.tasks.container}>
        <FlatList
          data={currentTaskMemo}
          keyExtractor={currentTaskMemo => currentTaskMemo.title}
          renderItem={({ item }) => {
            return <Item item={item} addTask={addTask} setSelectedTask={setSelectedTask} />
          }}
        />
      </View>
    </View >
  );
}

export default App;
