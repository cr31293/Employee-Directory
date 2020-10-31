import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import GridList from "@material-ui/core/GridList";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";


const gridStyle = {
  margin: "5%",
};

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.getAll()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  filterGender = () => {
    API.getAllOfGender()
      .then((res) => this.setState({ gender: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });

  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

 sortAscending = () => {
     const { results } = this.state;
     results.sort((a, b) => a.dob.age - b.dob.age)
     this.setState({ results })
     console.log(results);
 }

sortDescending = () => {
    const { results } = this.state;
     results.sort((a, b) => a.dob.age - b.dob.age).reverse()
     this.setState({ results })
     console.log(results);
}

  render() {
      const results = this.state;
    return (
      <div style={gridStyle}>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <span>Sort x Age</span>
        <IconButton
          aria-label="delete"
          value="male"
          name="gender"
          onClick={this.sortAscending}
        >
          <SvgIcon>
            <path fill="#0D47A1" d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"/>
          </SvgIcon>
        </IconButton>
        <IconButton
          aria-label="delete"
          value="male"
          name="gender"
          onClick={this.sortDescending}
        >
          <SvgIcon>
            <path fill="#0D47A1" d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
          </SvgIcon>
        </IconButton>
        <GridList>
          {this.state.results
            .filter(
              (user) =>
                user.name.first
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ||
                user.name.last
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase()) ||
                user.email
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
            )
            .map((users) => (
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
    );
  }
}

export default SearchResultContainer;
