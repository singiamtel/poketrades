import { FunctionComponent, SyntheticEvent } from "react";
import styles from "./popup.module.css";

type PopupProps = {
	handleClose: (e: SyntheticEvent) => void;
};

const LoginPopup: FunctionComponent<PopupProps> = ({ handleClose }) => {
	return <div className={styles.popup_box} onClick={handleClose}>
		test
	</div>
}

export default LoginPopup
