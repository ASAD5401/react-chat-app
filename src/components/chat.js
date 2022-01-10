import React from 'react'
import { useLocation,useParams } from 'react-router-dom'


const Chat=(props)=>{
    const { id } = useParams()
    console.log(id)

    // console.log(props.email)
    return(
        <>
           <h1>this is chat appp {id}</h1>
        </>
    )

}

export default Chat;