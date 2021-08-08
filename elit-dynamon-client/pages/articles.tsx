import ArticlesNavbar from "../components/Navbar/ArticlesNavbar";
import Footer from "../components/Footer/Footer"
import ArticlesPage from "../components/Articles/Articles"
import artStyle from "../components/Articles/articles.module.scss"

const Articles = () => {
	return (
		<>
		<header>
			<ArticlesNavbar whichActive="articles"/>
	        </header>
		<main className={artStyle.articlesPage}>
			<ArticlesPage/>
		</main>
		<footer>
			<Footer/>
		</footer>
		</>
	)
}

export default Articles
