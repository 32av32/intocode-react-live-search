import styles from "./Product.module.css";
import React from "react";

interface IProps {
    setDetailToggle: Function
}

function DetailInfo ({ setDetailToggle }:IProps) {
    return (
        <div className={styles.detail_info}>
            <div className={styles.close_block}>
                <div className={styles.detail_info__close} onClick={() => setDetailToggle(false)}>X</div>
            </div>
            <div className={styles.detail_info__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fuga.
            </div>
        </div>
    )
}

export default DetailInfo