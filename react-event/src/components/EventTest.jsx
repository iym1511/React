// 클래스 컴포넌트
import EventTestLoginForm from "./EventTestLoginForm";
import React,{ Component } from "react";

class EventTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "aa",
            login : true,
        }
        // input에 값을 넣은 후  > name 의 값이 input의 value값으로 
        //button을 클릭하면 login을 true로 만들고
        // name이 출력되는 h1태그를 작성하세요
        // false 일때는 h1태그가 출력되지않음 (삼항연산자 또는 && 연산자 참고)
    

    }


    render(){
        return(
            <div> {/* input에 적은값을 입력받음 과동시에 출력*/}
                {this.state.login ? (
                    <h1>{this.state.name}</h1>
                ): (<EventTestLoginForm />)}   
            </div>
        );
    }
}
export default EventTest;