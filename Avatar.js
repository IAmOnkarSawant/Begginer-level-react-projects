import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Alist from './Alist';
import { computeHeadingLevel } from '@testing-library/react';
class Avatar extends Component{
    constructor()
    {
            super();
            this.state ={
                name : "WELCOME TO AVATAR WORLD"
            }
        }
        namechange(){
            this.setState(
                {
                    name :"AVATARIANS ARE HERE"
                }
            )
        }
    render()
    {
        const alist = [
            { 
                id:1,
               name:"hianta",
               work:"decoy"
            },
         
         
             {   id:2,
                 name:"kageyama",
                 work:"setter",
             },
         
             {   id:3,
                 name:"tsukisima",
                 work:"blocker",
             },
         
             {
                 id:4,
                 name:"nishinoya",
                 work:"libero"
            }
     ]
        return( 
            <div className ="mainpage">
              <h1>{this.state.name}</h1>
             <Alist id={alist[0].id} 
                    name={alist[0].name}
                    work ={alist[0].work}/>
             <Alist id={alist[1].id}
                    name={alist[1].name}
                    work ={alist[1].work}/>
             <Alist id={alist[2].id}
                    name={alist[2].name} 
                    work ={alist[2].work}/>
             <Alist id={alist[3].id}
                    name={alist[3].name} 
                    work ={alist[3].work}/>
             
               <div className="butt"><button onClick={ () => this.namechange()}>    Subscribe   </button></div>
              </div>
              )

    }
}
export default Avatar; 
