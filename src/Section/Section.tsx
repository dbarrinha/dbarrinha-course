import type { ReactNode } from "react"

interface SectionProps {
    children: ReactNode;
    title: string;
}

const Section = ({ children, title }: SectionProps) => {
    return (
        <div className="p-6 flex flex-col gap-3">
            <h1 className="text-3xl font-semibold font-sans ">
                # {title}
            </h1>
            {children}
        </div>
    )
}

export default Section