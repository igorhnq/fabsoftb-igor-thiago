import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Input/Button/Button";
import OrderCard from "../../components/Card/OrderCard/OrderCard";
import Footer from "../../components/Footer/Footer";
import { getMyOrders, OrderModel } from "../../services/orderService";
import { getCurrentUser, UserModel, updateUserProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

import styles from "./Profile.module.css";
import fallbackImage from "../../assets/not-found-icon.svg";

import jolyne from "../../assets/jolyne-avatar.png";
import ramonaFlowers from "../../assets/ramona-flowers-avatar.png";
import gon from "../../assets/gon-avatar.jpg";
import casca from "../../assets/casca-avatar.jpg";
import sheep from "../../assets/sheep-avatar.jpg";

const availableAvatars = [
    { id: 'jolyne', src: jolyne },
    { id: 'ramonaFlowers', src: ramonaFlowers },
    { id: 'gon', src: gon },
    { id: 'casca', src: casca },
    { id: 'sheep', src: sheep }
];

const getAvatarSrc = (avatarId?: string) => {
    if (!avatarId) return fallbackImage;
    const found = availableAvatars.find(a => a.id === avatarId);
    return found ? found.src : fallbackImage;
};

export default function Profile() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<OrderModel[]>([]);
    const [user, setUser] = useState<UserModel | null>(null);
    const [description, setDescription] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/register');
            return;
        }

        const fetchData = async () => {
            try {
                const [ordersData, userData] = await Promise.all([
                    getMyOrders(),
                    getCurrentUser()
                ]);
                setOrders(ordersData);
                setUser(userData);
                setDescription(userData.description || "");
                setProfileImageUrl(userData.profileImageUrl || "");
            } catch (error: any) {
                console.error('Erro ao buscar dados:', error);
                if (error.response?.status === 401) {
                    navigate('/register');
                }
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        Swal.fire({
            title: "Deseja realmente sair?",
            background: "var(--dusty-matcha)",
            confirmButtonColor: "var(--matcha-leaf)",
            cancelButtonColor: "var(--matcha-leaf)",
            color: "var(--black-bean)",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sim, sair",
            cancelButtonText: "Não, ficar",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        });
    };

    const handleSaveProfile = async () => {
        try {
            const updatedUser = await updateUserProfile({
                description,
                profileImageUrl
            });
            setUser(updatedUser);
            
            Swal.fire({
                title: "Sucesso!",
                text: "Perfil salvo com sucesso!",
                confirmButtonColor: "var(--matcha-leaf)",
                background: "var(--dusty-matcha)",
                color: "var(--black-bean)",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
        } catch (error) {
            console.error('Erro ao salvar perfil:', error);
            Swal.fire({
                title: "Erro!",
                text: "Erro ao salvar perfil. Tente novamente.",
                icon: "error",
                background: "var(--dusty-matcha)",
                confirmButtonColor: "var(--matcha-leaf)",
                color: "var(--black-bean)",
            });
        }
    };

    return (
        <>
            <Header />
            <h2 className={styles.profileTitle}>Seu perfil</h2>
            <div className={styles.profileContainer}>
                <div className={styles.profileContent}>
                    <img 
                        src={getAvatarSrc(user?.profileImageUrl)}
                        alt="Foto de perfil"
                        className={styles.profileImage}
                        onError={(e) => { e.currentTarget.src = fallbackImage; }}
                    />
                    <h2>{user?.name || 'Carregando...'}</h2>
                </div>
                <Button
                    label="Sair"
                    backgroundColor="--misty-milk"
                    color="--black-bean"
                    fontWeight="600"
                    onClick={handleLogout}
                />
                <div className={styles.avatarSelector}>
                    <p>Escolha seu avatar:</p>
                    <div className={styles.avatarGrid}>
                        {availableAvatars.map(avatar => (
                            <img
                                key={avatar.id}
                                src={avatar.src}
                                alt={`Avatar ${avatar.id}`}
                                className={`${styles.avatarOption} ${profileImageUrl === avatar.id ? styles.selectedAvatar : ''}`}
                                onClick={() => setProfileImageUrl(avatar.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.profileDescription}>
                    <textarea 
                        className={styles.profileDescriptionTextarea} 
                        placeholder="Adicione uma descrição sobre você!"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <Button
                    label="Salvar"
                    backgroundColor="--misty-milk"
                    color="--black-bean"
                    fontWeight="600"
                    onClick={handleSaveProfile}
                />
                <h2 className={styles.purchaseHistoryTitle}>Histórico de pedidos</h2>
                {orders.length === 0 ? (
                    <div className={styles.noOrders}>
                        <h2>Nenhum pedido encontrado</h2>
                    </div>
                ) : (
                    <div className={styles.purchaseHistoryContainer}>
                        {orders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}