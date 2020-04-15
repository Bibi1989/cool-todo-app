import React from 'react'

const Form = ({handleSubmit, handleInput, check: {editable}, color}) => (
    <div>
        <form onSubmit={handleSubmit} className="form">
            <input 
            type="text" 
            ref={handleInput} 
            placeholder="Add To Do..." 
            className={color !== 'dark' ? 'input' : 'input-dark'} 
            />
            <input 
            type="submit" 
            className={editable ? "edit-btn" : "add"}
            title="Add Item" 
            value={editable ? "Edit Item" : "Add Item"} 
            />
        </form>
    </div>
)

export default Form
