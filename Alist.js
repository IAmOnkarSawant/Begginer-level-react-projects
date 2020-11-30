import React from 'react';
import ReactDOM from 'react-dom';
const Alist = (props) => {
    return(
        <div className="avatarstyle ma4 bg-light-purple dib pa2 grow tc shadow-4">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
        <h1 className=""> {props.name}</h1>
          <p> {props.work} </p>
          </div>
    )
} 
export default Alist;
