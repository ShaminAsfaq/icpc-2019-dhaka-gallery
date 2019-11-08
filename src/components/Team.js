import React, {lazy,Suspense} from 'react';
import { CardPlaceholder } from './placeholders/CardPlaceholder';

const ImageCard = lazy(() => import('./ImageCard'))
const Team = (props) => {

    var path = process.env.PUBLIC_URL + 'pic-generic';
    // path = '/pic-generic'

    var coach = props.team.coach_name;
    var c1 = props.team.c1_name;
    var c2 = props.team.c2_name;
    var c3 = props.team.c3_name;
    var institute = props.team.institute;
    var team = props.team.team_name;

    return (
        <div className="ui top attached segment">
            <div style={{marginBottom: '5px'}}>
                <a className="ui red ribbon label">{`${institute} [${team}]`}</a>
            </div>
            <div className="content">
                <div className="ui four column grid">
                    <div className="column">
                        <Suspense fallback={<CardPlaceholder />}>
                            <ImageCard 
                                name = {coach}
                                role = 'Coach'
                                src = {`${path}/[${institute}][${team}][Coach][${coach}]`}
                            />
                        </Suspense>
                    </div>
                    <div className="column">
                    <Suspense fallback={<CardPlaceholder />}>
                        <ImageCard 
                            name = {c1}
                            role = 'Contestant'
                            src = {`${path}/[${institute}][${team}][C1][${c1}]`}
                        />
                        </Suspense>
                    </div>
                    <div className="column">
                    <Suspense fallback={<CardPlaceholder />}>
                        <ImageCard 
                            name = {c2}
                            role = 'Contestant'
                            src = {`${path}/[${institute}][${team}][C2][${c2}]`}
                        />
                        </Suspense>
                    </div>
                    <div className="column">
                    <Suspense fallback={<CardPlaceholder />}>
                        <ImageCard 
                            name = {c3}
                            role = 'Contestant'
                            src = {`${path}/[${institute}][${team}][C3][${c3}]`}
                        />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Team as default
}