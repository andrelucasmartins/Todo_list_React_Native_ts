import React, { useState } from 'react'
import { Alert, FlatList, Image, Text, View } from "react-native"

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import { styles } from './styles'

import { CreateButton } from "@components/Button/Create"
import { Input } from '@components/Input'
import { Task } from '@components/Task'

interface TaskProps {
  id: string,
  name: string,
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [name, setName] = useState('')

  function handleItemAdd() {
    setTasks([...tasks,
    {
      id: uuidv4(),
      name: name,
      isCompleted: false
    }])

    setName('')
  }

  function handleToggleCompletedById(taskId: string) {
    const taskIsCompletedChecked = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(taskIsCompletedChecked)
  }

  function handleTaskRemove(TaskId: string, description: string) {
    Alert.alert('Remover', `Remove o participante ${description}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setTasks(prevState => prevState.filter(
              task => task.id !== TaskId
            ))
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
  }

  const counterCompletedList = tasks.filter(task => task.isCompleted).length

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('@assets/Logo.png')}
        />
      </View>

      <View style={styles.form}>
        <Input
          placeholder="Nome do participante"
          onChangeText={setName}
          value={name}

        />
        <CreateButton
          onPress={handleItemAdd}
        />
      </View>

      <View style={styles.task}>
        <View style={styles.counters}>
          <View style={styles.counterItem}>
            <Text style={styles.text}>
              Criadas
            </Text>
            <View style={styles.counterNumber} >
              <Text style={{
                color: "#fff",
                fontSize: 12

              }}>
                {tasks.length}
              </Text>
            </View>
          </View>

          <View style={styles.done}>
            <Text style={styles.text2}>
              Concluídas
            </Text>
            <View style={styles.counterNumber} >
              <Text style={{
                color: "#fff"
              }}>
                {counterCompletedList}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => (
              <Task
                key={item.id}
                name={item.name}
                id={item.id}
                onCompleted={handleToggleCompletedById}
                onRemove={() => handleTaskRemove(item.id, item.name)}
              />
            )
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listNone}>
              <Image
                source={require('../../../assets/Clipboard.png')}
              />
              <View style={styles.notListContainer}>
                <Text style={styles.notListTextBold}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.notListText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />

      </View>
    </View>
  )
}