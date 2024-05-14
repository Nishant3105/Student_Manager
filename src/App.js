import React, { useState, useCallback } from 'react'
import StudentContextProvider from './context/studentContextProvider';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Header from './components/Header';
import './App.css';


function App() {
  const [showStudentForm, setShowStudentForm] = useState(false)

  console.log('app.js is reevaluated')

  const showFormHandler = useCallback((e) => {
    e.preventDefault()
    console.log("reahed on show handler in app.js")
    setShowStudentForm((prevState) => !prevState)
  }, [])

  const onClose = useCallback(() => {
    setShowStudentForm((prevState) => !prevState)
    console.log("reahed on close handler in app.js")
  }, [])

  return (
    <StudentContextProvider>
      {showStudentForm && <StudentForm onClose={onClose} />}
      <Header onClick={showFormHandler}/>
      <StudentList onClick={showFormHandler} />
    </StudentContextProvider>
  );
}

export default App;
