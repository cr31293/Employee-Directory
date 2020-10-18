import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import GridList from '@material-ui/core/GridList';

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
        // name: []
    };

    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getAll()
        .then(res => this.setState({ results: res.data.results }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    // sortGender = () => {
    //     this.setState({
    //         results: 
    //     })
    // }

    render() {
        return (
            <div>
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <GridList>
                {this.state.results
                .filter(
                    user => 
                        user.name.first.toLowerCase()
                        .includes(this.state.search.toLowerCase()) || 
                        user.name.last.toLowerCase()
                        .includes(this.state.search.toLowerCase()) ||
                        user.email.toLowerCase()
                        .includes(this.state.search.toLowerCase())
                ).map(users => (
                <EmployeeCard 
                    thumbnail={users.picture.large}
                    gender={users.gender}
                    firstName={users.name.first}
                    lastName={users.name.last}
                    email={users.email}
                 />
                ))}
                </GridList>
            </div>
        )
    }
}

export default SearchResultContainer;