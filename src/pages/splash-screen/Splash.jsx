import styles from "./Splash.module.css";

const SplashScreen = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.logo}
				src="/kubera-logo.svg"
				alt="Kubera Link Logo"
			/>
			<p className={styles.info}>Coming Soon</p>
		</div>
	);
};

export default SplashScreen;
