import React from 'react';
import Main from './Main';

//Component that holds the results for each SearchForm input
const QueryResults = ({match}) => {

	return (
			<Main keyword={match.params.tag} />
		);
	}



export default QueryResults;
