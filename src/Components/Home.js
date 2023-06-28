import React from 'react'
import db from "./FbConfig";
import {ref,get,child,remove} from "firebase/database";
import { useState,useEffect } from 'react';

export default function Home() {

    const[info,setInfo]=useState([]);
    useEffect(()=>{
        const dbref=ref(db);

        get(child(dbref,"student/"))
        .then((snapshot)=>{
            if(snapshot.exists()){
                setInfo([]);
                console.log(snapshot.val());
                const data=snapshot.val()
                if(data!==null){
                    Object.values(data).map((da)=>{
                        setInfo((oldArray)=>[...oldArray,da]);
                    });
                }
            }
            else{
                console.log("no data");
            }
        })
    },[])

    const delStu =(rno)=>{
        const r3 = ref(db,"student/"+rno)
        remove(r3)
        .then(()=>{
            alert("record deleted");
            window.location.reload();
        })
        .catch(err=>console.log(err));
    }
  return (
    <div>
      <center>
        <h1> Home</h1>
        <table border="5" style={{width:"50%"}}>
         <tr>
            <th>Rno</th>
            <th>name</th>
            <th>marks</th>
            <th>delete</th>
         </tr>
         {
            info.map((e=>
                <tr style={{"text-align":"center"}}>
                    <td>{e.rno}</td>
                    <td>{e.name}</td>
                    <td>{e.marks}</td>
                    <td><button onClick={()=>{
                        if(window.confirm("r u sure ?? ")) delStu(e.rno)
                    }}>delete</button></td>

                </tr>
                ))
         }
        </table>
      </center>
    </div>
  );
}
