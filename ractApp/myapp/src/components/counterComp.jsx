import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { decrement, decrementByAmount, increment } from '../redux/counter'


export default function CounterComp() {
    const count = useSelector(state => state.counter.count)
    
    const dispatch  = useDispatch();

    return(
        <div>

            <h1>count is: {count}</h1>

            <button onClick={() => {
                dispatch(increment())
                console.log(count)
            }}> Increase</button>

            <button onClick= {() => dispatch(decrement())}> Decrease   </button>
            <button onClick= {() => dispatch(decrementByAmount(10))}> Increment by 10   </button>


        </div>
    )
}
