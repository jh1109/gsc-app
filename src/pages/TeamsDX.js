import React, { useEffect } from 'react';

const TeamsDX = () => {
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = "GSC - 재직자 DX"
    })
    return (
        <div>
            재직자DX 페이지입니다. #준비중!
        </div>
    );
};

export default TeamsDX;