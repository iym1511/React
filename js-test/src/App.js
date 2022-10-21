import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  // 제이쿼리 플러그인 가져오기

  const progressbar = useRef(null)
  useEffect(()=>{
    // window.addEventListener("DOMContentLoaded", function(){ windwoDom삭제
      window.addEventListener("scroll", function(){
          // 프로그래스 바가 있다면 실행될수 있도록
          if(progressbar != null){
              // 프로그래스바 세팅함수 실행
              setProgress();
          }
      },[]); // []마운트할때만 넣어줌 ★★
  // }); windwoDom삭제

  // progress의 width를 스크롤 길이에 따라서 수정
  function setProgress(){
      // 스크롤한 높이
      let curreY = document.documentElement.scrollTop
      console.log(curreY);
      // 전체 높이
      let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
      console.log((totalY));

      // 퍼센트로 바꿔서 progress css의 width값에 넣어주기
      let percentage = (curreY/totalY)*100;
      document.querySelector(".progress").style.width = percentage +"%";
  }
  })
  return (
    <div className="App">
      <div id="progressbar" class="progressbar" ref={progressbar}>
            <div class="progress"></div>
        </div>
    </div>
  );
}

export default App;
