import React from "react";
import styles from "./styles.scss";

const Navigator = (props) => {
  return (
	<div className={styles.navbar}>
			<div className={styles.header}>
				<a href="#" className={styles.navbar_brand}>I'm 
					<span> Home</span>
				</a>
			</div>
			<div className={styles.menu_list}>
				<ul className={styles.nav, styles.navbar_nav, styles.navbar_right}>
					<li>
						<a href="#">
							주문재고관리
						</a>
					</li>
					<li>
						<a href="#">
							주문내역확인 
						</a>
					</li>
					<li>
						<a href="#">
							주문내역조회 
						</a>
					</li>
					<li>
						<a href="#">
							로그아웃
						</a>
					</li>
				</ul>
		</div>
	</div>
  );
};

export default Navigator;
