import React from "react";
import styles from "./styles.scss";
import MdClose from "react-icons/lib/md/close";
import SideBar from "../SideBar";

const Center = props => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.sideBar}>
        <SideBar key={2} className={styles.sideBar} />
      </div>
      <div className={styles.mainbar}>
        <div className={styles.main_head_container}>
          <span lang="en" className={styles.main_head}>
            Food Menu
          </span>
        </div>
        <div className={styles.container}>
          <div id={"pMenu"} className={styles.left_container}>
            <div className={styles.menu}>
              <div className={styles.menu_list} onClick={props.showTable}>
                <div className={styles.widget_head}>
                  <span lang="ko" className={styles.menuTitle}>
                    에스프레소
                  </span>
                  <span lang="ko" className={styles.menuSubTitle}>
                    설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
                  </span>
                </div>
                <div className={styles.menu_button}>▼</div>
              </div>
              <div className={styles.menu_table}>
                <table>
                  <colgroup>
                    <col width="*" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="15%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>단위</th>
                      <th>가격</th>
                      <th>재고량</th>
                      <th>주문</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu_list} onClick={props.showTable}>
                <div className={styles.widget_head}>
                  <span lang="ko" className={styles.menuTitle}>
                    에스프레소
                  </span>
                  <span lang="ko" className={styles.menuSubTitle}>
                    설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
                  </span>
                </div>
                <div className={styles.menu_button}>▼</div>
              </div>
              <div className={styles.menu_table}>
                <table>
                  <colgroup>
                    <col width="*" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="20%" />
                    <col width="20%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>단위</th>
                      <th>가격</th>
                      <th>재고량</th>
                      <th>주문</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu_list} onClick={props.showTable}>
                <div className={styles.widget_head}>
                  <span lang="ko" className={styles.menuTitle}>
                    에스프레소
                  </span>
                  <span lang="ko" className={styles.menuSubTitle}>
                    설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
                  </span>
                </div>
                <div className={styles.menu_button}>▼</div>
              </div>
              <div className={styles.menu_table}>
                <table>
                  <colgroup>
                    <col width="*" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="20%" />
                    <col width="20%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>단위</th>
                      <th>가격</th>
                      <th>재고량</th>
                      <th>주문</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu_list} onClick={props.showTable}>
                <div className={styles.widget_head}>
                  <span lang="ko" className={styles.menuTitle}>
                    에스프레소
                  </span>
                  <span lang="ko" className={styles.menuSubTitle}>
                    설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
                  </span>
                </div>
                <div className={styles.menu_button}>▼</div>
              </div>
              <div className={styles.menu_table}>
                <table>
                  <colgroup>
                    <col width="*" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="20%" />
                    <col width="20%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>단위</th>
                      <th>가격</th>
                      <th>재고량</th>
                      <th>주문</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu_list} onClick={props.showTable}>
                <div className={styles.widget_head}>
                  <span lang="ko" className={styles.menuTitle}>
                    에스프레소
                  </span>
                  <span lang="ko" className={styles.menuSubTitle}>
                    설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
                  </span>
                </div>
                <div className={styles.menu_button}>▼</div>
              </div>
              <div className={styles.menu_table}>
                <table>
                  <colgroup>
                    <col width="*" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="20%" />
                    <col width="20%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>품목</th>
                      <th>단위</th>
                      <th>가격</th>
                      <th>재고량</th>
                      <th>주문</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="List_${mainMenu.fCode}">
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Name">
                        <span>asdf</span>
                      </td>
                      <td id="${mainMenu.fCode}_Cost">
                        <span>asdf</span>
                      </td>
                      <td>
                        <div className={styles.upDownDiv}>
                          <span className={styles.upDownBtn}>-</span>
                          <input
                            className={styles.OrderNum}
                            type="number"
                            placeholder="0"
                          />
                          <span className={styles.upUpBtn}>+</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            <div className={styles.orderContainer}>
              <span lang={"en"} className={styles.orderTitle}>
                Your Order
              </span>
              <div className={styles.order}>
                <div className={styles.orderHead}>
                  <div className={styles.orderProduct}>product</div>
                  <div className={styles.orderPrice}>total</div>
                </div>
                <div className={styles.productList}>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>
                      saasdfasdfsadfsdfsdfasdfdf
                    </li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                  <ul>
                    <li className={styles.productName}>sadf</li>
                    <li className={styles.productCost}>sadf</li>
                  </ul>
                </div>
                <div className={styles.orderTotal}>
                  <div className={styles.orderProduct}>ORDER TOTAL</div>
                  <div className={styles.orderPrice}>0</div>
                </div>
                <div className={styles.orderbutton}>
                  <button className={styles.orderbuttonDetail}>
                    주문 저장
                  </button>
                  <button className={styles.orderbuttonDetail}>
                    주문 하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className={styles.allProductBtn} onClick={props.showPopup}>
            전체 메뉴 보기
          </button>
        </div>

        <div id={"popUp"} className={styles.popUp}>
          <MdClose
            size={50}
            className={styles.popUp__close}
            onClick={props.showPopup}
          />
          <span lang={"en"} className={styles.popUp__title}>
            Food Menu
          </span>
          <table className={styles.popUp__titleTable}>
            <colgroup>
              <col width="*" />
              <col width="15%" />
              <col width="15%" />
              <col width="20%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>품목</th>
                <th>단위</th>
                <th>가격</th>
                <th>재고량</th>
                <th>주문</th>
              </tr>
            </thead>
          </table>
          <div className={styles.popUp__content}>
            <table className={styles.popUp__contentTable}>
              <colgroup>
                <col width="*" />
                <col width="15%" />
                <col width="15%" />
                <col width="20%" />
                <col width="25%" />
              </colgroup>
              <tbody>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
                <tr className={styles.menuList}>
                  <td>asd</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>asdf</td>
                  <td>
                    <div className={styles.upDownDiv}>
                      <span className={styles.upDownBtn}>-</span>
                      <input
                        className={styles.OrderNum}
                        type="number"
                        placeholder="0"
                      />
                      <span className={styles.upUpBtn}>+</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
