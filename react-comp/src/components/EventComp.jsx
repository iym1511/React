import { Component } from "react";

// 클래스형 컴포넌트 이벤트
class EventComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true,
            num : 1,
        }
        this.handleClick = this.handleClick.bind(this) //this.handleClick 로 실행해주기위해
        this.numDouble = this.numDouble.bind(this) // 실습 - this.numClick 으로 실행해주기위해
    }

    // 메소드로만 사용하면 this의 위치를 찾기못해서 오류발생 : this를 bind로 연결
    handleClick(){
        // 실행하는 공간이 바뀌어서 값을 가져오는 곳이 바뀜
        // render() : render안에서 가져온 this.state
        // 메소드 : constructor에서 가져온 this.state
        this.setState({isToggleOn : !this.state.isToggleOn});
        console.log("확인")
    }

    // 실습 - 값을 두배로 만들어주는 함수(메소드)
    numDouble(){
        this.setState({num : this.state.num*2});
    }

    render() {
        const {isToggleOn} = this.state;
        const {num} = this.state;
        return(
            <div>
                <button onClick={this.handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
                {/* num이라는 숫자값을 추가해서, 버튼을 클릭할때마다 2배로 늘어갈수있게 */}
                {/* 값은 버튼에 출력 */}
                <button onClick={this.numDouble}>{num}</button>
            </div>
        )
    }
}
export default EventComp;