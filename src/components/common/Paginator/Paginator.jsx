import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    let currentSetPage = Math.ceil(props.currentPage/props.portionSize);
    let leftPage = currentSetPage * props.pageSize + 1 - props.pageSize;
    let rightPage = currentSetPage * props.pageSize;

     let pages = [];
     for (let i = leftPage; i <= rightPage; i++) {
         pages.push(i);
     }

    const next = () => {
         let nextPage = props.currentPage + props.portionSize;
         if (nextPage > props.totalItemsCount)
             nextPage = props.totalItemsCount;
        props.onPageChanged(nextPage);
    }

    const prev = () => {
        let nextPage = props.currentPage - props.portionSize;
        if (nextPage < 1)
            nextPage = 1;
        props.onPageChanged(nextPage);
    }

    return (
            <div className={styles.paginator}>
                <button onClick={prev}>PREV</button>
                {pages.map((page) => {
                        return <span onClick={() => {
                            props.onPageChanged(page)
                        }} className={props.currentPage === page && styles.selectedPage}> {page} </span>
                    }
                )}
                <button onClick={next}>NEXT</button>
            </div>
    )
}

export default Paginator;