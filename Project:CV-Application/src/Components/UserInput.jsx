import PersonalDetails from './PersonalDetails'
import '../styles/userInput.css'
import Education from './Education'
import Experience from './Experience'


export default function UserInput({ usePersonalDetails, handlePersonalDetails, educationList, handleEducationList }){
    return (
        <div>
            <PersonalDetails handlePersonalDetails={handlePersonalDetails} usePersonalDetails={usePersonalDetails}/>
            <Education educationList={educationList} handleEducationList={handleEducationList}/>
            <Experience />
        </div>
    )
}