import styles from "./Pager.module.css";
//
const Pager = ({ nextPage, prevPage }) => {
    return (
        <div className={styles.Pager}>
            <button className={styles.PagerButton}
                onClick={prevPage}>
                Prev Page
            </button>
            <button className={styles.PagerButton}
                onClick={nextPage}>
                Next Page
            </button>
        </div>
    )
}

export default Pager