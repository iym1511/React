// useContext를 사용 및 확인하기 위해 여러 개의 컴포넌트를 작성
// useContext의 특성 
// : 리액트는 부모의 값을 props을 통해 계속해서 아래로 내려주는 형식으로사용
// > useContext를 사용하면 중간에 props 전해주는 것 없이 자손컴포넌트에 값을 전해줄수있다

import React, { Component } from "react";
import { useContext } from "react";

// (1) useContext를 통해서 공유할 값을 객체형태로 작성
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    },
    blue: {
        foreground: "white",
        background: "blue"
    },
};

// (2) useContext를 통해서 값을 공유하기위해 createContext사용
// React를 import해서 사용
// 빈값 들어가면 오류나서 null 로 채움
const ThemeContext = React.createContext(null); 

const ContextCompAll = () => {
    return (  
        <div>
            {/** createContext로 만든 컴포넌트로 값을 사용하는 컴포넌트를 감싼다 */}
            <ThemeContext.Provider value={themes.blue}>
            <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}

// 다른 js에서 import해서 사용하기 위함
export default ContextCompAll;

// ContextCompAll에서 사용할 컴포넌트
// 현재 컴포넌트에서만 사용할 수 있다

// (3)함수형 컴포넌트 툴바 > ContextCompAll을 부모로 삼고, 2개의 자식을 갖는 컴포넌트
const Toolbar = () => {
    return (  
        <div>
            <ThemedButtonFunc />    
            <ThemeContext.Provider value={themes.dark}> {/**따로주면 따로들어감 */}
            <ThemeButtonClass />
            </ThemeContext.Provider>
            <ThemePFunc />
        </div>
    );
}

// Toolbar 컴포넌트 안에 들어갈 컴포넌트
// 함수형 컴포넌트
const ThemedButtonFunc = () => {
    // useContext를 통해서 조상의 값에 접근할 수 있다.
    // (4)createContext로 만든 컴포넌트를 가져와서 값을 사용 
    const theme = useContext(ThemeContext)
    return (  
        <div>
            <button style={{backgroundColor: theme.background, color: theme.foreground }}>
            함수형 컴포넌트의 버튼입니다
            </button>
        </div>
    );
}

// 클래스형 컴포넌트로 context에 접근
class ThemeButtonClass extends Component {
    // 클래스로 값을 가져올때 static을 통해서 contextType으로 가져온다
    static contextType = ThemeContext;
    render() {
        return (
            <div>
                <button style={{background: this.context.background, color: this.context.foreground}}>
                    클래스형 컴포넌트의 버튼입니다
                </button>
            </div>
        );
    }
}

// Toolbar안에 들어갈 새로운 p태그 작성
// 함수형으로 만들어 동일한 theme.dark를 가질수 있도록 하기.
// + themes에 blue를 추가해서 배경색 blue이고 color가 white 주제를 만들어서 확인
const ThemePFunc = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <p style={{backgroundColor: theme.background, color: theme.foreground}}>
                P태그 함수형 컴포넌트
            </p>
        </div>
    );
}
