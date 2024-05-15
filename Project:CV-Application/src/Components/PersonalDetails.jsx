export default function PersonalDetails({ usePersonalDetails, handlePersonalDetails }){

    const handleInputChange = (e, fieldName) => {
        const updatedField = {[fieldName]: e.target.value};
        handlePersonalDetails(updatedField);
    }
    return (
        <form>
            <h3>Personal Details</h3>
            <section>
                <label>First Name</label>
                <input
                    name="firstName"
                    placeholder="John"
                    value={usePersonalDetails.firstName}
                    onChange={(e) => handleInputChange(e, 'firstName')}
                    ></input>
            </section>
            <section>
                <label>Last Name</label>
                <input
                    name="lastName"
                    placeholder="Johnson"
                    value={usePersonalDetails.lastName}
                    onChange={(e) => handleInputChange(e, 'lastName')}
                    ></input>
            </section>
            <section>
                <label>Email</label>
                <input
                type="email"
                    name="email"
                    placeholder="John@something.com"
                    value={usePersonalDetails.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    ></input>
            </section>
            <section>
                <label>Phone Number</label>
                <input
                    name="phoneNumber"
                    value={usePersonalDetails.phoneNumber}
                    onChange={(e) => handleInputChange(e, 'phoneNumber')}
                    ></input>
            </section>
            <section>
                <label>Address</label>
                <input
                    name="adress"
                    value={usePersonalDetails.address}
                    onChange={(e) => handleInputChange(e, 'address')}
                    ></input>
            </section>
        </form>
    )
}