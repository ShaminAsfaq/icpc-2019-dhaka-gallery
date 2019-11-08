import React from 'react';
import Team from '../components/Team';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageList = (props) => {
	const { list } = props;
	
	const teams = list.map((team) => {
		return (
			<LazyLoadComponent
				key={team.cm_id}
			>
				<Team team={team} />
			</LazyLoadComponent>
		);
	});
	
		return (
			<div className="team-list" style={{marginTop: '80px'}}>{teams}</div>
		);
	
};

export default ImageList;