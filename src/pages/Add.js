export default function Add(props) {
    const { handleAddTechno } = props;
    const techno = {
        name: 'React',
        category: 'front',
        description: 'learn React'
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno)
    }
    return(
        <div className="technoAdd">
            <h1>Add techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="techno-name">Name:</label>
                    <br />
                    <input type="texte" name="techno-name" id="techno-name" />
                    <br />
                    <label htmlFor="techno-category">Category:</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">Select category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="techno-description">Description:</label>
                    <br />
                    <textarea
                        name="techno-descrption"
                        id="techno-descrption"
                        color="30"
                        rows="10"
                        ></textarea>
                        <br />
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    )
}