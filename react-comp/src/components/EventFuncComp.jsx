// 함수형 컴포넌트
import { useState } from "react"

const EventFuncComp = () =>{
    const [num, setNum] = useState(0);
    const [name, setName] = useState("이재용");
    
    // 익명함수 또는 화살표 함수로 작성해서 사용 
    const numPlus = () => {
        setNum(num+1);
    }
    // 실습 - 이름바뀌게
    const nameChange = () => {
        // 여러번 바뀌게 
        if(name == "이재용"){
            setName("팀쿡");
        }else{
            setName("이재용");
        }
    }

    return(
        <div>
            {/* 같은 함수안에 있는 내용이므로 이름만 작성 */}
            <button onClick={numPlus}>{num}</button>
            {/* name = "홍길동"을 작성한 후 버튼을 클릭하면 다른이름으로  바뀌는 함수 작성*/}
            <button onClick={nameChange}>{name}</button>
        </div>
    );
}
export default EventFuncComp;