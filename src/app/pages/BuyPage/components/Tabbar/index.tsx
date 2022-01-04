import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../constants';
import styles from './index.module.scss';
interface ActiveProps {
  setSelectedTab: (e: boolean) => void;
  selectedTab: boolean;
}

const Bar = styled.div<{ active: boolean }>`
  width: 146px;
  height: 8px;
  border-radius: 4px;
  background: ${props => (!props.active ? 'transparent' : colors.main)};
  @media (max-width: 600px) {
    width: 106px;
  }
`;

const Tabbar: React.FC<ActiveProps> = ({ setSelectedTab, selectedTab }) => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.barWrapper}>
        <p onClick={() => setSelectedTab(false)}>sovryn swap</p>
        <div className={selectedTab ? styles.barDeactive : styles.barActive} />
      </div>
      <div className={styles.barWrapper}>
        <p onClick={() => setSelectedTab(true)}>bonding curve</p>
        <div className={selectedTab ? styles.barActive : styles.barDeactive} />
      </div>
    </div>
  );
};

export default Tabbar;
