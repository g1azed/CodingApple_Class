import React, { useState } from 'react'

import './App.css';
export default function List() {
    const [title, setTitle] = useState('제목을 입력해주세요');
  const getDate = () => {
    let arr =[];
    for(let i =1; i<31; i++){
        arr.push(i);
    }
    return arr;
  }

  const datesArray = getDate();
 

    
  return (
    <div>
      <ul className='list'>
        <li className='title'>{title}</li>
        {datesArray.map((date) => (
          <li className='data-count' key={date}>
            2월 {date} 일 발행
          </li>
         
        ))}
      </ul>
    </div>
  );
}







{/* <ul className='list'>
        <li className='title'>{title}</li>
        <li className='data-count'>2월 17일 발행</li>
    </ul>
    <ul className='list'>
        <li className='title'>{title}</li>
        <li className='data-count'>2월 17일 발행</li>
    </ul> */}