// 클래스형 컴포넌트

import React, { Component } from "react";

class EventRefComp extends Component{
    constructor(props){
        super(props)
        // DOM을 저장할 변수 만들기
        this.textInput = null;
        // ref 속성을 통해서 DOM 가져오기
        this.setTextInputRef = (element) => {
            this.textInput = element;
            console.log(this.textInput);
            // 값 변경
            this.textInput.value = "안녕"
        }
        this.changeData = this.changeData.bind(this); //묶어야 실행됨 

        // React.createRef를 통해 들고오기
        this.myRef = React.createRef();
        // 화살표함수를 사용하면 bind를 사용할필요가없다.
        this.changeRefData = () => {
            // createRef를 통해 들고오면 current에 담겨서옴
            console.log(this.myRef);
            this.myRef.current.focus();
        }

    }

    changeData() {
        // ref속성을 통해 가져온 Dom 객체는
        // 자바스크립트에서 ID를 통해 가져온것과 동일하게 사용할수이있다
        console.log(this.textInput);
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <button onClick={this.changeData}>이벤트 버튼</button>
                <input type="text" ref={this.setTextInputRef} />
                <button onClick={this.changeRefData}>createRef를 통해 가져온 DOM이벤트 버튼</button>
                <input type="text" ref={this.myRef} />

            </div>
        );
    }
}
export default EventRefComp;