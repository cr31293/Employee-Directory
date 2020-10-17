import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
        name: []
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
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };

    render() {
        return (
            <div>
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeCard results={this.state.results} />
            </div>
        )
    }
}

export default SearchResultContainer;