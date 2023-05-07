import { useState } from 'react';
import styles from './modal.module.css';

export default function Modal({
  title,
  text,
  buttonText,
  onClose,
}: {
  title: string;
  text: string;
  buttonText: string;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer}>
          <dialog className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>{title}</h2>
              <p>{text}</p>
              <button className={styles.modalButton} onClick={handleClose}>
                {buttonText}
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
