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
            <h1>Resume</h1>
            <h2>{me.name}</h2>
            <div class="newspaper">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
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
