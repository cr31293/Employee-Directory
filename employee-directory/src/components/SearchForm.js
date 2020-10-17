import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle"
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
    bar: {
        color: red,
    }
});

function SearchForm(props) {
    const classes = useStyles();
    return (
        <div>
            <FormControl  className="results" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                <Input 
                    id="results"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="results"
                    list="results"
                    type="text"
                    placeholder="Search for a specific employee here"
                />
                {/* <datalist id="results">
                    {props.results.map(results => {
                        <option value={results} key={results} />
                    })}
                </datalist> */}
                <Button className={classes.bar} type="submit" variant="outlined" color="primary" onClick={props.handleFormSubmit}>
                    Search
                </Button>
            </FormControl>
        </div>
    );
}

export default SearchForm;