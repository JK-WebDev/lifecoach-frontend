import React from "react";
import Image from 'react-bootstrap/Image'

class TeamBio extends React.Component {
    render() {
        const { pic, name, role, bio } = this.props.tmData;

        return (
            <>
                <Image src={ pic } rounded fluid></Image>
                <h5 className="fs-5 my-2">{ name }</h5>
                <h6 className="fs-6 mb-4">{ role }</h6>
                <p style={{ whiteSpace: "pre-wrap" }}>{ bio }</p>
            </>
        )
    }
}

export default TeamBio;