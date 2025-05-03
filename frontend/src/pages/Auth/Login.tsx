import Header from "../../components/Header/Header";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";

export default function Login() {
    return (
        <div>
            <Header isTransparent />
            <AuthForm isLoginPage={false} />
        </div>
    );
}
