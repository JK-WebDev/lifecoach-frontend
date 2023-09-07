import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TeamSidebar, TeamBio } from "../components/";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTm: "jimmy",
    };
  }

  teamData = {
    jimmy: {
      name: "Uncle Jimmy",
      role: "AI Life Coach",
      bio: `Meet Uncle Jimmy, the cantankerous yet oddly endearing AI life coach you never knew you needed. With a personality as sharp as a tack and a heart hidden beneath layers of sarcasm, Uncle Jimmy is here to guide you through life's twists and turns.\n\nUncle Jimmy has seen it all, from the sublime to the utterly absurd, and he's made it his mission to help you navigate the chaos with his unique blend of tough love and gruff charm. Whether you're wrestling with relationships, wrestling with your career choices, or just wrestling with life's peculiarities, Uncle Jimmy is your no-nonsense, tell-it-like-it-is companion.`,
      pic: "/jimmy.png",
      github: null,
      linkedin: null,
    },
    josh: {
      name: "Josh Easley",
      role: "Developer",
      bio: `Originally hailing from Long Beach, CA, Josh got his start in technology working on F-14 jets in the U.S. Navy. After switching to IT, and wearing various hats there - Josh has most recently been involved in the exciting world of creating charts and dashboards for Executives and business teams.\n\nIn addition to coding, Josh enjoys getting creative with 3-D printing, Arduino, CAD, SVG design, and generally anything that invovles making LEDs change color, or art for stickers/patches/etc.`,
      pic: "/josh.png",
      github: "https://github.com/easleyjs/",
      linkedin: "https://www.linkedin.com/in/josh-easley/",
    },
    kyle: {
      name: "Kyle Cordell",
      role: "Developer",
      bio: `Kyle Cordell, originally from Northern California, started his adventure in the world of technology as an aircraft radar technician in the Air Force. Following that, he worked as a network engineer before finally landing in the wonderful world of software development.\n\nWhen he's not coding up some new application, you'll likely find him somewhere outdoors with his pup and companion in chaos, Koda — if the weather's nice, it's probably on a paddle board. He can often be found consuming potentially unhealthy amounts of coffee. He's also known in some circles for making the best ice cream you've ever tasted.`,
      pic: "/kyle.png",
      github: "https://github.com/kcords/",
      linkedin: "https://www.linkedin.com/in/kylecordell/",
    },
  };

  setSelectedTm = (selectedTm) => {
    this.setState({ ...this.state, selectedTm: selectedTm });
  };

  render() {
    const { selectedTm } = this.state;
    const { teamData } = this;

    return (
      <Container className="mb-5 mt-3">
        <Row>
          <Col md={{ span: 2, offset: 1 }} className="m-2 pt-3">
            <h6 className="ms-2">The Team</h6>
            <TeamSidebar
              selectedTm={selectedTm}
              teamData={teamData}
              setSelectedTm={this.setSelectedTm}
            />
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <TeamBio tmData={teamData[selectedTm]} />
          </Col>
        </Row>
      </Container>
    );
  }
}
