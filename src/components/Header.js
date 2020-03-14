import React from 'react';
import {NavLink} from 'react-router-dom';
import HelpPage from './HelpPage';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to='/create' activeClassName="is-active">Create Page</NavLink>
        <NavLink to='/help' activeClassName="is-active">Help Page</NavLink>
    </header>
);

export default Header;