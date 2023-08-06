import { useState } from "react";

export default function Add(props) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });

    const { handleAddTechno } = props;
    

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',  
        })
    }

    function handleChange(evt) {
        const { name, value} = evt.target;
        setTechno({...techno, [name]: value});
    }

    return(
        <div className="technoAdd">
            <h1>Add techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="technoname">Name:</label>
                    <br />
                    <input type="texte" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)} />
                    <br />
                    <label htmlFor="technocategory">Category:</label>
                    <br />
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
                        <option value="">Select category</option>
                        <option value="front">Front</option>
                        <option value="back">Back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description:</label>
                    <br />
                    <textarea
                        name="technodescription"
                        id="technodescription"
                        color="30"
                        rows="10"
                        value={techno.technodescription}
                        onChange={(evt) => handleChange(evt)}
                        ></textarea>
                        <br />
                    <input type="submit" value="Add Techno" className="btn" />
                </form>
            </div>
        </div>
    )
}