import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import GridList from '@material-ui/core/GridList';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const filterBar = {
    width: '25%'
}

const gridStyle = {
    margin: '5%'
}

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
            <div style={gridStyle}>
                    <SearchForm 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    />
                    <div >
                    <FormControl style={filterBar}>
                            <InputLabel htmlFor="grouped-select">Age</InputLabel>
                            <Select defaultValue="" id="grouped-select">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <ListSubheader>Age</ListSubheader>
                            {this.state.results
                            .filter(
                                user => 
                                user.dob.age
                            ).map(users => (
                            <MenuItem value={users.dob.age}>{users.dob.age}</MenuItem>
                            ))}
                            </Select>
                    </FormControl>
                    </div>

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
                    key={users.login.uuid}
                    thumbnail={users.picture.large}
                    gender={users.gender}
                    firstName={users.name.first}
                    lastName={users.name.last}
                    email={users.email}
                    age={users.dob.age}
                    city={users.location.city}
                    state={users.location.state}
                    country={users.location.country}
                    />
                    ))}
                    </GridList>
            </div>
        )
    }
}

export default SearchResultContainer;