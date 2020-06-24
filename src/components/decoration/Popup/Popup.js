import React from 'react';

import './Popup.css';

const Popup = ({className, text}) => {
  return (
    <div className={`${className} popup`}>
      <p className="popup__text">{text}</p>
    </div>
  );
};

export default Popup;