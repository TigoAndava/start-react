import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
               <DialogsItem name='karen' id='1'/>
               <DialogsItem name='Vasp' id='2'/>
               <DialogsItem name='Tyom' id='3'/>
               <DialogsItem name='Karen' id='4'/>
               <DialogsItem name='Musho' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='barev aper'/>
                <Message message='Vonc es aper'/>
                <Message message='Hajox'/>
                <Message message='Lorem ipsum dolor.'/>
                <Message message='Lorem ipsum dolor sit amet.'/>
            </div>
        </div>
    )
}

export default Dialogs;