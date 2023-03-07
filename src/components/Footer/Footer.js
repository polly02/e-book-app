import style from "./Footer.module.css"

function Footer() {
    return (
        <div className={style["wrapper-absolute"]}>
            <div className={style["wrapper"]}>
                <div className={style["logo"]}></div>
                <nav>
                    <p>Privacy Policy</p>
                    <p>Security</p>
                    <p>Terms of Services</p>
                    <p>Contact Us</p>
                </nav>
                <div className={style["social-media"]}>
                    <div className={style["twitter"]}></div>
                    <div className={style["linked"]}></div>
                    <div className={style["inst"]}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer