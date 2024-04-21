import { useEffect, useState } from "react"

function News(){

    const [news, setNews] = useState([])

    //마운트 시에만 실행(페이지 접속했을 때)
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`) //API주소
            //fetch는 then 2번 작성
            .then((response) => response.json()) //↑api로 가져온 데이터를 JSON 형태로 변환
            .then((data) => {// json형태로 변환한 데이터를 data라는 매개변수로 받음
                console.log(data)
                setNews(data.articles) //news에 data.articles 값이 들어감
            }) 
            .catch((error) => console.error(error))
    }, [])//의존성 배열

    return(
        <div>
            <h1>News</h1>
            <ul>
                {news.map((item,index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <img src={item.urlToImage} alt={item.title} />
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default News