import { useState } from "react";
import { useMemo } from "react";

const USeMemoComp = (e) => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);
    // useMemo : 함수의return된 값을 계속 사용한다
    // [] 두번째 인자 : 두번째 들어온 인자값이 바뀌었을때, 함수를 실행한다
    // state, props 값

    // return 값이 있는 함수 : return의 {}에서 내용을 출력할 수 있다.
    // 함수는 update할때마다 랜더하여 사용한다
    const doubleCount = () => {
        return count*2;
    };
    const tripleCount = () => {
        console.log("memoNum");
        return num*3;
    }

    // useMemo를 통해서, 작성한 함수가 특정 값에만 실행되어 return된다
    // 그 값이 아닐 경우 함수는 실행되지 않는다.(이미 있는 return 값을 그대로 사용)
    const memoCount = useMemo(()=>doubleCount(), [count])
    const memoNum = useMemo(()=>tripleCount(), [num])

    return (  
        <div>
            {/** {} 를 통해서 함수의 결과값을 출력할수 있다 */}
            {/** useMemo를 통해서 사용해줄때, () 없이 적어준다. */}
            <h1>2배:{memoCount} / 3배:{memoNum}</h1> 
            {/** useMemo를 통해서 memoNum을 만드세요 :  3배로 출력*/}
            <h2>1증가: {count} / {num}</h2>
            <button onClick={()=>{setCount(count+1)}}>count +1</button>
            <button onClick={()=>{setNum(num+1)}}>num +1</button>
            
        </div>
    );
}

export default USeMemoComp;