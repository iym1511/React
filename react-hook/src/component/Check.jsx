import { useReducer } from "react";
import { useState } from "react";
import Student from "./Student";

const reducer = (state, action)=>{
    switch(action.type){
        case "add-student":
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name, // 변수이름과 키 이름이 같아서 생략
                isHere: false,
            }
            return{
                count: state.count+1,
                students: [...state.students, newStudent],
            }
            case "delete-student" :
                return{
                    count: state.count-1,
                    students: state.students.filter(
                        (student) => student.id !== action.payload.id
                    ),
                }
            case "mark-student" :
                return{
                    count : state.count,
                    students: state.students.map(student =>{
                        if(student.id === action.payload.id){
                            return {...student, isHere: !student.isHere}
                        }
                        return student
                    })
                }
            default : 
            return state;
    }
}

const initialState = {
    count : 0,
    students: [ ]
}

function Check()  {
    const [name, setName] = useState("")                // initialState초기 state값
    const [studentInfo, dispatch] = useReducer(reducer, initialState) 
    return (  
        <div>
            <h1>출석부</h1>
            <p>총 학생수:{studentInfo.count}</p>
            <input type="text" placeholder="이름을 입력하세요" value={name} 
            onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={()=>{
                dispatch({type: "add-student", payload: {name}})
            }}>추가</button>
            {studentInfo.students.map((student)=>{
                return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere}/>
            })}
        </div>
    );
}
 
export default Check