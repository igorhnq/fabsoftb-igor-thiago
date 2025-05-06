import AuthInput from "../Input/AuthInput/AuthInput";
import Button from "../Input/Button/Button";
import { EnvelopeSimple, Lock, IdentificationCard, User, LockKey } from "@phosphor-icons/react";
import React, { useState } from "react";

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
            const response = await fetch("http://localhost:8080/api/v1/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, cpf, password })
            });
            if (response.ok) {
                alert("Cadastro realizado com sucesso! Faça login para continuar.");
            } else {
                const error = await response.text();
                alert("Erro ao cadastrar: " + error);
            }
        } catch (error) {
            alert("Erro ao cadastrar!");
        }
    };

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
