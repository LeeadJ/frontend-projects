import '../styles/preview.css'
export default function Preview({ usePersonalDetails }){
    return (
        <div>
            <div className="header-bar">
                <h1>{usePersonalDetails.firstName}</h1>
                <h1>{usePersonalDetails.lastName}</h1>
                <h3>{usePersonalDetails.email}</h3>
                <h3>{usePersonalDetails.phoneNumber}</h3>
                <h3>{usePersonalDetails.address}</h3>
            </div>
        </div>
    )
    
}