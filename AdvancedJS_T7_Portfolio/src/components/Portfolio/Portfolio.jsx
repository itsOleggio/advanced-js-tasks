import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import { useState } from "react";

export function Portfolio() {

    const [selectedFilter, setSelectedFilter] = useState('All');

    return (
        <>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={setSelectedFilter} />
            <ProjectList 
                filter = {selectedFilter}
            />
        </>
    )
}