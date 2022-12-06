import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const HomeBanner = (props) => {
    const [color,setColor]=useState('red')

    const NewColor=()=>{
        setColor('Blue')
    }
    const NewGreen=()=>{
        setColor('Green')
    }

    let UserName=useRef();
    let Password=useRef();

    const SubmitForm=()=>{
        let a=UserName.current.value;
        let b=Password.current.value;
        alert(a)
        alert(b)
    }

    let [todo,SetTodo]=useState("")

    //use effect

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            setTimeout(()=>{
                SetTodo(res.data)
            },3000)

        }).catch((error)=>{

        })
        }

    )

    return (
        <div>
            <h1>Sumit Barua</h1>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
            <h2>{props.subject.name}</h2>
            <h2>{props.subject.age}</h2>

            <h1>{color}</h1>
            <button onClick={NewColor}>Change</button>
            <button onClick={NewGreen}>Change Green</button>
            <br/>
            <input ref={UserName} placeholder="UserName" type="text" />
            <input ref={Password} placeholder="UserPassword" type="text" />
            <button onClick={SubmitForm}>Submit</button>
            <p>{JSON.stringify(todo)}</p>
        </div>
    );
};

export default HomeBanner;