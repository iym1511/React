import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp'; // 가져옴
import HelloFuncComp from './components/HelloFuncComp'; // 가져옴
import MyLogin from './components/MyLogin';
import MyLoginFunc from './components/MyLoginFunc';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*객체 생성해줌*/}
        <HelloComp name="팀쿡" adress="부산" num="1">반갑습니다(children)</HelloComp> 
        <HelloFuncComp name="이재용" />
        {/* props는 컴포넌트를 사용할때 작성, html요소의 속성과 동일*/}
        <MyLogin login="true" name="잡스" />
        {/* JSX언어임으로 {}통해서 자바스크립트를 쓸 수 있다 */}
        <MyLoginFunc login={true} /> {/* boolean쓸땐 {}안에 참거짓값 할당 */}
        <StateComp />
        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
      </header>
    </div>
  );
}
{/* 문자형아닌 자료형으로 쓸려면 {}안에다가 작성 ★★ */}
export default App;
