import React from "react";
import styles from "./Pagination.module.scss";

// Pagination component
const Pagination = ({ page, isActive, setCurrentPage }) => {
  // Determine button style based on isActive prop
  const name = isActive ? `${styles.active} ${styles.button}` : styles.button;

  // Handler for button click
  const clickHandler = () => {
    setCurrentPage((currPage) => (currPage = page));
  };

  // Render component
  return (
    <>
      <button className={name} onClick={clickHandler}>
        {page}
      </button>
    </>
  );
};

export default Pagination;
