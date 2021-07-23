import navStyle from "./navbar.module.scss";
import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import { SyncTwoTone } from "@material-ui/icons";


const Navbar = () => {

  const [isExpaned, setisExpaned] = useState(false)

  const expandDownAndUp = ()=>{
      if(!isExpaned){
      setisExpaned(true)
      }else{
      setisExpaned(false)
      document.getElementById("navbar").style.height = "6.6%"
      document.getElementById("navbarContent").style.height = "39%"
      document.getElementById("buttonToexpandAndContract").style.transform = "rotate(0deg)"
      }
  }

  if(isExpaned){
    document.getElementById("navbar").style.height = "37%"
    document.getElementById("navbarContent").style.height = "95%"
    document.getElementById("buttonToexpandAndContract").style.transform = "rotate(180deg)"
  }

  const searchingArticle = ()=>{
    console.log("get the fuck out ")
  }


  return (
    <>
      <nav className={navStyle.sideNavbar} id="navbar">
        <div className={navStyle.mainContentLinks} id="navbarContent">
          <div className={navStyle.mobileNavbarDesign}>
            <div className={navStyle.logo}>
              <Link href="/">
                <Image
                  height={45}
                  width={100}
                  src="/Elit Dynamon-SVG.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className={navStyle.expandDown}>
              
              <IconButton onClick={()=>{expandDownAndUp()}}>
                <ExpandMoreIcon id="buttonToexpandAndContract" className={navStyle.expandContract} />
              </IconButton>
            </div>
          </div>

          <div className={navStyle.search}>
            <form action="">
              <input type="text"  className={navStyle.articleSearchELIT}  placeholder="Search Error"/>
                 <IconButton ><SearchIcon className={navStyle.searchIcon}></SearchIcon></IconButton>
            </form>
            </div>

          <div className={navStyle.allLinks}>
            <div className={navStyle.siteRoutes}>
              <Link href="/home">
                <h3>Home</h3>
              </Link>
            </div>
            <div className={navStyle.siteRoutes}>
              <Link href="/blog">
                <h3>Articles</h3>
              </Link>
            </div>
            <div className={navStyle.siteRoutes}>
              <Link href="/aboutus">
                <h3>About us</h3>
              </Link>
            </div>
            <div className={navStyle.siteRoutes}>
              <Link href="/contactUs">
                <h3>Contact us</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={navStyle.socialMediaLinks}></div>
      </nav>
    </>
  );
};

export default Navbar;
