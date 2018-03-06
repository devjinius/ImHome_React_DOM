import React from "react";
import styles from "./styles.scss";
import MdReceipt from "react-icons/lib/md/receipt";

const SideBar = props => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_dropdown} onClick={props.showMenu}>
        <span lang={"ko"}>메뉴</span>
      </div>
      <div id={"sidebarMenu"} className={styles.sidebar_inner}>
        <ul className={styles.navi}>
          <li className={styles.leftBtn} id="imhome">
            <MdReceipt size={35}/> 아임홈
          </li>
          <li className={styles.leftBtn} id="dongwonMain">
            <MdReceipt size={35}/> 동원 F&#38;B
          </li>

          <li className={styles.leftBtn} id="costcoMain">
            <MdReceipt size={35}/> 코스트코
          </li>

          <li className={styles.leftBtn} id="wellMain">
            <MdReceipt size={35}/> 웰푸드
          </li>

          <li className={styles.leftBtn} id="internetMain">
            <MdReceipt size={35}  /> 인터넷주문
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
