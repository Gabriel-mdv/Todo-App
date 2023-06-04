import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getTodoAsync = createAsyncThunk(
    'todos/getTodoAsync', 
    async () => {
        const response = await fetch ('http://localhost:7000/todos')
        if(response.ok){
            const todos = await response.json()

            return {todos: todos}
        }
    }
    
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async(payload) => {
        const response = await fetch('http://localhost:7000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({title: payload.title})
        })

        if(response.ok){
            const todo = await response.json()
            return {todo}
        }
    }
)

export const toogleCompleteAsync = createAsyncThunk(
    'todos/toogleCompleteAsync',
    async(payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: payload.completed})
        })

        if(response.ok){
            const todo = await response.json()

            return {id: todo.id, completed: todo.completed}
        }
    }
)

export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodoAsync', 
    async (payload) => {
        const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'DELETE'
        })

        if(response.ok){
            const todos = await response.json()

            return {todos: todos}
        }
    }
)

const todoSlice = createSlice({ 
    name: 'todos',
    initialState: {
         todos:[
            {id: 1, title: 'todo1', completed: true}, 
            { id: 2, title: 'todo2', completed: false },
            { id: 3, title: 'todo3', completed: true },
            { id: 4, title: 'todo334', completed: false },
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }

            state.todos.push(newTodo);
        }, 
        toogleComplete: (state, action) => {
          const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[index].completed = action.payload.completed;
            console.log(index)

        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos.splice(index, 1)
        }
    }, 
    extraReducers: {
        [getTodoAsync.pending]: (state, action) => {
            console.log('fetching ....')
        },
        [getTodoAsync.fulfilled]: (state, action) => {
            console.log('fetching done')
            const todos = action.payload.todos;
            return {todos: todos}
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            console.log('we are here')
            state.todos.push(action.payload.todo)
        }, 
        [toogleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id)

            state.todos[index].completed = action.payload.completed
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            const todos = action.payload.todos
            
            return {todos: todos}
        }
    }
})

export const {addTodo, toogleComplete, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;





