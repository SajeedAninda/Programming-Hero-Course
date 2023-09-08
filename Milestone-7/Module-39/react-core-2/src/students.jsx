import { useState } from "react"

export default function Students(){
    let [students,setStudent]=useState(30);

    let addStudent=()=>{
        let newStudent=students+1;
        setStudent(newStudent);
    }
    let minusStudent=()=>{
        let newSubStudent=students-1;
        setStudent(newSubStudent);
    }
    let studentsSttyle={
        border: "2px solid yellow",
        padding:"10px",
        borderRadius:"20px",
        marginTop:"20px"
    }
    return(
        <div style={studentsSttyle}>
            <h2>Students Count: {students}</h2>
            <button onClick={addStudent}>Add Students</button>
            <button onClick={minusStudent}>Minus Students</button>
        </div>
    )
}