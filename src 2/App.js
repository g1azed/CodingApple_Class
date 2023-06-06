import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal';
import ListItem from './Components/ListItem';
function App() {

  let logo = 'ReactBlog';
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집','파이썬독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modalTitle, setModalTitle] = useState(0);
  let [result, setResult] = useState('');

  function changeCount(index) {
    const newLike = [...like];
    newLike[index]+=1;
    setLike(newLike);
  }

  let [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(modal ? false: true);
  }

  function edit(){
    const newtitle = [...title];
    newtitle[0] = '여자코트추천';
    setTitle(newtitle);
  }

  function addText(x){
    let newText = [...title];
    newText.push(x);
    setTitle(newText);
    setResult('');
  }

  function removeText(index){
    let newText = [...title];
    newText.splice(index, 1);
    setTitle(newText);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'lightgreen', fontSize : '22px'}}>{logo}</h4>
      </div>
      {
  title.map(function(a, index) {
    return (
      <ListItem
        key={index}
        title={a}
        likeCount={like[index]}
        showModal={() => {
          showModal();
          setModalTitle(index);
        }}
        changeCount={(e) => {
          e.stopPropagation();
          changeCount(index);
        }}
        removeText={() => removeText(index)}
      />
    );
  })
}

      {
        modal == true ? <Modal modalTitle={modalTitle} edit={edit} title ={title}/> : null
      }
      <input value={result} onChange={(e) => setResult(e.target.value)} />
      <button onClick={() => addText(result)}>글작성하기</button>
    </div>
  );
}




export default App;