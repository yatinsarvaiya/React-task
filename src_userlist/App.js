import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"; 
import { CustomRoute } from './CustomRoute';
import { Header } from './Header';
function App() {
  return (

    <Router>
      <Header />
        <CustomRoute/>
      </Router> 
  );
}

export default App;
