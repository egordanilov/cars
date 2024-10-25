import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { ArticlePageAsync } from "./pages/ArticlePage/ArticlePage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {Header} from "./shared/Header/Header";


const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
            <main className={`app ${theme}`}>
                <Header />
                {/*
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/about'}>О сайте</Link>
                */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<ArticlePageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </main>
    );
};

export default App;
