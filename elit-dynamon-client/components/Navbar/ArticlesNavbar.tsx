import navStyle from "./articlesNavbar.module.scss";
import NavLink from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Image from "next/image";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import {Link} from "react-scroll"


const ArticlesNavbar = (props) => {

  const [isExpaned, setisExpaned] = useState(false)

  const expandUpAndDown = ()=>{
      if(!isExpaned){
      setisExpaned(true)
      }else{
      setisExpaned(false)
      document.getElementById("navbar").style.height = "3rem"
      document.getElementById("navbarContent").style.height = "39%"
      document.getElementById("buttonToexpandAndContract").style.transform = "rotate(0deg)"
      }
  }

  if(isExpaned){
    document.getElementById("navbar").style.height = "16rem"
    document.getElementById("navbarContent").style.height = "95%"
    document.getElementById("buttonToexpandAndContract").style.transform = "rotate(180deg)"
  }

  const searchingArticle = ()=>{
    console.log("get the fuck out ")
  }

  return (
    <>
      <nav className={navStyle.TopNavbar} id="navbar">
        <div className={navStyle.mainContentlinks} id="navbarContent">
          <div className={navStyle.MobileNavbarDesign}>
            <div className={navStyle.Logo}>
              <NavLink href="/">
                <Image
                  height={35}
                  width={100}
                  src="/Elit-Dynamon-SVG.svg"
                  alt=""
                  loading="eager"
                />
              </NavLink>
            </div>
            <div className={navStyle.ExpandDown}>
              
              <IconButton onClick={()=>{expandUpAndDown()}}>
                <ExpandMoreIcon id="buttonToexpandAndContract" className={navStyle.ExpandContract} />
              </IconButton>
            </div>
          </div>

          <div className={navStyle.Search}>
            <form action="">
              <input type="text"  className={navStyle.articleSearch}  placeholder="Search Error"/>
                 <IconButton ><SearchIcon className={navStyle.searcHIcon}></SearchIcon></IconButton>
            </form>
            </div>

          <div className={navStyle.alllinks}>
            <div className={navStyle.siteroutes}>
              <NavLink href="/">
                <h3 id="homeLink" className={(props.whichActive == "home") ?  navStyle.activeLink : " "}>Home</h3>
              </NavLink>
            </div>
            <div className={navStyle.siteroutes}>
              <NavLink href="/articles">
                <h3 id="articlesLink"   className={(props.whichActive == "articles") ?  navStyle.activeLink : " "} >Articles</h3>
              </NavLink>
            </div>
            <div className={navStyle.siteroutes}>
              <Link  activeClass="active" to="aboutSection" spy={true} smooth={true} offset={50} duration={500} >
                <h3 id="aboutLink"   className={(props.whichActive == "about") ?  navStyle.activeLink : " "}>About us</h3>
              </Link>
            </div>
            <div className={navStyle.siteroutes}>
              <NavLink href="/contactUs">
                <h3 id="contactLink"   className={(props.whichActive == "contact") ?  navStyle.activeLink : " "} >Contact us</h3>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={navStyle.socialMediaLinks}></div>
      </nav>
    </>
  );
};

export default ArticlesNavbar;
