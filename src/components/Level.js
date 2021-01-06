import React,{useState} from 'react';
import '../App.css';
import Select from 'react-select';
export default function Level({data,ln,tyc,ss,del,listsel,cmp}){
    const [d,setd] = useState(cmp[ln].approvaltype);
    const opt = [
        { value: "Elsa Ingram", label: "Elsa Ingram" },
        { value: "Nick Holden", label: "Nick Holden" },
        { value: "Paul Marsh", label: "Paul Marsh" },
        { value: "D Joshi", label: "D Joshi" },
        { value: "John", label: "John" }
      ];
      const [da,setda] = useState(data.users);
      var re = React.createRef();
    return(
        <div className='level'>
        <div className='leveltop'>
            <p className='dash-about-t'>{'Level '+(ln+1).toString()+':'}</p>
            <select
                value={d}
                onChange={(e)=>{setd(e.target.value); tyc(ln,e.target.value);setda([]);}}
                style={{height:26,outline:'none',display:'flex',resize:'none',padding:3}}
                 >
                     <option value="Sequential">Sequential</option>
                     <option value="Round-robin">Round-robin</option>
                     <option value="Any-one">Any-one</option>
                 </select>
                 <p className='del-post' style={{marginRight:5,fontSize:16}} onClick={()=>del(ln)} >Delete</p>
        </div>
        {d=="Sequential" && <p className='desc'>Please select in the preference order from left to right!!</p>}
        <div className='sel'>
        <Select
        isMulti
        options={opt}
        className='sel'
        value={da}
        ref={re}
        onChange={(e)=>{listsel(e,ln);setda(e)}}
        />
        </div>
            
        </div>
    )

}