import homeStyle from "./HomeFirstPage.module.scss";
import Image from "next/image"
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton }  from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { faDiscord } from  "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeFirstPage = () => {
	return (
		<>
		<div className={homeStyle.container}>
			<header>
				<div className={homeStyle.search}>
					<input type="text"  placeholder="Search Articles. . . ."/>
				</div>
			</header>
			<div className={homeStyle.mainCenterData}>
				<div className={homeStyle.wordMark}>
			          	<h1 className={homeStyle.textELIT}> ELIT</h1> <pre></pre>  <h1 className={homeStyle.textDYNAMON}>Dynamon</h1>
				</div>
				<div className={homeStyle.sloganMark}>
					<h2 className={homeStyle.sloganText}>Articles for Gen Z Geeks</h2>
				</div>
			</div>
			<div className={homeStyle.socialMediaPresence}>
				<div className={homeStyle.iconsLinks}>
					<div className={homeStyle.icon}>
						<IconButton>
						<a href="" target="_blank"><GitHubIcon /> </a>
						</IconButton>
					</div>
					<div className={homeStyle.icon}>
					     <IconButton>
						 <a href="" target="_blank"><FontAwesomeIcon icon={faDiscord}/> </a>
						</IconButton>
					</div>
					<div className={homeStyle.icon}>
						<IconButton>
							<a href="" target="_blank"><InstagramIcon/> </a>
						</IconButton>
					</div>
					<div className={homeStyle.icon}>
						<IconButton>
						<a href="" target="_blank"><TwitterIcon/></a>
						</IconButton>
					</div>
					<div className={homeStyle.icon}>
						<IconButton>
							<a href="" target="_blank"><LinkedInIcon/></a>
						</IconButton>
					</div>
				</div>
				<div className={homeStyle.line}>
					<div className={homeStyle.Line}>

					</div>
				</div>
			</div>
			<div className={homeStyle.someButtons}>
				<button>Start Reading Articles</button>
			</div>
		</div>
		</>
	)
}

export default HomeFirstPage
