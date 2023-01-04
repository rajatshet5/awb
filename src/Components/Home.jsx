import styles from "./home.module.css";

export function Home() {
    return <div style={{ backgroundImage: "url('/batman.JPG')" }} className={styles.home}>
        {/* <img src="batman.JPG"></img> */}
        <div className={styles.ph}></div>
        <div className={styles.igLogoDiv}>
            <img className={styles.igLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"/>
            <div className={styles.gap}></div>
            <h3 className={styles.awb}>/ @aWeirdBloke</h3>
        </div>
        <p className={styles.note}>Site under construction...</p>


    </div>
}