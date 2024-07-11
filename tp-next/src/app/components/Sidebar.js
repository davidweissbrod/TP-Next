import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => {
    return (
    <div className={styles.sidebar}>
        <h2>Navegacion</h2>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="./reservas">Reservas</Link></li>
            <li><Link href="/Contacto">Contacto</Link></li>
            <li><Link href="/quienes-somos">Quienes somos</Link></li>
        </ul>
    </div>
);
};

export default Sidebar;