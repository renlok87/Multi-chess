import React from 'react';
import { LayoutContextProvider } from './LayoutContext';
import styles from './Layout.module.scss';
const Layout = () => {
  return (
    <div>
      <LayoutContextProvider>
        <div className={styles.Layout}>
        </div>
      </LayoutContextProvider>
    </div>
  );
};

export default Layout;