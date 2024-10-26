import React, {useState} from 'react';
import InfiniteNewsFetch from "../../features/InfiniteNewsFetch/InfiniteNewsFetch";
import Modal from "../../shared/Modal/Modal";

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="main-page-wrapper">
            <h1>Автомобильные новости</h1>
            <button onClick={handleOpenModal}>Open Modal</button>
            <Modal show={showModal} onClose={handleCloseModal}>
                <h1>Modal Content</h1>
                <p>This is an example modal.</p>
            </Modal>
            <InfiniteNewsFetch/>
        </section>
    );
};

export default MainPage;
