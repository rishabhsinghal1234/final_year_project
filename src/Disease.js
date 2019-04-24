import React from "react";
import "./App.css";
import DiseaseAsk from "./DiseaseAsk";

class Disease extends React.Component {
  state = {
    disease: {
      symptom: "fever",
      display: "block",
      displayy: "none"
    },
    value: ""
  };

  yes = {
    fever: "headache",
    headache: "Vometting",
    Vometting: "Joints_and_muscle_pain",
    weakness: "Weight_loss",
    headache2: "chest_pain",
    Weight_loss: "Frequent_Urination",
    Frequent_Urination: "Diabetes",
    chest_pain: "Blood_Pressure",
    Neck_Pain: "servical",
    Itches_and_rashes: "chicken_pox",
    Joints_and_muscle_pain: "Dengue",
    Cough: "swine_flue",
    Abdominal_pain: "Malaria"
  };
  no = {
    fever: "weakness",
    headache: "viral_fever",
    Vometting: "Itches_and_rashes",
    weakness: "headache2",
    headache2: "CAN'T",
    Weight_loss: "CAN'T",
    Frequent_Urination: "Thyroid",
    chest_pain: "Neck_Pain",
    Neck_Pain: "Higrains",
    Itches_and_rashes: "Typhoid",
    Joints_and_muscle_pain: "Cough",
    Cough: "Abdominal_pain",
    Abdominal_pain: "CAN'T"
  };
  Disease_List = [
    "viral_fever",
    "CAN'T",
    "Blood_Pressure",
    "Higrains",
    "servical",
    "Typhoid",
    "Dengue",
    "swine_flue",
    "Thyroid",
    "Diabetes"
  ];

  handledisease = () => {
    if (this.state.value === "Yes") {
      this.setState(prevState => {
        let updatedUserInfo = prevState.disease;
        updatedUserInfo["symptom"] = this.yes[this.state.disease.symptom];
        if (this.Disease_List.includes(this.state.disease.symptom)) {
          updatedUserInfo["display"] = "none";
          updatedUserInfo["displayy"] = "block";
        } else {
          updatedUserInfo["display"] = "block";
          updatedUserInfo["displayy"] = "none";
        }
        return {
          disease: {
            ...updatedUserInfo
          }
        };
      });
    } else {
      this.setState(prevState => {
        let updatedUserInfo = prevState.disease;
        updatedUserInfo["symptom"] = this.no[this.state.disease.symptom];
        if (this.Disease_List.includes(this.state.disease.symptom)) {
          updatedUserInfo["display"] = "none";
          updatedUserInfo["displayy"] = "block";
        } else {
          updatedUserInfo["display"] = "block";
          updatedUserInfo["displayy"] = "none";
        }
        return {
          disease: {
            ...updatedUserInfo
          }
        };
      });
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
        <div>
          <div className="disease">Disease Prediction</div>
        </div>
        <div
          style={{ display: this.state.disease.display }}
          className="classask"
        >
          <DiseaseAsk symptoms={this.state.disease.symptom} />
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
          <input
            type="button"
            value="Next"
            onClick={this.handledisease}
            className="button"
          />
        </div>
        <div
          style={{ display: this.state.disease.displayy }}
          className="classresult"
        >
          <h3>
            You have{" "}
            <span style={{ color: "red" }}>{this.state.disease.symptom}</span>
          </h3>
          <h3>
            Priscribed Doctor{" "}
            <span style={{ color: "green" }}>Dr. Maheswari</span>
          </h3>
          <h3>
            Priscribed Medicine{" "}
            <span style={{ color: "green" }}>Vobit 0.3</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default Disease;
