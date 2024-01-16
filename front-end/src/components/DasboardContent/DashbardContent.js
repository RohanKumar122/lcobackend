import React, { useEffect, useState } from "react";
import "./DashboardContent.css";
import axios from "axios";
import { Api_Url } from "../Data/ApiConfig";
import statedata from "../Data/States.json";
export default function DashbardContent() {
  const [Data, setData] = useState();
  const contact_no = sessionStorage.getItem("contact_number");
  const id = sessionStorage.getItem("unique_id");
  const token = sessionStorage.getItem("access_token");
  const [ExamMode, setExamMode] = useState();
  const [Class, setClass] = useState();
  const [Stream, setStream] = useState();
  const [FatherName, setFatherName] = useState();
  const [School, setSchool] = useState();
  const [SchoolAddress, setSchoolAddress] = useState();
  const [RsidentialAddress, setResidentialAddress] = useState();
  const [State, setState] = useState();
  const [State2, setState2] = useState();
  const [City, setCity] = useState();
  const [City2, setCity2] = useState();
  const [Town, setTown] = useState();
  const [ParentNo, setParentNo] = useState();
  const [DOB, setDOB] = useState();
  const [Email, setEmail] = useState();
  const [PreferdLanguage, setPreferdLanguage] = useState();
  const [ProfilePic, setProfilePic] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [Password, setPassword] = useState();
  useEffect(() => {
    axios
      .get(Api_Url + "user/" + contact_no)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5000/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_v7CEAFEIHq6oTU",
      amount: amount.toString(),
      currency: currency,
      name: "IIT EXAM.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios
          .post(Api_Url + "success/", data)
          .then((resp) => {
            console.log(resp.data.msg);
          })
          .catch((error) => {
            alert(error);
          });

        // alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const handleNPwChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleCPwChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePwChange = (e) => {
    setPassword(e.target.value);
  };
  const handleExamModeChange = (e) => {
    setExamMode(e.target.value);
  };
  const handleClassChange = (e) => {
    setClass(e.target.value);
  };
  const handleStreamChange = (e) => {
    setStream(e.target.value);
  };
  const handleFatherNameChange = (e) => {
    setFatherName(e.target.value);
  };
  const handleSchoolNameChange = (e) => {
    setSchool(e.target.value);
  };
  const handleSchoolAddressChange = (e) => {
    setSchoolAddress(e.target.value);
  };
  const handleResidentialAddressChange = (e) => {
    setResidentialAddress(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleStateChange2 = (e) => {
    setState2(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleCityChange2 = (e) => {
    setCity2(e.target.value);
  };
  const handleTownChange = (e) => {
    setTown(e.target.value);
  };
  const handleParentNoChange = (e) => {
    setParentNo(e.target.value);
  };
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePreferedLanguageChange = (e) => {
    setPreferdLanguage(e.target.value);
  };
  const handleProfileImgChange = (e) => {
    setProfilePic(e.target.file);
  };
  const handleUpdatePassword = () => {
    if (NewPassword === ConfirmPassword) {
      var data = {
        Contact_No: "+91" + contact_no,
        password: NewPassword,
        current_password: Password,
      };
      axios
        .post(Api_Url + "password/", data)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("password dose not matches.");
    }
  };
  const handleSave = async () => {
    if (
      !ExamMode ||
      !Class ||
      !FatherName ||
      !School ||
      !SchoolAddress ||
      !RsidentialAddress ||
      !State ||
      (State === "Others" && !State2) ||
      !City ||
      (City === "Others" && !City2) ||
      !ParentNo ||
      !DOB ||
      !Email ||
      !PreferdLanguage
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    var data = {
      Contact_No: contact_no,
      examType: ExamMode,
      studentClass: Class,
      subjectStream: Stream,
      fathersName: FatherName,
      schoolName: School,
      schoolAddress: SchoolAddress,
      residentialAddress: RsidentialAddress,
      state: State !== "Others" ? State : State2,
      city: City !== "Others" ? City : City2,
      town: Town,
      parentsMobileNumber: ParentNo,
      dateOfBirth: DOB,
      email: Email,
      preferredLanguage: PreferdLanguage,
    };

    axios
      .put(Api_Url + "register", data)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };
  if (!Data) return null;
  return (
    <div className="DashboardContent">
      <div className="DashboardTab" id="registrationForm">
        <div className="DashboardTabTitle">
          <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
          &nbsp;&nbsp; Registration
        </div>
        <div className="DashboardReistrationForm">
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Select Exam Mode</label>
            <select
              className="DashboardFormInput"
              value={ExamMode}
              onChange={handleExamModeChange}
            >
              <option selected disabled>
                Select Exam Mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Select Class</label>
            <select
              className="DashboardFormInput"
              value={Class}
              onChange={handleClassChange}
            >
              <option selected disabled>
                Select Class
              </option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
          {Class === "11" || Class === "12" ? (
            <div className="DashboardFormInputDiv">
              <label className="DashboardFormLabel">Select Stream</label>
              <select
                className="DashboardFormInput"
                value={Stream}
                onChange={handleStreamChange}
              >
                <option selected disabled>
                  Select Stream
                </option>
                <option value="PCM">PCM</option>
                <option value="PCB">PCB</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
          ) : null}
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Name</label>
            <input
              className="DashboardFormInput"
              placeholder="Name"
              type="text"
              value={Data.name?Data.name:null}
              readOnly
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Father's Name</label>
            <input
              className="DashboardFormInput"
              placeholder="Father's Name"
              type="text"
              value={FatherName}
              onChange={handleFatherNameChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">School Name</label>
            <input
              className="DashboardFormInput"
              placeholder="School Name"
              type="text"
              value={School}
              onChange={handleSchoolNameChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">School Address</label>
            <input
              className="DashboardFormInput"
              placeholder="School Address"
              type="text"
              value={SchoolAddress}
              onChange={handleSchoolAddressChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Residential Address</label>
            <input
              className="DashboardFormInput"
              placeholder="Residential Address"
              type="text"
              value={RsidentialAddress}
              onChange={handleResidentialAddressChange}
            ></input>
          </div>
          {State !== "Others" ? (
            <div className="DashboardFormInputDiv">
              <label className="DashboardFormLabel">Select State</label>
              <select
                className="DashboardFormInput"
                value={State}
                onChange={handleStateChange}
              >
                <option selected disabled>
                  Select state
                </option>
                {statedata.states.map((dt) => {
                  return <option value={dt.state}>{dt.state}</option>;
                })}
                <option value="Others">Others</option>
              </select>
            </div>
          ) : null}
          {State === "Others" ? (
            <div className="DashboardFormInputDiv">
              <label className="DashboardFormLabel">Select State</label>
              <input
                className="DashboardFormInput"
                value={State2}
                onChange={handleStateChange2}
              ></input>
            </div>
          ) : null}
          {City !== "Others" ? (
            <div className="DashboardFormInputDiv">
              <label className="DashboardFormLabel">Select City</label>
              <select
                className="DashboardFormInput"
                value={City}
                onChange={handleCityChange}
              >
                <option selected disabled>
                  Select City
                </option>
                {statedata.states.map((dt) => {
                  if (dt.state === State) {
                    return dt.districts.map((d, key) => (
                      <option key={key} value={d}>
                        {d}
                      </option>
                    ));
                  }
                  return null;
                })}
                <option value="Others">Others</option>
              </select>
            </div>
          ) : null}
          {City === "Others" ? (
            <div className="DashboardFormInputDiv">
              <label className="DashboardFormLabel">Select City</label>
              <input
                className="DashboardFormInput"
                value={City2}
                onChange={handleCityChange2}
              ></input>
            </div>
          ) : null}
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Town</label>
            <input
              className="DashboardFormInput"
              placeholder="Town"
              type="text"
              value={Town}
              onChange={handleTownChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Parent's Contact No.</label>
            <input
              className="DashboardFormInput"
              placeholder="Parent's contact No"
              type="text"
              value={ParentNo}
              onChange={handleParentNoChange}
            />
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">DOB</label>
            <input
              className="DashboardFormInput"
              placeholder="DOB"
              type="Date"
              value={DOB}
              onChange={handleDOBChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Email Id</label>
            <input
              className="DashboardFormInput"
              placeholder="Email Id"
              type="email"
              value={Email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Preferd Language</label>
            <select
              className="DashboardFormInput"
              value={PreferdLanguage}
              onChange={handlePreferedLanguageChange}
            >
              <option selected disabled>
                Select Language
              </option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="DashboardButtonDiv" onClick={handleSave}>
            <button className="DashboardButton">
              <i className="fa fa-save" aria-hidden="true"></i> &nbsp;&nbsp;Save
            </button>
          </div>
        </div>
      </div>
      <div className="DashboardTab" id="admitCard">
        <div className="DashboardTabTitle">
          <i className="fa fa-id-card-o" aria-hidden="true"></i> &nbsp;&nbsp;
          Admit Card
        </div>
        <div className="DashboardReistrationForm">
          <img className="AccessDenideImg" src={require("../Img/ad.gif")} />
          <img src={require("../Img/adtext.png")} />
        </div>
      </div>
      <div className="DashboardTab" id="samplePaper">
        <div className="DashboardTabTitle">
          <i className="fa fa-file-o" aria-hidden="true"></i> &nbsp;&nbsp;
          Sample Paper
        </div>
        <div className=""></div>
      </div>
      <div className="DashboardTab" id="attemptExam">
        <div className="DashboardTabTitle">
          <i className="fa fa-file-text-o" aria-hidden="true"></i> &nbsp;&nbsp;
          Attempt Exam
        </div>
        <div className=""></div>
      </div>
      <div className="DashboardTab" id="result">
        <div className="DashboardTabTitle">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
          &nbsp;&nbsp; Result
        </div>
        <div className=""></div>
      </div>
      <div className="DashboardTab" id="certificate">
        <div className="DashboardTabTitle">
          <i className="fa fa-university" aria-hidden="true"></i> &nbsp;&nbsp;
          Certificate
        </div>
        <div className=""></div>
      </div>
      <div className="DashboardTab" id="resetPassword">
        <div className="DashboardTabTitle">
          <i className="fa fa-cog" aria-hidden="true"></i> &nbsp;&nbsp; Reset
          Password
        </div>
        <div className="DashboardReistrationForm">
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Mobile No</label>
            <input
              className="DashboardFormInput"
              placeholder="Mobile No."
              type="text"
              value={contact_no}
              readOnly
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">New Password</label>
            <input
              className="DashboardFormInput"
              placeholder="New Password"
              type="text"
              value={NewPassword}
              onChange={handleNPwChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Confirm Password</label>
            <input
              className="DashboardFormInput"
              placeholder="Confirm Password"
              type="password"
              value={ConfirmPassword}
              onChange={handleCPwChange}
            ></input>
          </div>
          <div className="DashboardFormInputDiv">
            <label className="DashboardFormLabel">Current Password</label>
            <input
              className="DashboardFormInput"
              placeholder="Current Password"
              type="password"
              value={Password}
              onChange={handlePwChange}
            ></input>
          </div>
          <div className="DashboardButtonDiv">
            <button className="DashboardButton" onClick={handleUpdatePassword}>
              <i className="fa fa-save" aria-hidden="true"></i> &nbsp;&nbsp;Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
