function Data(){
    //변수
    let a = 1
    a= 2
    // console.log(a)

    const b = 10
    // b = 20
    // console.log(b)

    //데이터 타입
    //String
    const name = 'xiuni'
    //Number
    const age = 31
    //Boolean
    const visible = false
    //Object
    const user = {
        name:'siuni',
        age:31,
    }
    //Array
    const array = [1,2,3]
    //Array & Object
    const users = [
        {name:'문학소년찡', age:31},
        {name:'문학소녀찡', age:29},
        {name:'문학청년찡', age:25},
    ]
    //nudefined & null
    const info = {
        birth:'2024-09-10',
        phone:null,
    }
    console.log(info.birth)   //'2024-09-10'
    console.log(info.phone)   //null
    console.log(info.address) //undefined

    const data2 = {
        // name:'vue',
        // desc:'재밌어',
    }

    return(
        <>
            <ul>
                <li>{info.birth}</li>
                <li>{info.phone || '번호 정보 없음'}</li>
                <li>{info.address || '주소 정보 없음'}</li>
            </ul>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}의 나이는 {user.age}살입니다.</li>
                ))}
            </ul>
            <ul>
                <li>{users[0].name} 나이는 {users[0].age}살입니다.</li>
                <li>{users[1].name} 나이는 {users[1].age}살입니다.</li>
                <li>{users[2].name} 나이는 {users[2].age}살입니다.</li>
            </ul>
            <ul>
                {array.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                <li>{array[0]}</li>
                <li>{array[1]}</li>
                <li>{array[2]}</li>
            </ul>
            <h2>기본문법{a}</h2>
            <h3>js 데이터</h3>
            <p>나의 이름은 {name}입니다.</p>
            <p>나의 나이는 {age}살입니다.</p>
            {visible ? <p>로그인</p> : <p>로그아웃</p>}
            <p>나의 이름은 {user.name}이고, 나이는 {user.age}살이야.</p>
            <Func1 {...data2}/>
            <Func2/>
            <Func3/>
        </>
    )
}

//함수 선언식(기명함수)
function Func1({name = '리액트', desc = '재미없어'}){
    // const{name, desc} = props
    return (
        <div>
            <h1>안녕 난 {name}야!</h1>
            <p>{name}는 {desc}.</p>
        </div>
    )
}

//함수 표현식(익명함수)
const Func2 = function(){
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

//화살표 함수(익명함수)
const Func3 = () => {
    return (
        <div>
            <h1>안녕 난 리액트야!</h1>
            <p>리액트는 재밌어.</p>
        </div>
    )
}

export default Data;