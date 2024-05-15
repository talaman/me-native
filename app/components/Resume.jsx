import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ReactToPrint from "react-to-print";
import "./resume.css";
import me from '../assets/data/me.json';
import { Image } from 'react-native';

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
              <span style={{ paddingRight: 150 }}>{me.title}.</span>
              <span>Phone: {me.contact.phone}</span>
              <span>Web: {me.contact.website}</span>
            </div>

            <div className="info-row">
              <span>{me.age} years old, currently based in {me.location}.</span>
              <span>LinkedIn: {me.contact.linkedin}</span>
              <span>Email: {me.contact.phone}</span>
            </div>
            <div className="newspaper">
              <img src='../assets/images/photo.jpg' alt="My Image" />

              <h2>Personal Statement</h2>
              <p>
                {me.personal_statement}
              </p>
              <h2>Personal Interests</h2>
              <p>
                {me.personal_interests}
              </p>
              <h2>Skills and Experience</h2>
              <p>
                {me.skills_and_experience}
              </p>
              <h2>Stack of Interest</h2>
              <p>
                {me.stack_of_interest}
              </p>
              <p>
                I'm skilled in {me.skills}
              </p>
              <div>
                <h2>Education</h2>
                <ul>
                  {me.education.map((edu, index) => (
                    <li key={index}>
                      {edu.degree}, {edu.institution}, {edu.year}.
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Relevant Work History</h2>
                <ul>
                  {me.work_history.map((job, index) => (
                    <li key={index}>
                      {job.title}, {job.company}, {job.startDate}-{job.endDate}
                      <br />
                      {job.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Languages</h2>
                <ul>
                  {me.languages.map((language, index) => (
                    <li key={index}>
                      {language.language}, {language.level}.
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>References</h2>
                <ul>
                  {me.references.map((reference, index) => (
                    <li key={index}>
                      {reference.name}, {reference.title}, {reference.company}
                      <br />
                      LinkedIn: {reference.linkedin}
                      <br />
                      Phone: {reference.phone}
                    </li>
                  ))}
                </ul>
              </div>
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
