import React from 'react'
import Todo from './Todo'

const TodoList = ({items, deleteItem, isChecked, populateInput, date, color}) => (
    <div className="ul">
        <ul>
            {items.length !== 0 ? items.map(item => {
                return <Todo key={item.id} todos={item} deleteItem={deleteItem} isChecked={isChecked} populateInput={populateInput} today={date} color={color} />
            }) : "Add Todo..."}
            
        </ul>
    </div>
)

export default TodoList
