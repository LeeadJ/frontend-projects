import { useState } from "react";
import EducationItem from './EducationItem'

export default function Education({ handleEducationList }) {
    const [showEducationItem, setShowEducationItem] = useState(false);

    const handleEducationBtn = (val) =>{
        setShowEducationItem(val);
    }
    return (
        <div>
            <h3>Education</h3>
            {showEducationItem && <EducationItem handleEducationBtn={handleEducationBtn} handleEducationList={handleEducationList}/>}
            <button type="button" onClick={() => handleEducationBtn(true)}>+ Education</button>

        </div>
    )
}