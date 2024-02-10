import "../Background.css";

const HeroBg = () => {
	return (
		<>
			<div
				id="ht"
				style={{
					width: "100%",
					height: "100vh",
					position: "absolute",
					top: "0",
					left: "0",
				}}>
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
			</div>
		</>
	);
};

export default HeroBg;
