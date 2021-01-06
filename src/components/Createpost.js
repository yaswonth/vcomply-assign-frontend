import React, {useState,useEffect} from 'react'
import '../App.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import Level from './Level';


export default function Createpost(){
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
    const bu=(<ScaleLoader
        height={35}
        width={4}
        radius={2}
        margin={2}
        color={"#000"}
      />);
    function addlevel(){
        console.log('clicked');
        const ne = {
            users:[],
            approvaltype:"Sequential"
        }
        setapproval([...approval,ne]);
        console.log(approval);
        
    }
    function changetype(i,v){
        var ar = [...approval];
        if(ar[i].approvaltype!=v){
            ar[i].approvaltype=v;
            ar[i].users=[];
        }    
        setapproval(ar);
    }
    function che(){
        var ar = [...approval]
        console.log(ar);
        if(ar==null){
            return false;
        }
        if(ar.length==0){
            return false;
        }
        var l = ar.length;
        for(var i=0;i<l;i++){
            if(ar[i]['users']){
                if(ar[i]['users'].length==0){
                    return false;
                }
            }else{
                return false;
            }
        }
        ar.map((e)=>{
            if(e.users.length==0){
                return false;
            }
        })
        return true;
    }
    function arr(data){
        if(data.approvaltype=="Sequential"){
            return [data.users[0].name];
        }else{
            var a = []
            for(var i=0;i<data.users.length;i++){
                a.push(data.users[i].name)
            }
            return a;
        }
    }
    function del(i){
        var ar = [...approval];
        var arb = ar.filter((_,ind) => ind!=i);
        console.log(i);
        console.log(arb);
        setapproval(arb)
    }
    function ls(e,i){
        var ar = [...approval];
        ar[i].users=e;
        setapproval(ar);
    }
    function sub(){
        if(name=='' || desc=='' || che()==false){
            alert("Please fill all the fields!!");
        }else{
            setload(true);
            var su={}
            su['name']=name;
            su['description']=desc;
            su['totalLevels']=approval.length;
            su['approvals']=[]
            approval.map((item)=>{
                var ne={}
                ne['currentuser']=1;
                ne['approvaltype']=item.approvaltype;
                ne['totalusers']=item.users.length;
                ne['users']=[]
                item.users.map((nt)=>{
                    ne['users'].push({name:nt.value});
                });
                su['approvals'].push(ne);

            })
            su['approvers']=arr(su['approvals'][0])
            console.log(su);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(su)
            };
            fetch('https://vcompl.herokuapp.com/posts/', requestOptions)
                .then(response => response.json())
                .then(data => {
                    alert(JSON.stringify(data));
                    window.location.reload(false);
                }).catch(err=>alert(err));
            setload(false);
        }
    }
    const [name,setname] = useState('');
    const [desc,setdesc] = useState('');
    const [load,setload] = useState(false);
    const [approval,setapproval] = useState([
        {
            users:[],
            approvaltype:"Sequential"
        }
    ])
    
    return(
            <div className='App' >
                <div className='cont'>
                    <div className='post-main'>
                    <p className='new-title'>New Approval</p>
                    <p className='dash-about-t'>Name:</p>
                    <input style={style}  value={name} onChange={e=>setname(e.target.value)} placeholder='Approval name' />
                    <p className='dash-about-t'>Description:</p>
                    <input style={style} value={desc} onChange={e=>setdesc(e.target.value)} placeholder='Approval description' />
                    {
                        approval.map((item,index)=> (<Level cmp={approval} data={item} listsel={ls} ss={setapproval} del={del} tyc={changetype} ln={index} key={index.toString()+item.approvaltype} />))
                    }
                    
                    
                    <div className='butstat'>
                        <p className='view-post' style={{marginTop:10}} onClick={()=>addlevel()} >Add Level</p>
                    </div>
                    {load==true ? (<div style={{alignSelf:'center'}} ><ScaleLoader
        height={35}
        width={4}
        radius={2}
        margin={2}
        color={"teal"}
      /></div>) : <div className='new-p' onClick={()=>{setload(true);sub();}}>Submit</div>}
                    </div>
                </div>
                
            </div>
    )
}