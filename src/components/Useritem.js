import React,{useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
export default function Useritem({data,user}){
    const opt={
        "Sequential":"sequential",
        "Round-robin":"round",
        "Any-one":"any"
    }
    const [load1,setload1] = useState(false);
    const [load2,setload2] = useState(false);
    const [load3,setload3] = useState(false);
    function remove(){
        
        var su={
                "id":data._id,
                "name":user
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(su)
        };
        fetch('https://vcompl.herokuapp.com/approval/remove', requestOptions)
            .then(response => response.json())
            .then(data => {
                setload1(false);
                window.location.reload(false);
            }).catch(err=>{setload1(false);alert(err);});
            
    }
    function reject(){
        var su={
            "id":data._id,
            "name":user
    }
    var la = opt[data.approvals[data.currentlevel-1].approvaltype];
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(su)
    };
    fetch('https://vcompl.herokuapp.com/approval/reject/'+la, requestOptions)
        .then(response => response.json())
        .then(data => {
            setload2(false);
            window.location.reload(false);
        }).catch(err=>{setload2(false);alert(err);});
    }
    function approve(){
        var su={
            "id":data._id,
            "name":user
    }
    var la = opt[data.approvals[data.currentlevel-1].approvaltype];
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(su)
    };
    fetch('https://vcompl.herokuapp.com/approval/approve/'+la, requestOptions)
        .then(response => response.json())
        .then(data => {
            setload3(false);
            window.location.reload(false);
        }).catch(err=>{setload3(false);alert(err);});
        
    }
    return(
        <div className='post-main'>
            <div className='butstat'>
                <Link to={'/posts/'+data._id} style={{textDecoration:'none' }}><p className='view-post'>view post</p></Link>
                {load1==true ? (<div style={{alignSelf:'center'}} ><ScaleLoader
        height={25}
        width={4}
        radius={2}
        margin={2}
        color={"rgb(180, 64, 18)"}
      /></div>) : <p className='del-log' onClick={()=>{setload1(true);remove();}}>Remove</p>}
      {load2==true ? (<div style={{alignSelf:'center'}} ><ScaleLoader
        height={25}
        width={4}
        radius={2}
        margin={2}
        color={"rgb(180, 64, 18)"}
      /></div>) : <p className='del-log' onClick={()=>{setload2(true);reject();}}>Reject</p>}
      {load3==true ? (<ScaleLoader
        height={25}
        width={4}
        radius={2}
        margin={2}
        color={"rgb(43, 190, 117)"}
      />) : <p className='app-post' onClick={()=>{setload3(true);approve();}}>Approve</p>}
            </div>
            <p className='titl'>{data.name}</p>
            <p className='desc'>{data.description}</p>
        </div>
    )

}