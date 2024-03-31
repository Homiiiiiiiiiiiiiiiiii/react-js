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
    
    return(
        <div>
            <h1>클릭 이벤트</h1>
            <button onClick={handleClick}>버튼</button>

            <h1>입력 이벤트</h1>
            <input type="text" placeholder="글자를 입력해주세요." onChange={handleChange}/><br />
            <strong className="text"></strong>

            <h3>마우스오버 이벤트</h3>
            <div className="change-blue" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>마우스를 올려주세요.</div>
        </div>
    )
}

export default Event;