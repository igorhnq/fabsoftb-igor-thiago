import Header from "../../../components/Header/Header";
import AuthForm from "../../../components/AuthForm/AuthForm";
import Footer from "../../../components/Footer/Footer";

import styles from "./Register.module.css";

export default function Register() {
    return (
        <div className={styles.registerContainer}>
            <Header isTransparent />
            <div className={styles.authFormMargin}>
                <AuthForm isLoginPage={false} />
            </div>
            <Footer />
        </div>
    );
}
