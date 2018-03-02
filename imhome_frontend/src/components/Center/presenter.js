import React from "react";
import styles from "./styles.scss";

const Center = () => {
  return (
    <div className={styles.mainbar}>
      <div className={styles.main_head_container}>
        <span className={styles.main_head} >IM HOME</span>
      </div>
      <div className={styles.container}>
        <div className={styles.left_container}>
        <div className={styles.menu}>
          <div className={styles.menu_list}>
            <div className={styles.widget_head}>
              <span className={styles.menuTitle}>
                제품 이름
              </span>
              <span className={styles.menuSubTitle}>
                설명설명설명설명설명설명설설명설명설명설명설명설명설설명설명설명설명설명설명설
              </span>
            </div>
            <div className={styles.menu_button}>
              <span>
                ▼
              </span>
            </div>
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
                    <td id="${mainMenu.fCode}_Name" />
                    <td />
                    <td id="${mainMenu.fCode}_Cost" />
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
      </div>

      <div className={styles.right_container}>
        <div className={styles.orderContainer}>
          <div className={styles.order}>
            <div className={styles.orderHead}>
              <div className={styles.orderTitle}>Your Order</div>
              <div className={styles.orderProduct}>product</div>
              <div className={styles.orderPrice}>total</div>
            </div>
            <div className="productList">
              <ul id="orderChart" />
            </div>
            <div className="orderTotal">
              <div className="orderProduct">ORDER TOTAL</div>
              <div id="totalPrice" className="orderPrice">
                0
                    </div>
            </div>
            <div className="orderFooter">
              <div className="col-sm-6 col-md-6">
                <button
                  className="orderBtn"
                  onclick="javascript:saveOrderList()"
                >
                  주문 저장
                      </button>
              </div>
              <div className="col-sm-6 col-md-6">
                <button
                  className="orderBtn"
                  onclick="javascript:saveOrderList()"
                >
                  주문 하기
                      </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <button className="popUp__trigger">전체 메뉴 보기</button>
      </div>

      <div className="popUp">
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
