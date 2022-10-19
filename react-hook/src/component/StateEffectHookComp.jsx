//함수형 컴포넌트
// sfc : 화살표함수 컴포넌트 자동완성
import { useEffect } from "react";
import { useState } from "react";

const StateEffectHookComp = () => {
    // 클래스형 컴포넌트의 state 처럼 사용할수 있다.
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    // 클래스 컴포넌트의 라이프사이클과 동일하게 사용할 수 있다
    // 이펙트훅 : componentWillMount() 와 componentWillUpdate() 내용을 같이 가지고있다
    // 마운트될때와 업데이트될때 실행이 된다.
    useEffect(() =>{
        console.log("이팩트훅이 실행되었습니다.")
    })// 두번째 인수값을 넣지 않을때, 모든 state와 props 값에 대해 실행
    
    // useEffect는 두번째 인수를 배열로 받아올수가 있다.
    // 두번째 인수의 배열요소 : 업데이트할때 참고할 state나 props
    // 두번째 인수 [] : 빈배열로 넣어주게되면 시작할때 한번만 실행
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        },1000)
    },[]);

    // 특정한 state의 값이 바뀔때 실행하고 싶을때 useEffect 사용
    useEffect(()=>{
        console.log("카운트가 증가하였습니다");
    },[count])

    return (  
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
        </div>
    );
}

export default StateEffectHookComp;
