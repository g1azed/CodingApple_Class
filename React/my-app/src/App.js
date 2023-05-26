// Eslint-disable
// -> Lint 끄는 기능  eslint warning뜰때

import './App.css';
import { useState } from 'react'


function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', ' 파이썬독학 ']);
  // state를 쓰는 Html 데이터가 바뀌면 자동으로 재렌더링
  // -> 이렇게 하고싶을때 사용

  // 자주 변경될거같은 부분은 state로 만들어 놓기

  let [좋아요, 좋아요변경 ] = useState(0);
  // 여기서 좋아요변경은 state변경용 함수
  function 함수(){
    console.log(1);
  }
//   1. 클릭시 뭔가 실행하고 싶으면 onClick={함수} 이렇게 이벤트 핸들러를 달아서 사용합니다.

// 2. state를 변경하시려면 state 변경함수를 꼭 이용하십시오.

// state변경함수는 ( ) 안에 입력한걸로 기존 state를 갈아치워줍니다.

// 중요하니 외워둬야합니다. 

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}> ReactBlog </h4>
      </div>

    <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        copy[0]= '여자 코트 추천'; 
        글제목변경(copy)

      }}> 글수정</button>

      <div className="list">
        <h4> {글제목[0] } <span onClick={ () => {좋아요(좋아요변경+1)} }> 👍 </span> {좋아요} </h4>
        <p> 2월 17일 발행</p>
      </div>
        
      <div className="list">
        <h4> {글제목[1]}</h4>
        <p> 2월 17일 발행</p>
      </div>

      <div className="list">
        <h4> {글제목[2]}</h4>
        <p> 2월 17일 발행</p>
      </div>

    </div>
  );
}
export default App;

// JSX 문법
// class 넣을땐 className 
// 변수 넣을땐 {중괄호}
// JSX 문법 3. html에 style속성 넣고싶으면 style={ color: 'blue' 자료형으로 넣기}