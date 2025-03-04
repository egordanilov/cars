import {Link} from "react-router-dom";
import classnames from "./Header.module.scss";

export function Header() {
    return (
        <header>
            <div className={classnames.logo_wrapper}>
                <Link to="/" className={classnames.logo_anchor_tag_wrapper}>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.0625 34.25L26.3125 27.0625L20.375 22.4375H27.625L30 15L32.3125 22.4375H39.625L33.6875 27.0625L35.875 34.25L30 29.8125L24.0625 34.25ZM15.25 57.5V38.5C13.375 36.5417 12.0312 34.3958 11.2188 32.0625C10.4062 29.7292 10 27.375 10 25C10 19.3333 11.9167 14.5833 15.75 10.75C19.5833 6.91667 24.3333 5 30 5C35.6667 5 40.4167 6.91667 44.25 10.75C48.0833 14.5833 50 19.3333 50 25C50 27.375 49.5938 29.7292 48.7812 32.0625C47.9688 34.3958 46.625 36.5417 44.75 38.5V57.5L30 52.5625L15.25 57.5ZM30 41.25C34.5417 41.25 38.3854 39.6771 41.5312 36.5312C44.6771 33.3854 46.25 29.5417 46.25 25C46.25 20.4583 44.6771 16.6146 41.5312 13.4688C38.3854 10.3229 34.5417 8.75 30 8.75C25.4583 8.75 21.6146 10.3229 18.4688 13.4688C15.3229 16.6146 13.75 20.4583 13.75 25C13.75 29.5417 15.3229 33.3854 18.4688 36.5312C21.6146 39.6771 25.4583 41.25 30 41.25ZM19 52.25L30 48.8125L41 52.25V41.5625C39.3333 42.7708 37.5417 43.6458 35.625 44.1875C33.7083 44.7292 31.8333 45 30 45C28.1667 45 26.2917 44.7292 24.375 44.1875C22.4583 43.6458 20.6667 42.7708 19 41.5625V52.25Z"
                            fill="#202020"/>
                    </svg>
                </Link>
            </div>
            <div className={classnames.header_heading}>ПОРТАЛ НОВОСТЕЙ</div>

        </header>
    )
}