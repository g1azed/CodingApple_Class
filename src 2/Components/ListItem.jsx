import React from 'react'

export default function ListItem({title, likeCount, showModal, changeCount, removeText}) {
  
    return (
    <div className='list'>
    <h4 onClick={showModal}>
      {title}
      <span onClick={changeCount}>👍</span>
      {likeCount}
    </h4>
    <p>2월 {1}일 발행</p>
    <button onClick={removeText}>삭제</button>
  </div>
  )
}
