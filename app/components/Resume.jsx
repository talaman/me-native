import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ReactToPrint from "react-to-print";
import "./resume.css";
import me from '../assets/data/me.json';

const data = [
  {
    name: "AAA",
    lastname: "BBB",
    mobile: "123"
  }
];

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="page">
          <div className="subpage">
            <h1 className="h1-name">{me.name}</h1>
            <div className="info-row">
                <span style={{paddingRight:180}}>{me.title}.</span>
                <span>Phone: {me.contact.phone}</span>
                <span>Web: {me.contact.website}</span>
            </div>
            
            <div className="info-row">
                <span>{me.age} years old, currently based in {me.location}.</span>
                <span>Email: {me.contact.phone}</span>
            </div>
            <div className="newspaper">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu 
            </div>
          </div>
        </div>
        <div className="page">
          <div className="subpage">Page 2/2</div>
        </div>
      </div>
    );
  }
}

class Resume extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </View>
    );
  }
}

export default Resume;
