import cn from './NewsListItem.module.scss';
import {dateFormatter} from "../features/InfiniteNewsFetch/utils/dateFormatter";
import {Link} from "react-router-dom";
import {trimString} from "./utils/trimUrlString";

interface NewsListItemProps {
    title: string;
    url: string;
    titleImageUrl: string;
    publishedDate: string;
}

const NewsListItem = (props: NewsListItemProps) => {
    return (
        <Link to={trimString(props.url)} state={props}>
            <div className={cn.newsCardWrapper}>
                <img src={props.titleImageUrl} alt={props.title} className={cn.image}/>
                <div className={cn.date_wrapper}>
                    {dateFormatter(props.publishedDate)}
                </div>
                <p className={cn.card_title}>{props.title}</p>
            </div>
        </Link>
    );
};

export default NewsListItem;