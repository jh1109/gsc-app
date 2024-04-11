import React, { useState } from 'react';
import classes from './CasesContent.module.css';
import CaseTabBtn from './CaseTabBtn';
import Case from './Case';
import { CASES_DATA } from './casesData';
import Pagination from './Pagination';


const CasesContent = () => {
    const [caseList, setCaseList] = useState(CASES_DATA);
    const [page, setPage] = useState(1);
    const limit = 3;
    const offset = (page - 1) * limit;
    const [selectedBtn, setSelectedBtn] = useState('전체');
    

    const postsData = (posts) => {
    if(posts){
        let result = posts.slice(offset, offset + limit);
        return result;
    }
    }

    function handleCaseTabBtn(selectedBtn) {
        const selectedCaseList = CASES_DATA.filter((caseItem) => (
            caseItem.group === selectedBtn
        ));
        setSelectedBtn(selectedBtn);
        setCaseList(selectedCaseList);
    }

    function handleAll() {
        setCaseList(CASES_DATA);
        setSelectedBtn('전체');
    }

    const CASELIST = postsData(caseList);

    return (
        <div className={`${"mainContent"} ${classes.CasesContentWrapper}`}>
            <ul className={classes.casesUl}>
                <CaseTabBtn className={selectedBtn === '전체' ? "active" : ""} onSelect={handleAll}>전체</CaseTabBtn><span>|</span>
                <CaseTabBtn className={selectedBtn === '기업' ? "active" : ""} onSelect={()=>handleCaseTabBtn('기업')}>기업</CaseTabBtn><span>|</span>
                <CaseTabBtn className={selectedBtn === '기관' ? "active" : ""} onSelect={()=>handleCaseTabBtn('기관')}>기관</CaseTabBtn><span>|</span>
                <CaseTabBtn className={selectedBtn === '학교' ? "active" : ""} onSelect={()=>handleCaseTabBtn('학교')}>학교</CaseTabBtn><span>|</span>
                <CaseTabBtn className={selectedBtn === '부트캠프' ? "active" : ""} onSelect={()=>handleCaseTabBtn('부트캠프')}>부트캠프</CaseTabBtn><span>|</span>
                <CaseTabBtn className={selectedBtn === '기타' ? "active" : ""} onSelect={()=>handleCaseTabBtn('기타')}>기타</CaseTabBtn>
            </ul>
            {(CASELIST.length === 0) ? <p className={classes.notCase}>교육 사례가 없습니다.😨</p> : (
                <ul className={classes.caseListUl}>
                    {CASELIST.map((item) => (
                        <Case item={item} key={item.id} />
                ))}
                </ul>
            )}
            {caseList.length > 3 && <Pagination limit={limit} page={page} totalPosts={caseList.length} setPage={setPage}/>}
        </div>
    );
};

export default CasesContent;