import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList'
import Form from './components/Form'
import ShowAlert from './components/ShowAlert'
import NavBar from './components/NavBar'
import date from './components/date'
// import FindList from './components/SearchInput'
import flashMessage from './components/flashMessage'

import uuid from 'uuid'
import './App.css'


const App = () => {
  let count = 0
  
  let [todos, setTodo] = useState(JSON.parse(localStorage.getItem("func")) || [])
  const [check, setCheck] = useState({editable: false})
  const [color, setColor] = useState(JSON.parse(localStorage.getItem('color')))
  const handleInput = useRef()
  const showMessage = useRef()

  useEffect(() => {
    localStorage.setItem('color', JSON.stringify(color))
  })
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const text = handleInput.current.value
    if(text.trim()) {
      if(check.editable) {
        editItem(text)
      } else {
        addItem(text)
      }
    }
    else{
      flashMessage(showMessage)
    }
    handleInput.current.value = ''
  } 

  const addItem = text => {
    let item = {id: uuid(), text, date: date()[0], complete: false, editable: false, timeCompleted: "", checkColor: color}
    let newItem = [item, ...todos]
    localStorage.setItem("func", JSON.stringify(newItem))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const editItem = text => {
    const editArray = [...todos].map((item) => {
      if(check.editable && check.id === item.id) {
        item.text = text
        setCheck({id: '', text: '', date: date(), complete: false, editable: false})
      }
      return item
    })
    localStorage.setItem("func", JSON.stringify(editArray))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const deleteItem = id => {
    const itemsArr = [...todos].filter(item => item.id !== id)
    localStorage.setItem("func", JSON.stringify(itemsArr))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const isChecked = id => {
    const checkIds = [...todos].map(todo => {
      if(todo.id === id) {
        todo.complete = !todo.complete
        todo.timeCompleted = date()[0]
      }
      return todo 
    })
    setTodo(localStorage.setItem("func", JSON.stringify(checkIds)))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const showUnCompleted = () => {
    let findCount = [...todos].map(item => {
      if(!item.complete) {
        count += 1
      }
      return item
    })
    return findCount
  }
  showUnCompleted()
  

  const populateInput = id => {
    const findItem = [...todos].find(item => id === item.id)
    findItem.editable = true
    findItem.id = id
    handleInput.current.value = findItem.text
    handleInput.current.focus()
    setCheck(findItem)
  }

  const handleClear = () => {
    localStorage.setItem("func", JSON.stringify([]))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const handleUndo = () => {
    const undo = [...todos].map(item => {
      if(item.complete) {
        item.complete = false
      }
      return item
    })
    localStorage.setItem("func", JSON.stringify(undo))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const handleDo = () => {
    const undo = [...todos].map(item => {
      if(!item.complete) {
        item.complete = true
      }
      return item
    })
    localStorage.setItem("func", JSON.stringify(undo))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const removeComplete = () => {
    const delComplete = [...todos].filter(item => !item.complete)
    localStorage.setItem("func", JSON.stringify(delComplete))
    setTodo(JSON.parse(localStorage.getItem("func")))
  }

  const handleLight = side => {
    localStorage.setItem('color', JSON.stringify(side))
    setColor(JSON.parse(localStorage.getItem('color')))
  }

  const handleDark = side => {
    localStorage.setItem('color', JSON.stringify(side))
    setColor(JSON.parse(localStorage.getItem('color')))
  }

  // const items = JSON.parse(localStorage.getItem("func"))
  // const searhInput = useRef()
  // let v = [...todos]
  // console.log(v)

  // function searchItem() {
  //   const search = searhInput.current.value
  //   // console.log(items)
  //   const ma = [v].map(item => {
  //     if(item.text.index(search) > - 1) {

  //     }
  //   })
  // }

  return (
    <div className={color !== 'dark' ? 'light' : 'dark'}>
      <NavBar handleClear={handleClear} count={count} handleUndo={handleUndo} handleDo={handleDo} todo={todos} />  
      <h1 className="h1-style">Todo <span className="sub-h1">App</span></h1>
      <ShowAlert show={showMessage} />
      {/* <FindList searchInput={searhInput} searchItem={searchItem} /> */}
      <Form check={check} handleSubmit={handleSubmit} handleInput={handleInput} color={color} />
      <div className="today">
        <h2>Today</h2>
        <h3>{date()[1]}</h3>
      </div>
      <TodoList items={todos} deleteItem={deleteItem} populateInput={populateInput} isChecked={isChecked} color={color} />
      <button className="remove-complete" onClick={removeComplete}>Remove Completed Todo</button>
      <footer className={color !== 'dark' ? 'foot-light' : 'foot-dark'}>
        <h3>Change Background</h3>
        <div className="change-btn">
          <button onClick={() => handleLight('light')} className="light-btn">Light</button>
          <button onClick={() => handleDark('dark')} className="dark-btn">Dark</button>
        </div>

        <div className="copy">
          <p>Copywrite &copy; bibi.inc 2020</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
