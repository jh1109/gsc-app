import React, { useEffect } from 'react';

const OjtDX = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - 신입사원 DX"
    })
    return (
        <div>
            신입사원 DX 페이지입니다. #준비중!
        </div>
    );
};

export default OjtDX;