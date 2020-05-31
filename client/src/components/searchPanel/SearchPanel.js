import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';
import ResultCard from "./ResultCard";
import "./style.css";
import { set } from 'mongoose';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [query, setQuery] = useState({ "query": "" });
    const [results, setResults] = useState([]);
    const [username, setUsername] = useState([]);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (query.query) {
            UserService.getUsers(query).then(data => {
                const { message } = data;
                if (message) {
                    authContext.setUser({ username: "" });
                    authContext.setIsAuthenticated(false);
                } else {
                    setResults(data.document);
                }
            });
        }
        else {
            setResults([]);
        }
    }, [query]);

    function onSubmit(e) {
        e.preventDefault();
    }

    function onChange(e) {
        setQuery({ "query": e.target.value });
    }


    return (
        <div>
            <div className="searchBar">
                <Paper component="form" className={classes.root} onSubmit={onSubmit}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search for users"
                        inputProps={{ 'aria-label': 'Search for users' }}
                        onChange={onChange}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            {results.map(result => (
                    <ResultCard
                        key={result._id}
                        imgUrl={result.profileImgSrc}
                        username={result.username}
                    />
                ))}
        </div>
    );
}
