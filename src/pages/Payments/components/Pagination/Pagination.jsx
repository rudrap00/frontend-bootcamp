import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ page, isActive, setCurrentPage }) => {
  const name = isActive ? styles.active + " " + styles.button : styles.button;

  const clickHandler = () => {
    setCurrentPage((currPage) => (currPage = page));
  };

  return (
    <>
      <button className={name} onClick={clickHandler}>
        {page}
      </button>
    </>
  );
};

export default Pagination;
