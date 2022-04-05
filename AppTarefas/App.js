import React, {useState, useEffect, useRef}from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import Login from './src/Login'
import firebase from './src/firebase';
import TaskList from './src/tasklist'
import database from '@react-native-firebase/database';



export default function App(){
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const [newTask, setNewTask] = useState('');
  const [key, setKey] = useState('')

  useEffect(() => {
    function getUser(){
      if(!user){
        return;
      }

      database().ref('tarefas').child(user).once('value', (snapshot) => {
        setTasks([]);
        snapshot?.forEach((childItem) => {
          let data ={
            key: childItem.key,
            nome: childItem.val().nome
          }
          setTasks(oldTasks => [...oldTasks, data])

        })

      })
    }

    getUser();
  }, [user])



  function handleDelete(key){
      database().ref('tarefas').child(user).child(key).remove()
      .then(() => {
          const findTasks = tasks.filter(item => item.key !== key)
          setTasks(findTasks)
      })
  }

  function handleEdit(data){
      setKey(data.key)
      setNewTask(data.nome)
      inputRef.current.focus();
  }

  function handleAdd(){
    if(newTask === ''){
      return
    }

    //Usuario quer editar
    if(key !== ''){
      database().ref('tarefas').child(user).child(key).update({
        nome: newTask
      })
      .then(()=>{
        const taskIndex = tasks.findIndex(item => item.key === key)
        let taskClone = tasks;
        taskClone[taskIndex].nome = newTask
        setTasks([...taskClone])
      })

      Keyboard.dismiss();
      setNewTask('')
      setKey('')
      return;
    }


    let tarefas = database().ref('tarefas').child(user)
    let chave = tarefas.push().key;

    tarefas.child(chave).set({
      nome: newTask
    })
    .then(()=>{
      console.log('Tarefa criada')
      const data = {
        key: chave,
        nome: newTask
      }

      setTasks(oldTasks => [...oldTasks, data])
    })

    setNewTask('')
  }

  if(!user){
    return <Login changeStatus={(user) => setUser(user)}/>
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
        style={styles.input}
        placeholder = "O que você vai fazer hoje?"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
        ref={inputRef}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data = {tasks}
      keyExtractor={(item) => item.key }
      renderItem={({item}) => (
          <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit}/>
      )}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#f2f6fc'
    },
    containerInput:{
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#FFF',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#141414',
      height: 45
    },
    btnAdd:{
      backgroundColor: '#141414',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 5,
      paddingHorizontal: 14,
      borderRadius: 4,
    },
    btnText:{
      color: '#FFF',
      fontSize: 22
    }
})