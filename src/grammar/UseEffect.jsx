import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const didMountRef = useRef(false)
    const [isShow, setIsShow] = useState(true)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        let interval 

        if(isShow){
            interval = setInterval(() => {
                setTimer(timer + 1)
            }, 1000) //1: 실행 함수 2: 초 수
        }

        return() => {
            console.log('타이머 종료')
            clearInterval(interval)
        }
    }, [isShow, timer])

    const hideTimer = () => {
        setIsShow(false)
        setTimer(0)
    }

    const showTimer = () => {
        setIsShow(true)
    }

    //마운트 됐을 때
    //빈 배열일 시 마운트 될 때만 실행
    // useEffect(() => {
    //     if(!didMountRef.current){
    //         //마운트 됐을 때
    //         didMountRef.current = true
    //         return
    //     }else{
    //         //컴포넌트가 업데이트 될 때마다 실행
    //         console.log("업데이트될 때만 실행")
    //     }
    // })

  return (
    <div>
        <strong>{count}</strong><br />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        <div>
            {isShow ? ( 
                <div>
                    <strong>{timer}초</strong><br />
                    <button onClick={hideTimer}>hide</button>
                </div>
                ) : ( 
                <div>
                    <button onClick={showTimer}>show</button>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default UseEffect