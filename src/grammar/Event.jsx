import { useState } from "react";

const Event = () => {
    function handleClick(e){
        console.log(e)
        console.log(e.target)
        console.log(e.type)
    }

    function handleChange(e){
        document.querySelector('.text').innerText = e.target.value;
    }

    function handleMouseOver(e){
        e.target.style.backgroundColor = 'skyblue'
        e.target.style.color = 'white'
    }

    function handleMouseLeave(e){
        e.target.style.backgroundColor = 'white'
        e.target.style.color = 'black'
    }

    const [count, setCount] = useState(0)
    function handleState(e){
        setCount(count+1)
    }

    const [inputValue, setInputValue] = useState('')
    function handleInput(e){
        setInputValue(e.target.value)
    }
    
    return(
        <div>
            <h2>클릭 이벤트</h2>
            <button onClick={handleClick}>버튼</button>

            <h2>입력 이벤트</h2>
            <input type="text" placeholder="글자를 입력해주세요." onChange={handleChange}/><br />
            <strong className="text"></strong>

            <h2>마우스오버 이벤트</h2>
            <div className="change-blue" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>마우스를 올려주세요.</div>
        
            <h2>클릭하여 상태 변경</h2>
            <button onClick={handleState}>클릭 : {count}</button>

            <h2>조건부 렌더링 예제</h2>
            {count >= 5 ? <p>5이상입니다.</p>:<p>5이하입니다.</p>}

            <h2>입력 이벤트 예제</h2>
            <input type="text" placeholder="입력하세요." value={inputValue} onChange={handleInput} />
            <p>입력한 값 : {inputValue}</p>
        </div>
    )
}

export default Event;