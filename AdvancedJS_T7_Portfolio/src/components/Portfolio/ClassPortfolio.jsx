import { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";

export class ClassPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: 'All'
        };
    }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter });
    }

    render() {
        return (
            <>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selectedFilter}
                    onSelectFilter={this.handleSelectFilter}
                />
                <ProjectList 
                    filter={this.state.selectedFilter}
                />
            </>
        );
    }
}

export default ClassPortfolio;