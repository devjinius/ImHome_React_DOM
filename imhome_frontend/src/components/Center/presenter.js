import React from "react";
import styles from "./styles.scss";

const Center = props => {
  return (
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
                  <col width="20%" />
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
                    <td className="pMount">
                      <div className="upDownDiv">
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                        >
                          -
                        </span>
                        <input
                          className="${mainMenu.fCode}_OrderNum"
                          type="number"
                          placeholder="0"
                          max="${fRestMount}"
                          onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                        />
                        <span
                          className="upDownBtn"
                          onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                        >
                          +
                        </span>
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
            <div className={styles.orderTitle}>Your Order</div>
            <div className={styles.order}>
              <div className={styles.orderHead}>
                <div className={styles.orderProduct}>product</div>
                <div className={styles.orderPrice}>total</div>
              </div>
              <div className={styles.productList}>
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
              <div className={styles.orderFooter}>
                <div>
                  <button className={styles.orderBtn}>주문 저장</button>
                </div>
                <div>
                  <button className={styles.orderBtn}>주문 하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>전체 메뉴 보기</button>
      </div>

      <div className={styles.popUp}>
        <span className="popUp__close" />
        <h2 className="popUp__title">Food Menu</h2>
        <div className="popUp__content">
          <table className="popUp__table">
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
            <tbody id="popUpTbody">
              <tr className="List_${mainMenu.fCode}">
                <td />
                <td />
                <td />
                <td />
                <td className="pMount">
                  <div className="upDownDiv">
                    <span
                      className="upDownBtn"
                      onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                    >
                      -
                    </span>
                    <input
                      className="${mainMenu.fCode}_OrderNum"
                      type="number"
                      placeholder="0"
                      max="${fRestMount}"
                      onkeyup="javascript:pressNumber2(this,'${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                    />
                    <span
                      className="upDownBtn"
                      onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                    >
                      +
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Center;
