import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

const ArticlePage = () => {
    const {  newsUrl } = useParams<{ newsUrl: string }>();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    let location = useLocation();
    let fullFetchUrl = `https://webapi.autodoc.ru/api/news/item/` + JSON.parse(JSON.stringify(location.state)).url

    useEffect(() => {
        fetch(fullFetchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // or response.text() if you expect a plain text response
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error.toString());
            });
    }, [fullFetchUrl]);

    return <div>
        {error && <p>Error: {error}</p>}
        {data ? (
            <div>
                <h1>{data.title}</h1>
                <p>{data.publishedDate}</p>
                <img src={data.titleImageUrl} alt={data.title} />
                <p>{[data.text]}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
};

export default ArticlePage;
