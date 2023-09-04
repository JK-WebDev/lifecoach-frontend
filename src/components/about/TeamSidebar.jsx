import React from "react";
import { ListGroup } from 'react-bootstrap';

class TeamSidebar extends React.Component {

    render() {
        const { teamData, selectedTm, setSelectedTm } = this.props;

        return (
            <ListGroup>
                { Object.keys(teamData).map((tmKey, idx) => {
                    const { name } = teamData[tmKey];

                    return <ListGroup.Item key={ idx } 
                                           onClick={ () => { setSelectedTm(tmKey) }}
                                           active={ tmKey == selectedTm ?? 'true' }
                                           style={{ cursor: 'pointer' }}>
                                { name }
                           </ListGroup.Item>
                })}                
            </ListGroup>
        )
    }
}

export default TeamSidebar;