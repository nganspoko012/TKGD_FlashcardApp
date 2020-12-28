import React from "react";
import styles from "./CourseHeader.module.css";

const CourseHeader = ({
  tenHcPhn = "Tên học phần",
  sTh = "Số thẻ",
  danhGia = "Đánh giá",
  tacGi = "Tác giả"
}) => {
  return (
    <div className={styles.courseHeader}>
      <div className={styles.rectangle3} />
      <div className={styles.line2} />
      <p className={styles.tenHcPhn}>{tenHcPhn}</p>
      <div className={styles.line5} />
      <p className={styles.sTh}>{sTh}</p>
      <div className={styles.line5} />
      <p className={styles.danhGia}>{danhGia}</p>
      <div className={styles.line5} />
      <p className={styles.tacGi}>{tacGi}</p>
      <div className={styles.line5} />
      <div className={styles.optionsFrames} />
    </div>
  );
};

export default CourseHeader;