import React from "react";
import styles from "./styles.scss";
import MdReceipt from 'react-icons/lib/md/receipt'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      
      <div className={styles.sidebar_dropdown}>
        <a>메뉴</a>
      </div>
      <div className={styles.sidebar_inner}>
        <ul className={styles.navi}>
          <li className={styles.leftBtn} id="imhome">
            <MdReceipt size={40} color={'#000'} /> 아임홈
          </li>
          <li className={styles.leftBtn} id="dongwonMain">
          <MdReceipt size={40} color={'#000'}/> 동원 F&#38;B
          </li>

          <li className={styles.leftBtn} id="costcoMain">
          <MdReceipt size={40} color={'#000'}/>  코스트코
          </li>

          <li className={styles.leftBtn} id="wellMain">
          <MdReceipt size={40} color={'#000'}/>  웰푸드
          </li>

          <li className={styles.leftBtn} id="internetMain">
          <MdReceipt size={40} color={'#000'}/>  인터넷주문
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
