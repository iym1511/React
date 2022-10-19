// 함수형 컴포넌트
import { useReducer } from "react";
import MemoComp from "./MemoComp";
import ReducerCountComp from "./ReducerCountComp";


function reducer(state, action){
    switch(action.type) {
        case 'increment' :
            return {count : state.count+1};
        case 'decrement' :
            return {count : state.count-1};
        case 'zero' :
            return {count : 0};
        case 'changeInput' :
            return {input : action.payload}; // payload에 value가 들어가있어 action으로실행
    }   
}


const ReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0, input : ""})
    return (  
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{dispatch({type:'increment'})}}>+1</button>
            <button onClick={()=>{dispatch({type:'decrement'})}}>-1</button>
            {/* 아래 버튼에 들어갈 action.type에 관한 내용을 reducer에 추가 */}
            <button onClick={()=>{dispatch({type:'zero'})}}>0</button>

            {/** 컴포넌트에 props 값으로 state와 dispatch를 전달할 수 있다. */}
            <ReducerCountComp state={state} dispatch={dispatch}/>

            {/** 자식 컴포넌트 MemoComp를 하나만들고,  
             * state에 input="" 추가하고, reducer를 작성하여
             * MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나올수 있게 하세요
            */}
            
            <h1>{state.input}</h1>
            <input type="text" onChange={
                // setState(e.target.value) >> dispatch 에서 쓸수있도록
                (e)=>{dispatch({type:'changeInput', payload : e.target.value})
                }}/>
            <MemoComp state={state} dispatch={dispatch}/>
        </div>
    );
}

export default ReducerComp