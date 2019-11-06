import React from 'react';
import Team from '../components/Team';


const ImageList = (props) => {
	// console.log(props)
		
	const teams = props.list.map((team) => {
		// console.log(team.cm_id)
		return (
			<Team key={team.cm_id} team={team}/>
		);
	});
	
		return (
			<div className="team-list">{teams}</div>
		);
	
};


export default ImageList;