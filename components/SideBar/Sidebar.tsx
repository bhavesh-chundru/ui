import React from "react";
import { useState } from "react";
import Login from "../Login/Login";
import styles from "./sidebar.module.css";


const Sidebar = () => {
  const [show, setShow] = useState<any>(false);
  const[navshow,setNavshow]=useState(false)


  const NewshowHandler=()=>{
    setNavshow(!navshow)
  }

  const showhandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div id="mySidenav" className={show ? styles.sidenav1 : styles.sidenav}>
        {show ? (
          <>
            <div>
              {/* <button className="login_phase" onClick={NewshowHandler}>
                <h5>Login/Signup</h5>
                {
                    navshow ? <Login/>: null
                }
                 </button> */}
            </div>
            <button onClick={showhandler} className={styles.closebtn}>
              &times;
            </button>

            {/* <a href="#">Book-Flight</a>
            <a href="#">web check-in</a>
            <a href="#">Flight status</a>
            <a href="#">view/Edit booking</a> */}

            

          </>
        ) : null}
      </div>
      <span
        style={{
          fontSize: "28px",
          cursor: "pointer",
          color: "white",
          marginLeft: "20px",
          marginTop:"-10px"
        }}
        onClick={showhandler}
      >
        &#9776;{" "}
      </span>

   <style>
     {
     `

     
     
     `
     }
   </style>

    </>
  );
};

export default Sidebar;
