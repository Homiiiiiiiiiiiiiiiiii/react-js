const Comments = () => {

    const users = [
        {
            name:'겨울이',
            img:'https://assets.chatgpt4google.com/assets/promo/43.gif'
        },
        {
            name:'가을이',
            img:'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        }
    ]

    const commentData = [
        {
            user:users[0],
            text:'난 집에가고싶어, 누워있고 싶어',
            date:'2024.03.31'
        },
        {
            user:users[1],
            text:'난 손이시려워, 왜이렇게 손이 시린거야',
            date:'2024.04.01'
        }
    ]

    return(
        <div>
            <h2>Comments</h2>
            {commentData.map((item,index) => (
                <Comment key={index} data={item}/>
            ))}
        </div>
    )
}

const Comment = ({data}) => {
    return(
        <div>
            <User user={data.user}/>
            <div>
                <p>{data.text}</p>
                <time>{data.date}</time>
            </div>
        </div>
    )
}


const User = ({user}) => {
    return(
        <div>
            <img src={user.img} alt={user.name} />
            <p>{user.name}</p>
        </div>
    )
}

export default Comments;