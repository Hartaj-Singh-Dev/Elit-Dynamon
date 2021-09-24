import React from 'react'
import blogHead from "./articlesHead.module.scss"

const ArticleHead = (props) => {
	return (
		<>
			<div className={blogHead.articleHead}>
				<h1>{props.title}</h1>
			</div>
		</>
	)
}

export default ArticleHead
