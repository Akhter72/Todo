import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text,TextInput, View, KeyboardAvoidingView } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null || task.trim().length == 0) return;
    setTasks([...tasks, task.trim()]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (


    <View style={styles.container}>
      
        <View style = {{flex:1.5}}>
          <Text style={styles.header}>TODO</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.taskStyles}>
          <ScrollView>
          {
            tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            );
            })
          }
          </ScrollView>
          </View>
          <View style={styles.input}>
            <TaskInputField addTask={addTask}/>
          </View>
        </View>
    </View>


  //   <View style={styles.container}>
  //   <View>
  //   <Text style = {styles.heading}>TODO</Text>
  //   </View>

  //     <ScrollView style={{flex:8}}>
  //       {
  //       tasks.map((task, index) => {
  //         return (
  //           <View key={index} style={styles.taskContainer}>
  //             <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
  //           </View>
  //         );
  //       })
  //     }
  //     </ScrollView>
  //     <View style={{flex:1}}>
  //       <TaskInputField addTask={addTask}/>
  //     </View>
  //   </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#293240',
   },
   header: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30,
    margin: 10,
    marginTop: 20,
   },
   body: {
    flex: 8,
   },
   taskStyles: {
    flex: 6,

   },
   input: {
    flex: 0.7,
   }
   
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#293240',
//   },
//   heading: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '600',
//     marginTop: 30,
//     marginBottom: 10,
//     marginLeft: 20,
//     backgroundColor: "#436436",
//     flex:1
//   },
//   taskContainer: {
//     marginTop: 20,
//   }
// });






// import React, {useState, Component} from 'react';
// import { View, TextInput, StyleSheet, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button, Platform} from 'react-native';
// import Task from './components/Task';

// export default function App() {
//     const [task, setTask] = useState();
//     const [taskItems, setTaskItems] = useState([]);

//     const handleAddTask = () => {
//         if(task == null || task.trim().length ===0) {
//             return;
//         }
//         setTaskItems([...taskItems, task]);
//         console.log(taskItems);
//         setTask(null);
//     }

//     const deleteTask = (deleteIndex) => {
//         setTaskItems(taskItems.filter((value, index) => index != deleteIndex));
//     }

//     return (

//     <View style = {styles.mainContainer}>
//         <Text style={styles.header}>TODO</Text>
//         <ScrollView style={styles.tasks} >
//             {
//                 taskItems.map((item,index) => {
//                     return <Task text={item} index={index+1} deleteTask={() => deleteTask(index)}/>
//                 })
//             }
//         </ScrollView>

//         <View style = {styles.input}
//             behavior = {Platform.os === 'ios' ? 'padding': 'height'}
//             >
//             <TextInput style = {styles.taskInput} placeholder = {"Write Your Task"}
//                 value= {task} onChangeText= {text => setTask(text)}
//                 multiline={true}
//                 />
//             <TouchableOpacity onPress = {() => handleAddTask()}
//                         style = {styles.addIconBox}>
//                 <Text style = {styles.addIcon}>+</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//     )
// }

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex:1,
//         backgroundColor: '#293240',
//         flexDirection: 'column',
//     },
//     header: {
//         fontSize: 35,
//         padding: 20,
//         color: 'white',
//         fontWeight: 'bold',
//         backgroundColor: '#3d5b60'
//         },
//     tasks: {
//         paddingTop: 10,
//         backgroundColor: 'green',
//         maxHeight: 585,
//         },
//     input: {
//         position: 'absolute',
//         bottom: 10,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         margin: 9,
//         padding: 5,
//     },
//     addIcon: {
//         flex:1,
//         fontSize: 33,
//         marginLeft: 10,
//         paddingLeft: 14,
//         paddingTop: 3,
//         paddingRight:10,
//         borderRadius: 25,
//         borderWidth: 1,
//         backgroundColor: '#3d5b60',
//         color: 'white',
//     },
//     taskInput: {
//         flex: 4,
//         borderRadius: 10,
//         paddingLeft: 10,
//         borderColor: 'black',
//         borderWidth: 1.5,
//         height:53,
//         backgroundColor: '#3d5b60',
//         color: 'white',
//         fontColor: '#3d5b60',
//         fontSize: 20
//     }
// })
