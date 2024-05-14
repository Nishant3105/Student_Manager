import React, {useState} from 'react'
import StudentContext from './studentContext'

const StudentContextProvider = (props) => {
    const [students,setStudents] = useState([])

    const addStudentHandler = (student) => {
      const existingStudent = students.find((stud) => stud.id === student.id);
        if (existingStudent) {
          const updatedStudent = students.map((stud) =>
            stud.id === student.id ? { ...stud, name:student.name, mobile:student.mobile, address:student.address } : stud
          );
          setStudents(updatedStudent)
        }
      else{
        setStudents([...students,student])
      } 
    }

    const removeStudentHandler = (id) => {
       const updatedStudents=students.filter((student) => student.id!==id )
       setStudents([...updatedStudents])
    }

    const studentContextData={
        students:students,
        addStudent:addStudentHandler,
        removeStudent:removeStudentHandler
    }
  return (
    <StudentContext.Provider value={studentContextData}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider