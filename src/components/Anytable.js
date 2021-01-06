import React,{useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
export default function Anytable({data,status,ln}){
    return(
        <div className='tabl'>
            <p className='tabl-t'>{'Level -'+(ln+1).toString()+'('+data.approvaltype+')'}</p>
            <div className='tabl-row'>
                <div className='tabl-u' style={{flex:1}}><p className='tabl-tit'>Users</p></div>
                <div className='tabl-a' style={{flex:2}}><p className='tabl-tit'>Approval Action</p></div>
                <div className='tabl-w' style={{flex:2}}><p className='tabl-tit'>Workflow Status</p></div>
            </div>
            {
                data.users.map((d,ind)=>(
                    <div className='tabl-row'>
                        <div className='tabl-u' style={{flex:1}}><p className='tabl-cont'>{d.name}</p></div>
                        <div className='tabl-a' style={{flex:2}}><p className='tabl-cont'>{d.action || '--'}</p></div>
                        <div className='tabl-w' style={{flex:2}}><p className='tabl-cont'>{d.work || status}</p></div>
                    </div>
                ))
            }
        </div>
    )

}