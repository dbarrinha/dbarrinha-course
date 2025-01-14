import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import './DropDownProtal.css'

interface DropDownList {
    open: boolean;
    offset: DOMRect;
    onClick?: (selected: string) => void;
}

const MOCKED_LIST = ["TESTE 1", "TESTE 2", "TESTE MUITO GRANDE"]

const DropDownList = memo(({ open, offset, onClick }: DropDownList) => {
    const style = offset ? {
        top: offset.top + offset.height - 1,
        left: offset.left,
        width: offset.width
    } : {}


    return (
        <div
            style={style}
            className={`
                absolute 
                w-fit
                min-w-20
                border-gray-900
                border
                rounded-ee-md rounded-es-md
                ${open ? 'inline-block' : 'collapse'}
            `}
        >
            <ul>
                {MOCKED_LIST.map(item => {
                    return (
                        <li
                            key={item}
                            className={`
                                cursor-pointer 
                                border-t 
                                bg-white
                                hover:bg-slate-300
                                hover:text-slate-700
                                w-full p-2 
                                last:rounded-ee-md last:rounded-es-md
                                `}
                        //onClick={() => console.log("teste")}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})

const DropDownProtal = () => {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const offsetRef = useRef<DOMRect | null>(null)

    useEffect(() => {
        if (wrapperRef.current) {
            offsetRef.current = wrapperRef.current.getBoundingClientRect()
        }
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleToggle = (_e: React.MouseEvent<HTMLDivElement>) => {
        setOpen(prev => !prev)
    }

    return (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
            ref={wrapperRef}
            onClick={handleToggle}
            className={`
                border 
                relative 
                border-gray-500 
                cursor-pointer 
                select-none 
                w-fit p-2 
                bg-white
                hover:bg-violet-600 
                hover:text-white
                ${open ? 'rounded-t-md border-b-0 bg-violet-600 text-white' : 'rounded-md'}
            `}>
            <p>Meu Dropdown</p>
            {offsetRef.current && createPortal(<DropDownList open={open} offset={offsetRef.current} />, document.body)}
        </div>
    )
}

export default DropDownProtal;