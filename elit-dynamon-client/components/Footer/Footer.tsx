import footStyle from "./footer.module.scss";
import Image from "next/image";
import FavoriteIcon from "@material-ui/icons/Favorite";
const footer = () => {
  return (
    <>
      <div className={footStyle.footerData}>
        <div className={footStyle.upperFooter}>
          <div className={footStyle.logoAndNewsLetter}>
            <div className={footStyle.logoAndInput}>
              <div className={footStyle.logo}>
                <Image
                  src="/Elit-Dynamon-SVG.svg"
                  height={40}
                  width={90}
                  loading="lazy"
                />
              </div>
              <div className={footStyle.subscribeLetter}>
		      <h1>Subscribe to Newsletter</h1>
                <form method="POST">
                  <input type="email" placeholder="Email . ." />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className={footStyle.companyServices}></div>
        </div>
        <div className={footStyle.lowerFooter}>
		<h2>Designed with ❤️ by Team<span> Elit Dynamon</span></h2>
	</div>
      </div>
    </>
  );
};

export default footer;
