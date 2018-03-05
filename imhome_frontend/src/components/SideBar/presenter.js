import React from "react";
import styles from "./styles.scss";
import FaBeer from 'react-icons/fa/beer';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      
      <div className={styles.sidebar_dropdown}>
        <a>메뉴</a>
      </div>
      <h3> Lets go for a <FaBeer />? </h3>
      <div className={styles.sidebar_inner}>
        <ul className={styles.navi}>
          <li className={styles.leftBtn} id="imhome">
            
          </li>
          <li className={styles.leftBtn} id="dongwonMain">
              동원 F&#38;B
          </li>

          <li className={styles.leftBtn} id="costcoMain">
              코스트코
          </li>

          <li className={styles.leftBtn} id="wellMain">
              웰푸드
          </li>

          <li className={styles.leftBtn} id="internetMain">
              인터넷주문
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
