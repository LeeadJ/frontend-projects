export default function ExperienceItem({ handleExperienceBtn }){
    return (
        <form>
            <h3>Experience</h3>
            <section>
                <label>Company Name</label>
                <input
                    name="companyName"
                    placeholder="Enter Company Name"
                    ></input>
            </section>
            <section>
                <label>Title</label>
                <input
                    name="title"
                    placeholder="Enter Title"
                    ></input>
            </section>
            <section>
                <div>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="start-date"
                        ></input>
                    <label>End Date</label>
                    <input
                        type="date"
                        name="end-date"
                        ></input>
                </div>
            </section>
            <section>
                <label>Location</label>
                <input
                    name="location"
                    ></input>
            </section>
            <section>
                <label>Description</label>
                <textarea
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    ></textarea>
            </section>
            <button type="submit">Add Experience</button>
            <button type="button" onClick={() => handleExperienceBtn(false)}>cancel</button>
        </form>
    )
}