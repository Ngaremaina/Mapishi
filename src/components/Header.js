import React, { useState } from "react";

const Header = ({ getSearch }) => {
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        getSearch(search)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

    )

    
}

export default Header