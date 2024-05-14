import React, { useState, useContext } from 'react';
import Modal from './Modal';
import StudentContext from '../context/studentContext';

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
            <div>
                <form>
                    <label htmlFor="id">Id</label>
                    <input id="id" type="number" name="id" value={formData.id} onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="mobile">Mobile</label>
                    <input id="mobile" type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} />
                    <button onClick={addStudentHandler}> Add </button>
                    <button onClick={props.onClose}> Close </button>
                </form>
            </div>
        </Modal>
    );
};

export default StudentForm;
