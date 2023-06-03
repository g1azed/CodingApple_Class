// Eslint-disable
// -> Lint 끄는 기능  eslint warning뜰때

import './App.css';
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', ' 파이썬독학 ']);
  // state를 쓰는 Html 데이터가 바뀌면 자동으로 재렌더링
  // -> 이렇게 하고싶을때 사용
  let [modal, setModal] = useState(false);
  // 자주 변경될거같은 부분은 state로 만들어 놓기

  [1,2,3].map(function(){
    // console.log(1)
  })

  let [좋아요, 좋아요변경] = useState(0);
  let [좋아요1, 좋아요변경1] = useState(0);
  let [좋아요2, 좋아요변경2] = useState(0);
  // 여기서 좋아요변경은 state변경용 함수

  function 함수() {
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
        copy[0] = '여자 코트 추천';
        글제목변경(copy)

      }}> 글수정</button>

      {/* <div className="list">
        <h4> {글제목[0]} <span onClick={() => { 좋아요(좋아요변경 + 1) }}> 👍 </span> {좋아요} </h4>
        <p> 2월 17일 발행</p>
      </div>

      <div className="list">
        <h4> {글제목[1]}</h4>
        <p> 2월 17일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}> {글제목[2]}</h4>
        <p> 2월 17일 발행</p>
      </div> */}

      <Modal />
      {
        // 여기에는 Html 자리라 if문 불가 대신 삼항연산자 ㄱㄱ
        modal == true ? <Modal 글제목={글제목}/> : null
        //* 부모 -> 자식 state전송하는법
          //* <자식컴포넌트 작명={state이름} />
      }

      {
        글제목.map(function(a, i){ // map()의 첫번째 파라미터 : array자료 안에 있던 하나하나의 데이터들 
          // map()의 두번째 파라미터 : 0부터 1씩 증가하는 정수
          return (
            <div className="list" key={i}>
              {/* //* map 반복문으로 반복 생성한 html에는 key={i} 를 추가해야만한다
                  //* 그래야 리액트가 각 <div> 들을 구분할수 있어서 그럼ㅇㅇ
              */}
            <h4 onClick={() => { setModal(!modal) }}> {글제목[i]}
              <span onClick={() => { 
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}> 👍{좋아요[i]} </span> 
            </h4>
            <p> 2월 17일 발행</p>
          </div> 
          )
        })
      }

    </div>
  );
}
// let Modal = () => {
// const로 만들면 수정할때 ㅈㄴ 머라함
// 이렇게 컴포넌트 만들어도는 되는데 function으로 만드는걸 추천하심
// }


function Modal(props) {
  return (
    <div className="modal">
      <h4> {props.글제목[0]} </h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>
      <button>글수정 </button>
    </div>
  )
  // 컴포넌트
  // return ( 안에 내용 근데 하나의 태그로만 묶여있어야함)

  //컴포넌트 만들면 좋을때  :
  // 1. 반복적인 Html 축약할때
  // 2. 큰 페이지들
  // 3. 자주 변경되는 것들

  // 컴포넌트의 단점
  // 1. state가져다 쓸때 문제가 생김 ex) A함수에 있떤 변수를 B함수에서 쓸수없기때문
  // 2. 
}
export default App;

// JSX 문법
// class 넣을땐 className 
// 변수 넣을땐 {중괄호}
// JSX 문법 3. html에 style속성 넣고싶으면 style={ color: 'blue' 자료형으로 넣기}


//동적인 UI만드는 step
// 1. html css 로 미리 디자인 완성
// 2. UI 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

