import React from 'react';
import dividerLogo from "../../Divider-logo/divider.jpg";
const Divider = () => {
    return (
      <div className="default-bg">
        <div className="divider">
          <img src={dividerLogo} alt="dividerLogo" />
        </div>
      </div>
    );
};

export default Divider;