import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ReactToPrint from "react-to-print";
import "./resume.css";

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
          <div className="subpage">Paage 1/2</div>
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
