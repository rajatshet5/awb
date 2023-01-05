import styles from "./home.module.css";

export function Home() {
    return <div style={{ backgroundImage: "url('/batman.JPG')" }} className={styles.home}>
        {/* <img src="batman.JPG"></img> */}
        <div className={styles.ph}></div>
        <div className={styles.igLogoDiv}>
            <img className={styles.igLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
            <div className={styles.gap}></div>
            <p className={styles.awb}>/ @aWeirdBloke</p>
        </div>
        <div className={styles.sub}>
            <div>
                <p>
                    Moments
                </p>
            </div>
            <h3>
                |
            </h3>
            <div>
                <p>
                   Videos
                </p>
            </div>
            <h3>
                |
            </h3>
            <div>
                <p>
                    Edits
                </p>
            </div>
            <h3>
                |
            </h3>
            <div>
                <p>
                    Life
                </p>
            </div>
        </div>
        <p className={styles.note}>Site under construction...</p>
    </div>
}