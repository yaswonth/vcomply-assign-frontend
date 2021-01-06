import React,{useState,useEffect} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import Anytable from './Anytable';
export default function Viewitem(){
    const { id }= useParams();
    const [data,setdata] = useState(null);
    useEffect(()=>{
        fetch('https://vcompl.herokuapp.com/posts/'+id)
        .then(response => response.json())
        .then(d => {
            console.log(d);
            setdata(d[0]);
        });
    },[])
    if(data){
        return(
            <div className='App' >
                <div className='cont'>
                    <div className='post-main'>
                        <div className='butstat'>
                        <p className={(data.status=="Active" ? 'statbut-g' : data.status=="Terminated"? 'statbut-r':'statbut-m')}>{data.status}</p>
                        </div>
                        <p className='titl'>{data.name}</p>
                        <p className='desc'>{data.description}</p>
                        {
                data.approvals.map((item,index)=> <Anytable data={item} ln={index} key={index.toString()} status={data.status} />)
            }
            <p className='titl'>{data.status=="Active" ? "Final Result: This workflow is Active" : "Final Result: This workflow was "+data.status }</p>
                    </div>
                </div>
            </div>
        )
    }else{
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
    }
    

}