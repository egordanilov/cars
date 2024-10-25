import React, { useState, useEffect, useCallback } from 'react';

const InfiniteScrollComponent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://webapi.autodoc.ru/api/news/${page}/10`);
            const result = await response.json();
            setData(prevData => [...prevData, ...result.news]);
            setHasMore(result.news.length > 0);
            setLoading(false);
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleScroll = useCallback(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && hasMore && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    }, [loading, hasMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.title}<span>item</span></div>
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default InfiniteScrollComponent;