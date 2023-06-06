import React, { useState } from 'react'
import './App.css';
import List from './List';
export default function App2() {

    // const [title, setTitle] = useState('제목을 입력해주세요');
    // const [date, setDate] = useState('날짜를 입력해주세요');



  return (
   <div className='App'>
    <div className='black-nav'>
        <div>개발 blog</div>
    </div>
    <List />
   </div>
  )
}
