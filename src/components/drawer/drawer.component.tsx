import React from 'react';
import styles from './drawer.module.css';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={styles.drawerContainer}>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.content}>
          <button className={styles.closeButton} onClick={onClose}>
            <span className="visually-hidden">Close</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
