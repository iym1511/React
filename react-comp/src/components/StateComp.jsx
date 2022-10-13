// 클래스형 컴포넌트에서 state

import { Component } from "react";

class StateComp extends Component{
    // props값을 this를 통해서 사용(state를 사용 하지 않을때)
    // state 컴포넌트에서 사용하는 값을 작성
    // >> props값은 Compenent에서 상속받아온 값 
    // >> 명시적으로 값을가져올 필요있다

    // 자바스크립트 클래스의 constructor() {}
    constructor(props){
        // constructor 를 통해서 클래스의 속성관리
        super(props); // 컴포넌트에서 상속받은 props를 슈퍼로
        // state는 객체형식으로 작성
        this.state = {      // 컴포넌트안에서 사용가능
            number : 4,
            count : 0,
        }
    }
    render(){
        const {name} = this.props;
        const {number, count} = this.state;
        return(
            <div>
                <h1>{number}</h1> 
                <button onClick={() => { // state값에 통채로 넣어줌
                        this.setState({number : number+1}) // number +1
                    }}>+1</button> 
                <button onClick={() => {  // number 0리셋
                        this.setState({number : 0})
                    }}>0</button> 

                <button onClick={() => { // number -1
                        this.setState({number : number-1})
                    }}>-1</button> 

                <h1>{count}</h1>
                <button onClick={() => { 
                        this.setState({count : count+1})
                    }}>count +1</button>

            </div>
        )
    }
}
export default StateComp;