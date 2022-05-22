import React, { useState } from 'react';
import RingLoader from "react-spinners/RingLoader";

const loaderStyle = `
  display: block;
  margin: 50px auto;
  color: #7386D5;
`;

const ReactSpinner = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <RingLoader loading={loading} css={loaderStyle} ></RingLoader>
        </div>
    );
};

export default ReactSpinner;