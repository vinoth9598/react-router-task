import { Link, BrowserRouter as Router,Routes,Route } from "react-router-dom";

import All from "./Component/All";
import Fullstack from "./Component/Fullstack";
import Datascience from "./Component/Datascience";
import Cybersecurity from "./Component/Cybersecurity";
import Career from "./Component/Career";
import './Component/css/App.css';
import image from "./Component/image/image.png";

function App(){

  const padding={
    padding:10,
    
  }

  return(
    <Router>
        <div>
            <img src={image} className="headimage" />
        </div>
        <div className="nav">
          <div className="list">
            <Link to='/All' style={padding}>ALL</Link>
            <Link to='/fullstack'  style={padding}>FULL STACK DEVELOPMENT</Link>
            <Link to='/Datascience'  style={padding}>DATA SCIENCE</Link>
            <Link to='/Cybersecurity'  style={padding}>CYBER SECURITY</Link>
            <Link to='/career'  style={padding}>CAREER</Link>
          </div>
        </div>
        <Routes>
            <Route path='/All' element={<All/>} />
            <Route path='/fullstack' element={<Fullstack/>}/>
            <Route path='/Datascience' element={<Datascience/>}/>
            <Route path='/Cybersecurity' element={<Cybersecurity/>}/>
            <Route path='/Career' element={<Career/>}/>

        </Routes>
        

    </Router>
  )
}

export default App;