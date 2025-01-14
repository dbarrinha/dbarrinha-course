import { memo, useCallback, useState } from "react"

const ComponentB = memo(({ handleUpdate }: any) => {
    //console.log("renderizizou B")
    return <button type="button" className="w-6 text-black bg-green-400" onClick={handleUpdate}>+</button>
})

const Rerender = () => {
    const [counter, setCounter] = useState(0)

    const ordemDeExecucao = useCallback(async () => {
        console.log(1)
        setTimeout(() => console.log(2), 1000)
        setTimeout(() => console.log(3), 0)
        await new Promise((resolve) => {
            //setTimeout(() => resolve(console.log(4)), 0)
            resolve(console.log(4))
        })
        console.log(5)
    }, [])

    const handleUpdate = useCallback(() => {
        setCounter(prev => prev + 1)
        ordemDeExecucao()
    }, [ordemDeExecucao])

    return (
        <div>
            <p>
                counter: {counter}
            </p>
            <button type="button" className="w-6 text-white bg-black" onClick={handleUpdate}>+</button>
            <ComponentB handleUpdate={handleUpdate} />
        </div>
    )
}

export default Rerender