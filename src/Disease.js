import React from "react";
import "./App.css";
import DiseaseAsk from "./DiseaseAsk";

class Disease extends React.Component {
  state = {
    symptom: "fever",
    sym: "fever",
    value: "",
    dispaly: "block",
    dispalyy: "none"
  };
  yes = {
    fever: "headache",
    neusia: "hepatitis(2.0/1.0)",
    headache: "redcoloured_rash",
    redcoloured_rash: "Chicken_Pox"
  };
  no = {
    fever: "neusia",
    neusia: "measies(2.0/1.0)",
    headache: "Poliomylitis(3.0/2.0)",
    redcoloured_rash: "Rabies(3.0/2.0)"
  };
  Disease_List = [
    "hepatitis(2.0/1.0)",
    "Chicken_Pox",
    "measies(2.0/1.0)",
    "Poliomylitis(3.0/2.0)",
    "Rabies(3.0/2.0)"
  ];
  handledisease = () => {
    var sym = this.state.symptom;
    console.log(this.Disease_List.includes(sym));

    if (this.state.value === "Yes") {
      if (sym === "fever") {
        this.setState({
          symptom: this.yes.fever
        });
      }
      if (sym === "headache") {
        this.setState({
          symptom: this.yes.headache
        });
      }
      if (sym === "neusia") {
        this.setState({
          symptom: this.yes.neusia,
          dispaly: "none",
          dispalyy: "block"
        });
      }
      if (sym === "redcoloured_rash") {
        this.setState({
          symptom: this.yes.redcoloured_rash,
          dispaly: "none",
          dispalyy: "block"
        });
      }
    }
    if (this.state.value === "No") {
      if (sym === "fever") {
        this.setState({
          symptom: this.no.fever
        });
      }
      if (sym === "headache") {
        this.setState({
          symptom: this.no.headache,
          dispaly: "none",
          dispalyy: "block"
        });
      }
      if (sym === "neusia") {
        this.setState({
          symptom: this.no.neusia,
          dispaly: "none",
          dispalyy: "block"
        });
      }
      if (sym === "redcoloured_rash") {
        this.setState({
          symptom: this.no.redcoloured_rash,
          dispaly: "none",
          dispalyy: "block"
        });
      }
    }
  };
  handlechange = event => {
    const { name, value } = event.target;
    if (name === "choice") {
      this.setState({
        value: value
      });
    }
  };
  render() {
    return (
      <div className="classmain">
        <div><div className="disease">Disease Pridiction</div></div>
        <div style={{ display: this.state.dispaly }} className="classask">
          <DiseaseAsk symptoms={this.state.symptom} />
          <input
            type="radio"
            value="Yes"
            name="choice"
            className="form-radio"
            onChange={this.handlechange}
            placeholder="Yes"
          />{" "}
          Yes{"   "}
          <input
            type="radio"
            value="No"
            className="form-radio"
            onChange={this.handlechange}
            name="choice"
          />{" "}
          No
          <hr />
          <input type="button" value="Next" onClick={this.handledisease} className="button"/>
        </div>
        <div style={{ display: this.state.dispalyy }} className="classresult">
          <h3>You have <span style={{color: "red"}}>{this.state.symptom}</span></h3>
          <h3>Priscribed Doctor <span style={{color: "green"}}>{this.state.symptom}</span></h3>
          <h3>Priscribed Medicine <span style={{color: "green"}}>{this.state.symptom}</span></h3>
        </div>
      </div>
    );
  }
}

export default Disease;
