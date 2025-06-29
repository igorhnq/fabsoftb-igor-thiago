import AuthInput from "../Input/AuthInput/AuthInput";
import Button from "../Input/Button/Button";
import { EnvelopeSimple, Lock, IdentificationCard, User, LockKey, Phone, FilePdf, MapPin } from "@phosphor-icons/react";
import React, { useState } from "react";
import { register, login, UserModel, LoginRequest } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'

import styles from "./AuthForm.module.css";

interface AuthFormProps {
    isLoginPage?: boolean;
    isJobsPage?: boolean;
    isFranchisorPage?: boolean;
}

export default function AuthForm({ isLoginPage, isJobsPage = false, isFranchisorPage = false }: AuthFormProps) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            Swal.fire({
                icon: "error",
                title: "Nome é obrigatório!",
                text: "Por favor, preencha o campo nome.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!email.trim()) {
            Swal.fire({
                icon: "error",
                title: "Email é obrigatório!",
                text: "Por favor, preencha o campo email.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Email inválido!",
                text: "Por favor, insira um email válido.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!password.trim()) {
            Swal.fire({
                icon: "error",
                title: "Senha é obrigatória!",
                text: "Por favor, preencha o campo senha.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (password.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Senha muito curta!",
                text: "A senha deve ter pelo menos 6 caracteres.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "As senhas não coincidem!",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        try {
            const userData: UserModel = { name, email, cpf, password };
            await register(userData);
            Swal.fire({
                icon: "success",
                title: "Cadastro realizado com sucesso! Faça login para continuar.",
                showConfirmButton: true,
                confirmButtonText: "Ir para a página de login",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        } catch (error: any) {
            let errorMessage = "Erro ao cadastrar!";
            
            if (error.response && error.response.data) {
                const backendErrors = error.response.data;
                if (typeof backendErrors === 'object') {
                    const errorFields = Object.keys(backendErrors);
                    if (errorFields.length > 0) {
                        errorMessage = backendErrors[errorFields[0]];
                    }
                } else if (typeof backendErrors === 'string') {
                    errorMessage = backendErrors;
                }
            }
            
            Swal.fire({
                icon: "error",
                title: errorMessage,
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
        }
    };

    const handleJobsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            Swal.fire({
                icon: "error",
                title: "Nome é obrigatório!",
                text: "Por favor, preencha o campo nome.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!email.trim()) {
            Swal.fire({
                icon: "error",
                title: "Email é obrigatório!",
                text: "Por favor, preencha o campo email.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Email inválido!",
                text: "Por favor, insira um email válido.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!cpf.trim()) {
            Swal.fire({
                icon: "error",
                title: "Telefone é obrigatório!",
                text: "Por favor, preencha o campo telefone.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!password.trim()) {
            Swal.fire({
                icon: "error",
                title: "Currículo é obrigatório!",
                text: "Por favor, preencha o campo currículo.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        Swal.fire({
            icon: "success",
            title: "Currículo enviado com sucesso!",
            text: "Entraremos em contato em breve.",
            background: "var(--dusty-matcha)",
            confirmButtonColor: "var(--matcha-leaf)",
            color: "var(--black-bean)",
        });
    };

    const handleFranchisorSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            Swal.fire({
                icon: "error",
                title: "Nome é obrigatório!",
                text: "Por favor, preencha o campo nome.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!email.trim()) {
            Swal.fire({
                icon: "error",
                title: "Email é obrigatório!",
                text: "Por favor, preencha o campo email.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Email inválido!",
                text: "Por favor, insira um email válido.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!cpf.trim()) {
            Swal.fire({
                icon: "error",
                title: "Telefone é obrigatório!",
                text: "Por favor, preencha o campo telefone.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!password.trim()) {
            Swal.fire({
                icon: "error",
                title: "Mensagem é obrigatória!",
                text: "Por favor, preencha o campo mensagem.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        Swal.fire({
            icon: "success",
            title: "Solicitação enviada com sucesso!",
            text: "Entraremos em contato em breve para discutir sobre a franquia.",
            background: "var(--dusty-matcha)",
            confirmButtonColor: "var(--matcha-leaf)",
            color: "var(--black-bean)",
        });
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            Swal.fire({
                icon: "error",
                title: "Email é obrigatório!",
                text: "Por favor, preencha o campo email.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        if (!password.trim()) {
            Swal.fire({
                icon: "error",
                title: "Senha é obrigatória!",
                text: "Por favor, preencha o campo senha.",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
            return;
        }
        
        try {
            const credentials: LoginRequest = { email, password };
            const response = await login(credentials);
            localStorage.setItem("token", response.token);
            Swal.fire({
                icon: "success",
                title: "Login realizado com sucesso!",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
                background: "var(--dusty-matcha)",
                showConfirmButton: true,
                confirmButtonText: "Ir para a página de produtos",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/products');
                }
            });
        } catch (error: any) {
            let errorMessage = "Email ou senha inválidos!";
            
            if (error.response && error.response.data) {
                const backendError = error.response.data;
                if (typeof backendError === 'string') {
                    errorMessage = backendError;
                }
            }
            
            Swal.fire({
                icon: "error",
                title: errorMessage,
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
        }
    };

    const handleNavigateToRegister = () => {
        navigate('/register');
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.authFormContainer}>
            <div className={styles.authFormContent}>
                <h1>
                    {isLoginPage ? "Login" : 
                     isJobsPage ? "Envie o seu currículo!" : 
                     isFranchisorPage ? "Seja um franquiador!" : 
                     "Cadastro"}
                </h1>
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
                        <Link to="/not-found" className={styles.authFormForgotPassword}>Esqueci minha senha...</Link>
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"CRIAR CONTA"}
                                isTransparent={true}
                                color="--misty-milk"
                                fontWeight="600"
                                onClick={handleNavigateToRegister}
                                type="button"
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
                ) : isJobsPage ? (
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleJobsSubmit}>
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
                            icon={<Phone size={30} weight="fill" color="var(--black-bean)" />} 
                            placeholder="Digite o seu telefone"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                        <AuthInput 
                            icon={<FilePdf size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Envie o seu currículo em PDF"
                            type="text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"Enviar"}
                                backgroundColor="--herbal-cream"
                                color="--black-bean"
                                fontWeight="600"
                                type="submit"
                            />
                        </div>
                    </form>
                ) : isFranchisorPage ? (
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleFranchisorSubmit}>
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
                            icon={<Phone size={30} weight="fill" color="var(--black-bean)" />} 
                            placeholder="Digite o seu telefone"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                        <AuthInput 
                            icon={<MapPin size={30} weight="bold" color="var(--black-bean)" />} 
                            placeholder="Localização que deseja franquiar"
                            type="text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className={styles.authFormButtonContainer}>
                            <Button
                                label={"Enviar"}
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
                                onClick={handleNavigateToLogin}
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
