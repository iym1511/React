// 클래스형 컴포넌트
// 생활코딩 리액트 98p 내용 비교

import { Component } from "react";

class EventComp98p extends Component{
    constructor(props){
        super(props)
        this.state = {
            mode : "start",
            
        }
    }
    render(){
        return (
            <div>
                <h1>
                    <a href="/" onClick={function (e) {
                        e.preventDefault(); // 새로고침 막음
                        // state에 직접 접근해서 수정
                        // this.state.mode = "welcome"
                        // 리액트 내부에서 직접접근해서 수정하는것을 막고있음
                        // 리액트에서 값이 변경된것을 알게하기 위함

                        // 이때까지 setState로 접근 > 값 수정
                        this.setState({mode : "welcome"})
                    }.bind(this)
                    // StateComp.jsx 비교를하면 
                    // 화살표함수와 익명함수로 인한
                    //  this값이 달라짐 : ctrl 키로 확인
                    }>
                        {this.state.mode}
                    </a>
                </h1>
            </div>
        );
    }
}
export default EventComp98p;