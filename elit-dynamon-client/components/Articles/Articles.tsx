import artStyle from "./articles.module.scss"

const Articles = () => {
	return (
		<>
			<div className={artStyle.main}>
				<div className={artStyle.searchArticles}>
					<input type="search" />
				</div>
				<div className={artStyle.articlesHeads}>
					<h1>Articles</h1>
				</div>
			</div>
		</>
	)
}

export default Articles
