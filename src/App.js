import Home from './components/Home'
import logo from './files/addD1.webp'
import {Route,Routes,Link} from 'react-router-dom'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Gallery from './components/Gallery'
import ServicesAndFacilities from './components/ServicesAndFacilities'
import './App.css'
import facebook from './files/facebook.png'
import insta from './files/insta.webp'
import twitter from './files/twitter.png'
import bg from './files/bg.avif'


function App() {
 
  let style2={
    borderRadius:"50%"
  }
  
  let bag={
  position : 'fixed',
  width:'100%',
  height:'100%',
  objectFit : "cover",
zIndex : -1,    
    
  }
 
  return (
    <div >
      <div>
      <img style={bag} src={bg} alt=''/>

  <div className="navbars">
      <img className="img1" style={style2} src={logo}  width={50} height={50} alt="" />
      <li className="m1"><Link to='/Home'> Home</Link></li>
        <li className="m1"><Link to="/About"> About</Link></li>
        <li className="m1"><Link to="/ServicesAndFacilities"> ServicesAndFacilities</Link></li>
        <li className="m1"><Link to="/Gallery"> Gallery</Link></li>
        <li className='m1'><Link to="/ContactUs"> ContactUs</Link></li>
      </div>
    

   <div className="ele">
   
      <Routes>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/ServicesAndFacilities' element={<ServicesAndFacilities/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>

      <div className="footer">
        <div className="footerHead">
        <div className="f-1"></div>
        <div className="f-2">
            <h3 className='f-2a'>Contact us</h3>
            <p>sy no 294, airport road mamidpally, balapur mandal rangareddy dist.landmark : mamidpally to Jalpally Rd, Hyderabad, Telangana 500005</p>
            <h3 className='f-2b'>Call</h3>
            <p>090007 79444</p>
        </div>
        <div className="f-3">
        <div className="f-list">
      <li className="m2"><Link to='/Home'> Home</Link></li>
        <li className="m2"><Link to="/About"> About</Link></li>
        <li className="m2"><Link to="/ServicesAndFacilities"> ServicesAndFacilities</Link></li>
        <li className="m2"><Link to="/Gallery"> Gallery</Link></li>
        <li className='m2'><Link to="/ContactUs"> ContactUs</Link></li>
      </div>
        </div>
        <div className="f-4">
        <img className="img4" style={style2} src={logo}  alt="" />
        <div className="f-4a">
        <img className="img2" style={style2} src={facebook} alt="" />
        <img src={insta} alt="" className="img2" style={style2}/>
        <img src={twitter} alt="" className="img3"/>
        </div>
        </div>
        </div>
        <hr color='black'/>
        <h3 style={{textAlign:"center",fontSize:13}}>Copyright © Yashoda Palm Groves. All rights reserved.</h3>
      </div>

      </div>      
    </div>
  );
}

export default App;
