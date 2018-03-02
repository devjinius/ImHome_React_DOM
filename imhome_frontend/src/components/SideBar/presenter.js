import React from "react";
import styles from "./styles.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>

      <div className={styles.sidebar_dropdown}>
        <a href="#">메뉴</a>
      </div>

      <div className={styles.sidebar_inner}>
        <ul className={styles.navi}>
          <li className={styles.leftBtn} id="imhome">
            <img
              src={require("images/ic_receipt_black_36dp_2x.png")}
              className={styles.receipt}
              alt="receipt"
            />
            <a href="#" onclick="javascript:dontSaveOrderConfirm('imhome', 'm')">
              아임 홈
            </a>
          </li>
          <li className={styles.leftBtn} id="dongwonMain">
            <img
              src={require("images/ic_receipt_black_36dp_2x.png")}
              className={styles.receipt}
              alt="receipt"
            />
            <a href="#" onclick="javascript:dontSaveOrderConfirm('dongwon', 'd')">
              동원 F&#38;B
            </a>
          </li>

          <li className={styles.leftBtn} id="costcoMain">
            <img
              src={require("images/ic_receipt_black_36dp_2x.png")}
              className={styles.receipt}
              alt="receipt"
            />
            <a href="#" onclick="javascript:dontSaveOrderConfirm('costco', 'c')">
              코스트코
            </a>
          </li>

          <li className={styles.leftBtn} id="wellMain">
            <img
              src={require("images/ic_receipt_black_36dp_2x.png")}
              className={styles.receipt}
              alt="receipt"
            />
            <a href="#" onclick="javascript:dontSaveOrderConfirm('well', 'w')">
              웰푸드
            </a>
          </li>

          <li className={styles.leftBtn} id="internetMain">
            <img
              src={require("images/ic_receipt_black_36dp_2x.png")}
              className={styles.receipt}
              alt="receipt"
            />
            <a href="#" onclick="javascript:leftBtnClick('internet', 'i')">
              인터넷주문
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
