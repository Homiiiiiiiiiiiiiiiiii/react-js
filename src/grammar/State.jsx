import { useState } from "react";
import switchOn from '../assets/images/switch-on.svg'
import switchOff from '../assets/images/switch-off.svg'
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function State(){
    // let name = '김겨울'

    // vanilla script
    // function changeName(e){
    //     name = name === '김겨울' ? '김가을' : '김겨울' 
    //     console.log(name)
    //     document.querySelector('.name').innerText = name
    // }
    
    //useState 
    const[name, setName] = useState('김겨울')
    function changeName(){
        setName(name === '김겨울' ? '김가을' : '김겨울')
    }

    const[number, setNumber] = useState(0)

    const[isOn, setIsOn] = useState(false)
    
    function ChangeOn(){
        setIsOn(!isOn)
    }

    const sortArr = [
        {value:'해변', icon:<FaUmbrellaBeach />},
        {value:'햄버거', icon:<FaHamburger />},
        {value:'한옥', icon:<FaHome />},
        {value:'피자', icon:<FaPizzaSlice />},
    ]

    const [selected, setSelected] = useState(0)

    const[isToggled, setIsToggled] = useState(false)
   
    return(
        <>
            <div>
                <h3>햄버거 메뉴</h3>
                <button onClick={() => setIsToggled(!isToggled)}>{isToggled ? <IoClose /> : <IoMenu />}</button>
                <ul style={{display:isToggled ? 'block' : 'none'}}>
                    <li>불고기 버거</li>
                    <li>치즈 버거</li>
                    <li>새우 버거</li>
                    <li>라이스 버거</li>
                </ul>
            </div>
            <div>
                <h3>menu 클릭 시 active 클래스 추가</h3>
                <SortStyled>
                    {sortArr.map((item, index) => (
                        <li 
                            key={index} 
                            className={selected === index ? 'active' : ''} 
                            onClick={() => setSelected(index)}
                        >
                            {item.icon} {item.value}
                        </li>
                    ))}
                </SortStyled>
            </div>
            <div>
                <h3>이미지 토글</h3>
                <img 
                    src={isOn ? switchOn : switchOff} 
                    alt="switch" 
                    onClick={ChangeOn}
                />
                <div>{isOn ? 'ON' : 'OFF'}</div>
            </div>
            <div>
                <h3>Counter</h3>
                <strong>{number}</strong><br />
                <button onClick={() => setNumber(number + 1)}>+</button>
                <button onClick={() => setNumber(number - 1)}>-</button>
            </div>
            <div>
                <h3>가을 겨울 이름바꾸기</h3>
                <strong className="name">{name}</strong><br />
                <button onClick={() => setName(name === '김겨울' ? '김가을' : '김겨울')}>이름 바꾸기</button>
            </div>
        </>
    )
}

const SortStyled = styled.ul`
    display:flex;
    list-style:none;
    li{
        display:flex;
        gap: 10px;
        flex-direction : column;
        align-items:center;
        padding:10px;
        cursor: pointer;
        &.active{
            color:skyblue;
        }
    }
    svg{
        font-size:30px;
    }
`


export default State;