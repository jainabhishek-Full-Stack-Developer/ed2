import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styles from "./page.module.css";

const Studentpannelmodal = ({ children, setOpenModal, openModal }) => {
    return (
        <>
            <Modal open={openModal} onClose={() => setOpenModal(false)} center closeOnOverlayClick={false} closeOnEsc={false}>
                <div className={styles.customModalContainer}>
                    {children}
                </div>
            </Modal>
        </>
    )
}

export default Studentpannelmodal;
