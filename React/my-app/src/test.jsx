import React, { useState, useEffect } from 'react'

export default function App3() {
    const [num, setNum] = useState();

    useEffect(() => {
        console.log("값을 렌더링합니다")
    }, [num])


    const handleInputOnchange = (e) => {
        const inputNum = parseInt(e.target.value);
        // : 입력받은 숫자 값
        //isNaN -> 숫자가 아니라면
        if (isNaN(inputNum)) {
            setNum("숫자만 입력하세요")
        } else {
            setNum(inputNum)
        }
    }

    return (
        <div>
            {
                typeof (num) === 'string' ? (
                    <p> 숫자입력해주세요 </p>
                ) : (
                    <p>{num}</p>
                )
            }

            <input type="text" onChange={handleInputOnchange} />
            <h2>숫자만 입력하세요</h2>

        </div>
    )
}