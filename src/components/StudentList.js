import React, { useContext } from 'react'
import StudentContext from '../context/studentContext';

const StudentList = (props) => {
  const studentCtx = useContext(StudentContext)

  return (
    <ul id="studentlistul">
      All Students
      {studentCtx.students.map((student) => (
        <li id={student.id} key={student.id}>
          {student.name} {student.mobile} {student.address}
          <button onClick={() => studentCtx.removeStudent(student.id)}>Delete</button>
          <button onClick={(e) => {
            localStorage.setItem('litoedit', JSON.stringify(student));
            props.onClick(e);
          }}>Edit</button>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(StudentList)