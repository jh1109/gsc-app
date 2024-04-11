import React, { useEffect } from 'react';

const CLevelDX = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - CLevel DX"
    })
    return (
        <div>
            C-Level DX 페이지 입니다. #준비중!
        </div>
    );
};

export default CLevelDX;