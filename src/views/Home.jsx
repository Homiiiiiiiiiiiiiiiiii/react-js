function Home(props){
  const{title, des} = props
    return(
      <article>
        <h2>{title}</h2>
        <p>이 페이지는 {des} 입니다.</p>
      </article>
    )
  }

  export default Home;