import Header from "../../../components/Header/Header";
import AuthForm from "../../../components/AuthForm/AuthForm";
import Footer from "../../../components/Footer/Footer";

import styles from "./Login.module.css";

export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <Header isTransparent />
            <div className={styles.authFormMargin}>
                <AuthForm isLoginPage />
            </div>
            <Footer />
        </div>
    );
}
