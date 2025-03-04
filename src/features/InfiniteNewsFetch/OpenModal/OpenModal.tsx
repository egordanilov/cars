import classnames from './OpenModal.module.scss';

export const OpenModal = ({openModal}: {openModal: () => void}) => {
    return (
        <div className={classnames.plus_wrapper} role="button" tabIndex={-1} onClick={openModal}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="#202020"/>
                <path
                    d="M29 19C29 18.4477 29.4477 18 30 18C30.5523 18 31 18.4477 31 19V41C31 41.5523 30.5523 42 30 42C29.4477 42 29 41.5523 29 41V19Z"
                    fill="white"/>
                <path
                    d="M19 31C18.4477 31 18 30.5523 18 30C18 29.4477 18.4477 29 19 29L41 29C41.5523 29 42 29.4477 42 30C42 30.5523 41.5523 31 41 31L19 31Z"
                    fill="white"/>
            </svg>
        </div>
    )
}
