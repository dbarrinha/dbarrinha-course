import { createContext, memo, useContext, useState } from "react"

const Context = createContext<{ counter: number; counter2: number }>({ counter: 0, counter2: 0 })

const ComponentA = memo(() => {
    console.log('ComponentA')
    return <div>A</div>
})

const ComponentB = memo(() => {
    const { counter } = useContext(Context)
    console.log('ComponentB')
    return <div>B {counter}</div>
})


const ContextApi = () => {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    return (
        <Context.Provider value={{ counter, counter2 }}>
            <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button type="button" onClick={() => setCounter2(counter2 + 1)}>Increment2</button>
            <span>{counter}</span>
            <span>{counter}</span>
            <ComponentA />
            <ComponentB />
        </Context.Provider>
    )
}

export default ContextApi