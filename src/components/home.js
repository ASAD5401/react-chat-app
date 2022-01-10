import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    const email='asad@gmail.com'

    return(
        <>
                <Link to={`/chat/${email}`}>CHAT WITH SELLER</Link>

        </>
    )

}

export default Home;