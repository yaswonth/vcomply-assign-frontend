import React, {useState,useEffect} from 'react'
import '../App.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import {Redirect} from 'react-router-dom';

export default function Login(){
    const [user,setuser]=useState(localStorage.getItem("user")||'');
    const [name,setname] = useState('');
    const opt = ["Elsa Ingram","Nick Holden","Paul Marsh","D Joshi","John"];
    function sub(){
        if(name==''){
            alert("please enter a name!!");
        }else{
            if(opt.indexOf(name)!=-1){
                localStorage.setItem('user',name);
                setuser(name);
            }else{
                alert("Invalid name.");
            }
        }
    }
    let style={
        display:'flex',
        flexDirection:'column',
        outline:'none',
        borderRadius:5,
        padding: 10,
        resize:'none',
        background: '#fff',
        fontSize:16,
        borderColour:'#000',
        borderWidth: 2,
    }
    if(user!=''){
        return(
            <Redirect push to="/user" />
        )
    }else{
        return(
            <div className='App' >
                <div className='cont'>
                    <div className='er-n'>
                    <p className='new-title'>Login</p>
                    <input style={style}  value={name} onChange={e=>setname(e.target.value)} placeholder='Username' />
                    <div className='new-p' onClick={()=>sub()}>Login</div>
                    </div>
                </div>
            </div>
        )
    }
}