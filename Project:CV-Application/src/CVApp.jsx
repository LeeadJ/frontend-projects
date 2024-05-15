import { useState } from 'react'
import UserInput from './Components/UserInput'
import Preview from './Components/Preview'

import './styles/cvApp.css' 

export default function CVApp(){
  const [usePersonalDetails, setUserPersonalDetails] = useState({
    firstName: 'John',
    lastName: 'Johnson',
    email: 'John@something.com',
    phoneNumber: '+972 052 513 2255',
    address: 'Tel Aviv, Israel'
  })

  const [educationList, setEducationList] = useState([]);

  const handlePersonalDetails = (updatedDetails) => {
    setUserPersonalDetails({...usePersonalDetails, ...updatedDetails})
  }

  const handleEducationList = (item) => {
    setEducationList(prevEducationList => [...prevEducationList, item]);
    console.log(educationList[0].school.value)
  }

  return (
    <div className='main-container'>
      <div className='left-container'>
        <UserInput 
          usePersonalDetails={usePersonalDetails}
          handlePersonalDetails={handlePersonalDetails}
          educationList={educationList}
          handleEducationList={handleEducationList}
          />
      </div>
      <div className='right-container'>
        <Preview usePersonalDetails={usePersonalDetails}/>
      </div>
    </div>
    
  )
}
