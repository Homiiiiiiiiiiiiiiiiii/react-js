import logo from './logo.svg';
import './App.css';
import Hello, { World, World2 } from './module';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Home from './views/Home';

function App() {
  const listArr = [
    {title:"Home", des:"홈화면"},
    {title:"About", des:"소개페이지"},
  ]
  return (
    <>
      <Header/>
      <Nav/>
      {listArr.map((item, index) => (
        <Home key={index} title={item.title} des={item.des}/>
      ))}
      <Footer/>
    </>
  );
}

export default App;
