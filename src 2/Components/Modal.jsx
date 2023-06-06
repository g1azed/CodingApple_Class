import React from 'react'

export default function Modal({title,edit,modalTitle}) {
  return (
    <>
        <div className='modal'>
         <h4>{title[modalTitle]}</h4>
         <p>날짜</p>
         <p>상세내용</p>
         <button onClick={edit}>글수정</button>
       </div>
    </>
  )
}
