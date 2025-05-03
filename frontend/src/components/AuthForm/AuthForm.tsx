import AuthInput from "../Input/AuthInput/AuthInput";
import Button from "../Input/Button/Button";
import { EnvelopeSimple, Lock, IdentificationCard, User, LockKey } from "@phosphor-icons/react";

import styles from "./AuthForm.module.css";

interface AuthFormProps {
    isLoginPage: boolean;
}

export default function AuthForm({ isLoginPage }: AuthFormProps) {
    return (
        <div className={styles.authFormContainer}>
            <div className={styles.authFormContent}>
                <h1>{isLoginPage ? "Login" : "Cadastro"}</h1>
                {isLoginPage ? (
                    <>
                        <AuthInput 
                            icon={<EnvelopeSimple size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu email" 
                        />
                        <AuthInput 
                            icon={<Lock size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite a sua senha" 
                        />
                        <a className={styles.authFormForgotPassword} href="#">Esqueci minha senha...</a>
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"CRIAR CONTA"}
                                isTransparent={true}
                                color="--misty-milk"
                                fontWeight="600"
                            />
                            <Button
                                label={"Confirmar"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <AuthInput 
                            icon={<User size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu nome" 
                        />
                        <AuthInput
                            icon={<EnvelopeSimple size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu email" 
                        />
                        <AuthInput 
                            icon={<IdentificationCard size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu CPF" 
                        />
                        <AuthInput 
                            icon={<Lock size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite a sua senha" 
                        />
                        <AuthInput 
                            icon={<LockKey size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Confirme a sua senha" 
                        />
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"Fazer Login"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                            />
                            <Button
                                label={"Finalizar Cadastro"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
