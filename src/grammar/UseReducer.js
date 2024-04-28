import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    // const [count, setCount] = useState(0)
    // const onIncrease = () => {
    //     setCount(count + 1)
    // }

    // const onDecrease = () => {
    //     setCount(count - 1)
    // }

    function reducer(state, action) {
        switch (action.type) {
            case 'increase':
                return {counter : state.counter + 1}
            case 'decrease':
                return {counter : state.counter - 1}    
            case 'reset':
                return {counter : 0}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {counter : 0})

    return (
    <div>
        <h1>Counter</h1>
        <p>{state.counter}</p>
        <button onClick={() => {dispatch({type: 'increase'})}}>+</button>
        <button onClick={() => {dispatch({type: 'decrease'})}}>-</button>
        <button onClick={() => {dispatch({type: 'reset'})}}>reset</button>
    </div>
  )
}

export default UseReducer