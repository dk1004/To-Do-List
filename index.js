function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Do taxes',
        isCompleted: false,
      },
      {
        text: 'Get Eggs',
        isCompleted: false,
      },
      {
        text: 'Go to the Gym',
        isCompleted: false,
      }    
    ]);
    
    const addTodo = text => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
    }
  
    const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
    
    return(
      
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) =>
          <ToDo index={i} key={i} todo={todo} remove={removeTodo}/>)}
          <TodoForm addTodo={addTodo}/>
        </div>
      </div>
      
    );
  }
  
  ReactDOM.render(
  <App/>,
  document.getElementById('root'));