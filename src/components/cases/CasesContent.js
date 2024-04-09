import React, { useState } from 'react';
import classes from './CasesContent.module.css';
import CaseTabBtn from './CaseTabBtn';
import Case from './Case';
import { CASES_DATA } from './casesData';


const CasesContent = () => {
    const [caseList, setCaseList] = useState(CASES_DATA);


    function handleCaseTabBtn(selectedBtn) {
        const selectedCaseList = CASES_DATA.filter((caseItem) => (
            caseItem.group === selectedBtn
        ));
        setCaseList(selectedCaseList);
    }

    function handleAll() {
        setCaseList(CASES_DATA);
    }

    return (
        <div className={`${"mainContent"} ${classes.CasesContentWrapper}`}>
            <ul className={classes.casesUl}>
                <CaseTabBtn onSelect={handleAll}>전체</CaseTabBtn><span>|</span>
                <CaseTabBtn onSelect={()=>handleCaseTabBtn('기업')}>기업</CaseTabBtn><span>|</span>
                <CaseTabBtn onSelect={()=>handleCaseTabBtn('기관')}>기관</CaseTabBtn><span>|</span>
                <CaseTabBtn onSelect={()=>handleCaseTabBtn('학교')}>학교</CaseTabBtn><span>|</span>
                <CaseTabBtn onSelect={()=>handleCaseTabBtn('부트캠프')}>부트캠프</CaseTabBtn><span>|</span>
                <CaseTabBtn onSelect={()=>handleCaseTabBtn('기타')}>기타</CaseTabBtn>
            </ul>
            {(caseList.length === 0) ? <p className={classes.notCase}>교육 사례가 없습니다.😨</p> : (
                <ul className={classes.caseListUl}>
                    {caseList.map((item) => (
                        <Case item={item} key={item.id} />
                ))}
                </ul>
            )}
            <p className={classes.pagination}>1 | 2 | ...  #pagination</p>
        </div>
    );
};

export default CasesContent;