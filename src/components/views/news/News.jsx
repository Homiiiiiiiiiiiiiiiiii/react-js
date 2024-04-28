import axios from "axios"
import { useEffect, useState } from "react"

function News(){

    const categoryList = [
        { name: '전체', value: 'all' },
        { name: '비즈니스', value: 'business' },
        { name: '엔터테인먼트', value: 'entertainment' },
        { name: '건강', value: 'health' },
        { name: '과학', value: 'science' },
        { name: '스포츠', value: 'sports' },
        { name: '기술', value: 'technology' },
    ]
    const [news, setNews] = useState([])
    const [category, setCategory] = useState('all')

    //마운트 시에만 실행(페이지 접속했을 때)
    useEffect(() => {
        // fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`) //API주소
        //     //fetch는 then 2번 작성
        //     .then((response) => response.json()) //↑api로 가져온 데이터를 JSON 형태로 변환
        //     .then((data) => {// json형태로 변환한 데이터를 data라는 매개변수로 받음
        //         console.log(data)
        //         setNews(data.articles) //news에 data.articles 값이 들어감
        //     }) 
        //     .catch((error) => console.error(error))

        //async/await 사용
        const fetchData = async () => {
            let response
            try{ //성공 시
                
                if(category === 'all'){
                    //데이터 가져오기
                    response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
                    //JSON 형태로 변환
                    // const data = await response.json() 
                }else {
                    response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
                }
                console.log(response.data)
                setNews(response.data.articles)

            }catch(error){//실패 시
                console.log(error)
            }
        }

        fetchData()
    }, [category])//의존성 배열

    function selectCategoty(category) {
        setCategory(category)
    }

    return(
        <div>
            <h1>News</h1>

            <div>
                {categoryList.map((item, index) => (
                    <button key={index} onClick={() => selectCategoty(item.value)}>{item.name}</button>
                ))}
            </div>

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