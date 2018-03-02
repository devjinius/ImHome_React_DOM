import React from "react";
import styles from "./styles.css";

const Center = () => {
  return (
    <div className={styles.mainbar}>
      <div className={styles.page_head}>
        <h2 id="pageTitle" className={styles.pull_left}>
          IMHOME<i className={styles.material_icons}>receipt</i>
        </h2>
      </div>
      <div className={styles.matter}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div >
              <div className={styles.widget_head}>
                <div className={styles.pull_left}>
                  Food Menu
                </div>
              </div>
              <div id="pMenu" className={styles.padd}>
                <div className={styles.pRowMenu}>
                  <div id="" className={[styles.pButton, styles.seleted, styles.open]}>
                    <b />
                    <span className={styles.menuRight}>
                      <i className={[styles.fa, styles.fa_chevron_down, styles.fa_2x]} />
                    </span>
                    <span className={styles.menuSubTitle}>
                      survived not only five centuries but the leap
                    </span>
                  </div>

                  <div id="" className="pButton">
                    <b />
                    <span className="menuRight">
                      <i className="fa fa-chevron-down fa-2x" />
                    </span>
                    <span className="menuSubTitle">
                      survived not only five centuries but the leap
                    </span>
                  </div>

                  <table className="pTable">
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

            <div className="col-sm-12 col-md-6 ">
              <div className="orderContainer">
                <div className="order">
                  <div className="orderHead">
                    <div className="orderTitle">Your Order</div>
                    <div className="orderProduct">product</div>
                    <div className="orderPrice">total</div>
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

            <form
              id="excelForm"
              name="excelForm"
              method="GET"
              action="ExcelPoi.imhome"
            >
              <input type="text" name="fileName" />
              <input type="submit" value="xls파일로 받기" />
            </form>

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
        </div>
      </div>
    </div>
  );
};

export default Center;
