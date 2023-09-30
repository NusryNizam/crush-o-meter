import { createContext, useState } from "react";

type NameContextType = {
    name: string,
    crushName: string
}
export const NameContext = createContext<NameContextType>({
    name: '',
    crushName: ''
})


type NameProviderPropTypes = {
    children: React.ReactNode
  }
export function NameProvider({children}: NameProviderPropTypes) {
    const [name, setName] = useState('')
    const [crushName, setCrushName] = useState('')

    const value = {
        name: name,
        crushName: crushName,
        setCrushName,
        setName
    }

    return (
        <NameContext.Provider value={value}>
            {children}
        </NameContext.Provider>
    )

}