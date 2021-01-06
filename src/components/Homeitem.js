import React,{useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Anytable from './Anytable';
export default function Homeitem({data}){
    return(
        <div className='post-main'>
            <div className='butstat'>
                <Link to={'/posts/'+data._id} style={{textDecoration:'none' }}><p className='view-post'>view post</p></Link>
                <p className={(data.status=="Active" ? 'statbut-g' : data.status=="Terminated"? 'statbut-r':'statbut-m')}>{data.status}</p>
            </div>
            <p className='titl'>{data.name}</p>
            <p className='desc'>{data.description}</p>
            
        </div>
    )

}