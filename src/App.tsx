import React, { Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import { ArticlePageAsync } from "./pages/ArticlePage/ArticlePage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {Header} from "./shared/Header/Header";
import {DynamicPageAsync} from "./pages/DynamicPage/DynamicPage.async";


const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
            <main className={`app ${theme}`}>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={'/'} element={<MainPageAsync/>}/>
                            <Route path={'/:newsUrl'} element={<ArticlePageAsync/>}/>
                            <Route path={'/:first/:second'} element={<DynamicPageAsync /> } />
                        </Routes>
                </Suspense>
            </main>
    );
};

export default App;
