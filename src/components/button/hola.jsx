import react, {useState,useMemo} from "react"

const field = ({children,isEnabled}) => {

    return(
        <>
            {
                isEnabled ? <input value={children}/>
                : <span>{children}</span>
            }
        </>)

}

const table = () =>{
    const [ items, setItems] =  useState()
    return(
        <>
            {items.map(item=>{
                (<field isEnabled={item.description}>{item.value}</field>)
            })}
        </>
    )

}