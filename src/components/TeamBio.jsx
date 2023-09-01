import React from "react";
import Image from 'react-bootstrap/Image'

class TeamBio extends React.Component {
    render() {
        const { pic, name, role, bio } = this.props.tmData;

        return (
            <>
                <Image src={ pic } fluid></Image>
                <p>{ name }</p>
                <p>{ role }</p>
                { bio.split('\n').map((pg, idx) => {
                    return <p key={ idx }>{ pg }</p>
                })}
            </>
        )
    }
}

export default TeamBio;