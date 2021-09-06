
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListItem from './components/todoListItem'
import todosData from './components/todosData'

class App extends React.Component {
   constructor(){
     super()
     this.state = {
       todos: todosData
     }
     this.handleChange = this.handleChange.bind(this);
   }

handleChange(id){
     this.setState(prevState => {
       const updatedTodos = prevState.todos.map(todo =>{
         if(todo.id === id){
           return {
             ...todo,
            completed : !todo.completed
           }
           
         }
         return todo
         
       })
       return {
         todos: updatedTodos
       }
     })
}

render(){
  const todoListItem = this.state.todos.map(item =>{
    return (
      <ToDoListItem key ={item.id} item = {item}
      handleChange = {this.handleChange}
      />
    )
  })
  return (
    <div className = "body">
      <h1 style={{color:"blue", textAlign: "center"}}>To Do List</h1>
      {todoListItem}
    </div>
  );
}
}

export default App;
