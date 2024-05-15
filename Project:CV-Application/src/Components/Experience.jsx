import { useState } from "react";
import ExperienceItem from './ExperienceItem'

export default function Experience(){
    const [showExperienceItem, setExperienceItem] = useState(false);

    const handleExperienceBtn = (val) =>{
        setExperienceItem(val);
    }
    return (
        <div>
            <h3>Education</h3>
            {showExperienceItem && <ExperienceItem handleExperienceBtn={handleExperienceBtn}/>}
            <button type="button" onClick={() => handleExperienceBtn(true)}>+ Experience</button>

        </div>
    )
}