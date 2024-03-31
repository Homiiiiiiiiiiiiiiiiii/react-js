import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/views/home/Home";
import Cat from "./Cat";
import Event from "./grammar/Event";

function App() {
  const navArr = [
    {title:'Home'},
    {title:'About'},
    {title:'SignIn'}
  ] 
  return (
    <div className="wrap">
      <Event/>
      <Header title="DashBoard" nav={navArr}/>
      <Home title="Home" desc="홈 화면"/>
      <Home title="About" desc="소개 화면"/>
      <Home title="SignIn" desc="로그인 화면"/>
      <Footer/>
    </div>
  );
}

export default App;
