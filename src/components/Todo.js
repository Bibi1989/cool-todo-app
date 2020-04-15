import React from 'react'

const Todo = ({deleteItem, isChecked, populateInput, todos:{id, complete, text, date, timeCompleted}, color}) => (
    <li className={(complete) ? `li-style` : ""}>
        <div className="content" onClick={() => isChecked(id)}>
            <span title="Mark To Do" className="fa fa-edit ch" style={{color: complete ? "white" : ""}}></span>
            <div className="text">
                <span title="Text"className={color !== 'dark' ? '' : 'txt'} style={{textDecorationLine: complete ? "line-through" : ""}}> {text} </span>
                <span title="Date" className="date"><span className="created">created:</span> {date}</span>
            </div>
        </div>
        <div className="actions">
            <div className="shedule">
                <p>{(complete) ? `TODO COMPLETED` : "NOT COMPLETED"}</p>
                <p>{(complete) ? `Completed At: ${timeCompleted}` : ""}</p>
            </div>
            <span className="ed" title="Edit" onClick={() => populateInput(id)}><i className="fa fa-edit"></i></span>
            <span className="del" title="Delete" onClick={() => deleteItem(id)}><i className="fa fa-trash"></i></span>
        </div>
    </li>
)

export default Todo
