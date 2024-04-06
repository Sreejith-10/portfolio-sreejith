import {motion} from "framer-motion";
import "../App.css";

const ToolTip = ({text, show}: {text: string; show: boolean}) => {
	return (
		<motion.span
			className="tool-tip"
			variants={{
				hide: {
					opacity: 0,
					scale: 0,
					translateY: 20,
				},
				pop: {
					opacity: 1,
					scale: 1,
					translateY: 0,
				},
			}}
			initial="hide"
			animate={show ? "pop" : "hide"}>
			{text}
		</motion.span>
	);
};

export default ToolTip;
