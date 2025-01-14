
const NativeForm = () => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData.get("name"))
    }


    return (
        <form onSubmit={onSubmit} className="flex gap-1">
            <input className="border border-gray-500 p-1 focus:outline-none rounded-sm" name="name" />
            <button className="bg-slate-400 text-cyan-700 rounded-sm" type="submit">manda bala</button>
        </form>
    )
}

export default NativeForm