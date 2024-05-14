import React, { useContext } from 'react'
import StudentContext from '../context/studentContext';
import classes from './StudentList.module.css'

const StudentList = (props) => {
  const studentCtx = useContext(StudentContext)

  return (
    <div className={classes.studentList}>
      <ul id="studentlistul">
        All Students
        {studentCtx.students.map((student) => (
          <li id={student.id} key={student.id}>
            <span>Name: {student.name}</span> 
            <span> Mobile :{student.mobile}</span> 
            <span>Address :{student.address}</span>
            <div className={classes.actions}>
              <button className={classes['button--add']} onClick={() => studentCtx.removeStudent(student.id)}>Delete</button>
              <button className={classes['button--remove']} onClick={(e) => {
                localStorage.setItem('litoedit', JSON.stringify(student));
                props.onClick(e);
              }}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(StudentList)