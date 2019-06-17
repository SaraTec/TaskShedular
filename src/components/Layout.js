import React from 'react'

function Layout() {
    return (
        <header style={headerStyle}>
            <h1>
                ToDoList
            </h1>
        </header>
    )
}

const headerStyle ={
    backgroundColor: "#333",
    color:"#fff",
    padding: '10px',
    textAlign: 'center'
}
export default Layout;
