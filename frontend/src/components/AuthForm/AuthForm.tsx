import AuthInput from "../Input/AuthInput/AuthInput";
import Button from "../Input/Button/Button";
import { EnvelopeSimple, Lock, IdentificationCard, User, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";
import { register, login, UserModel, LoginRequest } from "../../services/authService";

import styles from "./AuthForm.module.css";

interface AuthFormProps {
    isLoginPage: boolean;
}

export default function AuthForm({ isLoginPage }: AuthFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        try {
            const userData: UserModel = { name, email, cpf, password };
            await register(userData);
            alert("Cadastro realizado com sucesso! Faça login para continuar.");
        } catch (error) {
            alert("Erro ao cadastrar!");
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const credentials: LoginRequest = { email, password };
            const response = await login(credentials);
            localStorage.setItem("token", response.token);
            alert("Login realizado com sucesso!");
        } catch (error) {
            alert("Email ou senha inválidos!");
        }
    };

    return (
        <div className={styles.authFormContainer}>
            <div className={styles.authFormContent}>
                <h1>{isLoginPage ? "Login" : "Cadastro"}</h1>
                {isLoginPage ? (
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleLogin}>
                        <AuthInput 
                            icon={<EnvelopeSimple size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <AuthInput 
                            icon={<Lock size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite a sua senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
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
                                type="submit"
                            />
                        </div>
                    </form>
                ) : (
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleRegister}>
                        <AuthInput 
                            icon={<User size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <AuthInput
                            icon={<EnvelopeSimple size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <AuthInput 
                            icon={<IdentificationCard size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite o seu CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                        <AuthInput 
                            icon={<Lock size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Digite a sua senha"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <AuthInput 
                            icon={<LockKey size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Confirme a sua senha"
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"Fazer Login"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                                type="button"
                            />
                            <Button
                                label={"Finalizar Cadastro"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                                type="submit"
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
