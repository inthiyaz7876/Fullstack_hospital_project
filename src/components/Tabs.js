import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function JustifiedExample({ data }) {
  console.log('data-->', data);
  return (
    <Tabs
      defaultActiveKey={data.defaultTab}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {data.tabsInfo.map((item) => (
        <Tab eventKey={item.tabName} title={item.tabName}>
          {/* {item.discription} */}
        </Tab>
      ))}
      {/* <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab> */}
    </Tabs>
  );
}

export default JustifiedExample;
