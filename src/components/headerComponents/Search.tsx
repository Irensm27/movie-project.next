import React from 'react';
import Form from "next/form";

const Search = () => {
    return (
        <Form action='/movies'>
            <input name='query' type='text' placeholder='Search' />
            <button type="submit">Search</button>
        </Form>
    );
};

export default Search;