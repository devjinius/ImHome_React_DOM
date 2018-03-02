import React, { Component } from "react";
import styles from "./styles.scss";

const Navigator = (props) => {
	return (
		<div className={styles.navbar}>
				<div className={styles.header}>
					<a className={styles.navbar_brand}>I'm 
						<span> Home</span>
					</a>
				</div>
				<div className={styles.menu_list}>
					<ul>
						<li>
							<a>
								주문재고관리
							</a>
						</li>
						<li>
							<a>
								주문내역확인 
							</a>
						</li>
						<li>
							<a>
								주문내역조회 
							</a>
						</li>
						<li>
							<a>
								로그아웃
							</a>
						</li>
					</ul>
			</div>
		</div>
	);
};

export default Navigator;
