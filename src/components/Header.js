import React, { useContext } from 'react'
import StudentContext from '../context/studentContext'
import classes from './Header.module.css'

const Header = (props) => {
  const studentCtx = useContext(StudentContext)
  const noOfStudent = studentCtx.students.length
  return (
    <>
      <h1 className={classes.h1}>Student Manager</h1>
      <div className={classes.total}>
        <span>Total Amount : </span>
        <span>{noOfStudent}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick}>Add New Student</button>
      </div>
    </>
  )
}

export default Header