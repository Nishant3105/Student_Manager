import React from 'react'

const StudentContext = React.createContext({
    students:[],
    addStudent:(student)=>{},
    removeStudent:(id)=>{},
    updateStudent:(id)=>{}
})

export default StudentContext