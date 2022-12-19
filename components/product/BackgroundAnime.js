import styles from "../modules/anime_page.module.css";

const BackgroundAnime = function({bg}) {
    return (
        <div className={`${styles.anime_background}`}>
            <img src={bg} alt="background-image" className={`${styles.anime_background_img}`}/>
        </div>
    )
}
export default BackgroundAnime;
