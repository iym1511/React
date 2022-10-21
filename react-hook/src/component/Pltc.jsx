import { useState } from "react";

const havyWork = () =>{
    // 데이터가 많으면 함수를 써서 useState에 값을 넣어주는게
    // 최적화 Good
    return ["홍길동","김민수"];
}

function Pltc()  {
    const [names, setNames] = useState(havyWork());
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        // prevState : 이전 state ["홍길동", "김민수"]
        setNames((prevState)=>{
            return ([input, ...prevState]) // 이전 state값 고정
        })
    }

    return (    
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>upload</button>
            {names.map((name, index)=>{
                return <p key={index}>{name}</p>
            })}
        </div>
    );
}
 
export default Pltc;