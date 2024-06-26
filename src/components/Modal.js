import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css"


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}/>
    )
} 
const ModalOverlay = (props) => {

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}
const Modal = (props) => {
    const portalElement=document.getElementById('newstudent-modal-root')
    console.log('in modal')
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal