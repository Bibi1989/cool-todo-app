import React from 'react'

const NavBar = ({handleClear, count, handleUndo, handleDo, todo}) => {
    return (
        <nav>
            <h1 className="h1-style"><span className="sub-h1">Your</span> Todo <span className="sub-h1">App</span></h1>
            <div className="clear-badge">
                <div className="complete-actions">
                    <button className="undo" onClick={handleUndo}>Undo Complete</button>
                    <button className="do" onClick={handleDo}>Mark All Complete</button>
                </div>
                <button className="clear" onClick={handleClear}>Clear All Todos</button>
                <div className="badges">
                    <span className="badge-count">{count}</span>
                    <i className="i">{count === 0 ? `No Todos` : `   ${todo.length - count} Todos completed`}</i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
