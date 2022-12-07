import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom'

const Header = (props) => {
  const {category, val, setVal, searchClick, categoryClick, homeClick}=props

  const keyPress=(e)=>e.key==="Enter"?searchClick():""

  return (
    <>
      <nav>
        <div className="container">
          <div className="navbar">
            <ul className="menu">
              <li  onClick={()=>homeClick()}>
                <Link className="link" to="/"><b>Home</b></Link>
              </li>
              <li>
                <select onClick={(e)=>categoryClick(e.target.value)}  className="dropdown" name="" id="">
                  <option>Category</option>
                          {
                            category.map((item,i)=>{
                              return(
                                <option value={item}>{item}</option>
                              )
                            })
                          }
                </select>
              </li>
              <li><Link className="link" to="/card">Card</Link></li>
            </ul>
            <div className="form_action">
              <div>
                <input 
                onKeyPress={(e)=>keyPress(e)}
                value={val} 
                onChange={(e)=>setVal(e.target.value)} 
                type="text" />
              </div>
              <div>
                <button onClick={()=>searchClick()}>Search</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
