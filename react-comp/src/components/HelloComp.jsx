// 클래스 컴포넌트
// 파일이름과 클래스컴포넌트 이름을 동일하게해야 안햇갈림

import { Component } from "react";

class HelloComp extends Component{
    render(){
        // 비구조화 / 구조화할당 : 객체나 배열의 값을변수에다 각각 할당
        // props의 값은 항상 문자열로 들어온다.
        const {name, adress, num, children} = this.props; //객체통만듬+할당
        console.log(typeof parseInt(num));
        return(
            <div>
                <h1>{name} 님 안녕하세요!!!!</h1>
                <p>{adress}에 살고있습니다</p>
                <p>{children}</p>
            </div>
        );
    }
}

export default HelloComp; // Hello 클래스 내보내줌