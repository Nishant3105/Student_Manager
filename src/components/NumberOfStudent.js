import React, {useContext} from 'react'
import StudentContext from '../context/studentContext'

const NumberOfStudent = () => {
    const studentCtx=useContext(StudentContext)
    const noOfStudent=studentCtx.students.length
  return (
    <div>{noOfStudent}</div>
  )
}

export default NumberOfStudent