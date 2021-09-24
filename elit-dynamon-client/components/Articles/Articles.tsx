import artStyle from "./articles.module.scss"
import ArticleHead from "./ArticleHead"

const Articles = (props) => {
	// const articlesList = props.ArticlesList
	return (
		<>
			<div className={artStyle.main}>
				<div className={artStyle.searchArticles}>
					<input type="search" placeholder="  Search Articles" />
				</div>
				<div className={artStyle.articlesHeads}>
					{/* {
					   articlesList.map((itemData)=>{
						   return <ArticleHead title={itemData.title} key={itemData.id} date={itemData.date} context={itemData.content.slice(0,200)}/>
					   })
					} */}
					<ArticleHead title={"UOBASDOV"} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
				</div>
			</div>
		</>
	)
}

export default Articles
