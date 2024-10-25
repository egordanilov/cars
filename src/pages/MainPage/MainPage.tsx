import React from 'react';
import InfiniteNewsFetch from "../../features/InfiniteNewsFetch/InfiniteNewsFetch";

const MainPage = () => {
    return (
        <section className="main-page-wrapper">
            <h1>Автомобильные новости</h1>
            <InfiniteNewsFetch />
        </section>
    );
};

export default MainPage;
