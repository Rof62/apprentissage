import TechnoItem from "../components/TechnoItem";


export default function List(props) {
    const { technos, handleDeleteTechno } = props;
    return(
        <div className="technoList">
            <h1>All technos</h1>
            <div>
                {
                    technos.map(techno =>(
                        <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno}/>
                    ))
                }
            </div>

        </div>
    )
}