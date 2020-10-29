import React, { useState, useEffect } from 'react';
import { Button, Icon } from '@blueprintjs/core';

export function InfoBox(props) {
  const [show, setShow] = useState<any>(true);

  useEffect(() => {
    console.log(window.localStorage.getItem('showInfoBox'));
    setShow(
      window.localStorage.getItem('showInfoBox') === 'false' ? false : true,
    );
  }, [show]);

  function closeInfoBox() {
    setShow(false);
    window.localStorage.setItem('showInfoBox', 'false');
    console.log(window.localStorage.getItem('showInfoBox'));
  }

  return (
    <div
      className="container mb-3"
      style={{ display: show ? 'block' : 'none' }}
    >
      <div className="p-3 bg-component-bg">
        <Button
          icon="cross"
          onClick={() => closeInfoBox()}
          minimal
          className="float-right"
        />
        <p className="pt-3">
          <Icon icon="info-sign" className="mr-2" />
          Need help making a transaction? Read our guide on{' '}
          <a
            href="https://sovryn.app/blog/how-to-earn-and-leverage-bitcoin.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            how to trade and lend with Sovryn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
