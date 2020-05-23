import React, { SFC } from 'react'

import styles from './style.module.css';

const ContentWrap: SFC = ({ children }) => (
  <div className={styles.wrap}>{children}</div>
)

export default ContentWrap;
