// 함수형 컴포넌트
import { useRef } from "react";

const RefComp = () => {
    // 사용하는 방식은 클래스 컴포넌트의 React.createRef와 동일
    // 요소를 DOM 객체로 가져와 사용
    const inputRef = useRef(null);
    return (  
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>{
                console.log(inputRef)
                inputRef.current.style.backgroundColor = "lightgreen";
            }}>Ref확인</button>
        </div>
    );
}
 
export default RefComp;