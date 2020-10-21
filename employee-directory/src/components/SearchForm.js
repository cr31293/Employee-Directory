import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle"
import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
    bar: {
        color: red,
    }
});

function SearchForm(props) {
    const classes = useStyles();
    return (
        <div>
            <FormControl fullWidth>
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
                    name="search"
                    list="results"
                    type="text"
                    placeholder="Search for a specific employee here"
                />

            </FormControl>

        </div>
    );
}

export default SearchForm;