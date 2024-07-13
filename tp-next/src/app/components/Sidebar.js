import Link from 'next/link';
import styles from '../styles/sidebar.module.css';


const Sidebar = () => {
    return (
    <div className={styles.sidebar}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/reservas">Reservas</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><Link href="/quienes-somos">Quienes somos</Link></li>
        </ul>
    </div>
);
};

export default Sidebar;