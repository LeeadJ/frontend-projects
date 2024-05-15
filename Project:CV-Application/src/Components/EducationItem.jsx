export default function EducationItem({ handleEducationBtn, handleEducationList }) {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newEducation = {
            school: e.target.school,
            degree: e.target.degree,
            start: e.target.start,
            end: e.target.end,
            location: e.target.location,
        }
        handleEducationList(newEducation)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Education</h3>
            <section>
                <label>School</label>
                <input
                    name="school"
                    placeholder="Enter school / university"
                ></input>
            </section>
            <section>
                <label htmlFor="degree">Degree</label>
                <select id="degree" name="degree">
                    <option value="" disabled selected>Choose one...</option>
                    <option value="high-school-diploma">High School Diploma</option>
                    <option value="associate-degree">Associate Degree</option>
                    <option value="baschelor-degree">Bachelor Degree</option>
                    <option value="">Master Degree</option>
                    <option value="phd">Doctorate (Ph.D.)</option>
                    <option value="certificate-program">Certificate Program</option>
                    <option value="other">Other</option>
                </select>
            </section>
            <section>
                <div>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="start"
                    ></input>
                    <label>End Date</label>
                    <input
                        type="date"
                        name="end"
                    ></input>

                </div>
            </section>
            <section>
                <label>Location</label>
                <input
                    name="location"
                ></input>
            </section>
            <button type="submit">Add Education</button>
            <button type="button" onClick={() => handleEducationBtn(false)}>cancel</button>
        </form>
    )
}