import Navbar from "../components/Navbar/Navbar"

const Articles = () => {

	document.addEventListener('contextmenu', event => event.preventDefault());
	return (
		<>
		<Navbar whichActive="articles"/>	
		</>
	)
}

export default Articles
