
import './App.css';
import { useState } from 'react'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', ' 파이썬독학 ']);

  let [modal, setModal] = useState(false);

  let [좋아요, 좋아요변경] = useState(0);
  let [좋아요1, 좋아요변경1] = useState(0);
  let [좋아요2, 좋아요변경2] = useState(0);

  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}> ReactBlog </h4>
      </div>

      {
        글제목.map(function (a, i) {
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
      
      <Modal />
      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }


    </div>


  );
}



function Modal(props) {
  return (
    <div className="modal" style={{ background: 'skyblue' }}>
      <h4> {props.글제목[props.title]}</h4>
      <p> 날짜 </p>
      <p> 상세내용 </p>

      <button onClick={() => {


      }}> 글수정</button>
    </div>
  )

}
export default App;

