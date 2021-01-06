import React, {useState,useEffect} from 'react'
import '../App.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import Homeitem from './Homeitem';


export default function Home(){
    const [posts,setposts] = useState([]);
    useEffect(()=>{
        fetch('https://vcompl.herokuapp.com/posts/')
        .then(response => response.json())
        .then(d => {
            console.log(d);
            setposts(d);
        });
    },[]);
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
            <div className='App' >
                <div className='cont'>
                {posts.length!=0 && <p className='user-t'>Applications</p>}
                    {
                        posts.length==0? (<p className='user-t'>No Applicatios</p>) : posts.map((item)=><Homeitem data = {item} key={item._id}/>)
                    }
                </div>
            </div>
        )
    }
    
}