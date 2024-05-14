import React, { useState, useContext } from 'react';
import Modal from './Modal';
import StudentContext from '../context/studentContext';
import classes from './StudentForm.module.css'

const StudentForm = (props) => {
    const studentCtx = useContext(StudentContext);
    const [formData, setFormData] = useState({
        id: localStorage.getItem('litoedit') ? JSON.parse(localStorage.getItem('litoedit')).id : '',
        name: localStorage.getItem('litoedit') ? JSON.parse(localStorage.getItem('litoedit')).name : '',
        mobile: localStorage.getItem('litoedit') ? JSON.parse(localStorage.getItem('litoedit')).mobile : '',
        address: localStorage.getItem('litoedit') ? JSON.parse(localStorage.getItem('litoedit')).address : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addStudentHandler = (e) => {
        e.preventDefault();
        const newStudent = { ...formData };
        studentCtx.addStudent(newStudent);
        setFormData({
            id: '',
            name: '',
            mobile: '',
            address: '',
        });
        props.onClose();
    };

    return (
        <Modal onClick={props.onClose}>
            <div className={classes.input}> 
                <form>
                    <label htmlFor="id">Id</label>
                    <input id="id" type="number" name="id" value={formData.id} onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="mobile">Mobile</label>
                    <input id="mobile" type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
                    <div>
                        <button className={classes['button--add']} onClick={addStudentHandler}> Add </button>
                        <button className={classes['button--close']} onClick={props.onClose}> Close </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default StudentForm;
