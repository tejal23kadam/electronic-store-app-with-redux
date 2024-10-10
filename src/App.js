
import './App.css';
import IndexPage  from './component/IndexPage'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import NavBar from './component/navBar/navBar';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path='/' element ={<IndexPage/>}></Route>
        </Routes> 
      </BrowserRouter>     
    </div>
  );
}
export default App;
