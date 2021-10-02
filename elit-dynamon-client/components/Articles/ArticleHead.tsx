import blogHead from "./articlesHead.module.scss";

const ArticleHead = (props) => {
  return (
    <>
      <div className={blogHead.articleHead}>
        <div className={blogHead.SampleImage}>
          <img src="./HeadImage.jpg" alt="" />
        </div>
        <div className={blogHead.ArticleHeadContent}>
          <div className={blogHead.articleTitle}>
            <h1 className={blogHead.articleTitleContent}>
              How to Reslove CORS Error in Express.JS
            </h1>
          </div>
	  <div className={blogHead.DateAndTags}>
		  <div className={blogHead.Date}>
			  <h2> Date : 06-10-2021</h2>
		  </div>
		  <div className={blogHead.Tags}>
			  <h4>#Web development</h4>
			  <h4>#Web development</h4>
		  </div>
	  </div>
          <div className={blogHead.articleContent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              labore veniam omnis ducimus corporis quam ipsa animi voluptatibus
              repudiandae ratione, minus voluptatem quidem quasi natus nam!
              Necessitatibus recusandae consequatur quidem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHead;
