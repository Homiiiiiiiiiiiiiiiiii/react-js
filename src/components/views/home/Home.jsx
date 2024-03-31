import Comments from "../../comments/Comments";

function Home({title,desc}){
    return(
      <main>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Comments/>
      </main>
    )
}

export default Home;