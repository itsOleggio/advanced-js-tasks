import projects from '../../constants/projects';

export default function ProjectList(prop) {

    const filteredList = projects.filter(project => {
        if (prop.filter === "All") {
            return true;
        }
        return project.category === prop.filter
    }
    );

    return (
        <div className='project-list'>
            {filteredList.map((project, index) => (
                <div key={index} className='project-item'>
                    <img src={project.img} alt={project.category}></img>
                </div>
            ))}
        </div>
    )
}
