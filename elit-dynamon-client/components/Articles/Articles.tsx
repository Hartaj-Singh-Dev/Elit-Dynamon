import artStyle from "./articles.module.scss"
import ArticleHead from "./ArticleHead"
import { useEffect } from "react"

const Articles = (props) => {
	// const articlesList = props.ArticlesList

	// useEffect(() => {
	// 	const Input = document.getElementById("searchBox")
	// 	var sticky = Input.offsetTop;
		
	//       const changePosition = ()=> {
	// 	console.log(window.scrollY)
	// 	if(window.scrollY >= 10){
	// 		Input.className ="searchArticles-sticky"
	// 	}else{
	// 		Input.className ="searchArticles"
	// 	} 
	// 	console.log(Input.getAttribute("class"))
	// 	// if (window.pageYOffset > sticky) {
	// 	// 	Input.classList.add("searchArticles-sticky");
	// 	//       } else {
	// 	// 	Input.classList.remove("searchArticles-sticky");
	// 	//       }
	//         }

	// window.addEventListener("scroll" , changePosition)
	

	// 	return () => {
		
	// 	}
	// }, [])

	

	return (
		<>
			<div className={artStyle.main}>
				<div className={artStyle.searchArticles} id="searchBox">
					<input type="search" placeholder="  Search Articles" />
				</div>
				<div className={artStyle.articlesHeads}>
					{/* {
					   articlesList.map((itemData)=>{
						   return <ArticleHead title={itemData.title} key={itemData.id} date={itemData.date} context={itemData.content.slice(0,200)}/>
					   })
					} */}
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					<ArticleHead title={""} key={"UOVBASP"} date={"RAD"} context={"SDGD"}/>
					
				</div>
			</div>
		</>
	)
}

export default Articles
