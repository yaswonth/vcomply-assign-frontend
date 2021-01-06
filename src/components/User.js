import React, {useState,useEffect} from 'react'
import '../App.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import Useritem from './Useritem';
import { Redirect } from 'react-router-dom';


export default function User(){
    const [posts,setposts] = useState(null);
    const [user,setuser]=useState(localStorage.getItem("user")||'');
    function logout(){
        localStorage.setItem('user','');
        setuser('');
    }
    useEffect(()=>{
        if(user!=''){
            fetch('https://vcompl.herokuapp.com/users/'+user)
        .then(response => response.json())
        .then(d => {
            console.log(d);
            setposts(d);
        });
        }
    },[]);
    if(user==""){
        console.log('ddede'+user+'ddede');
        return(
            <Redirect push to="/login" />
        )
    }
    
    if(posts==null){
        return(
            <div className='App' >
                <div style={{alignSelf:'center'}}>
                <ScaleLoader
          height={35}
          width={4}
          radius={2}
          margin={2}
          color={"#fff"}
        />
                </div>
            </div>
        )
    }else{
        return(
            <div className='c' >
                <div className='he'>
                <p className='he-ti'>{user}</p>
                <p className='del-log' onClick={()=>logout()}>Logout</p>
                </div>
                <div className='ap'>
                <div className='cont'>
                    {
                        posts.length==0? (<p className='user-t'>No Requests</p>) : posts.map((item)=><Useritem data = {item} user={user} key={item._id}/>)
                    }
                </div>
                </div>
            </div>
        )
    }
    
}