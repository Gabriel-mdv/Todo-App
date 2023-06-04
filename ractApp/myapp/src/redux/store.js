import { configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter'
import todoReducer from './todoSlice'


export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
});

