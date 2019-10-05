import React, { useState, useContext, useEffect } from "react";
import { EmailField, InputField, Password } from "../../components";
import { getWithAuth, putWithAuth } from "../../utils/APIRequest";
import { Button, Alert } from "reactstrap";
import Loader from "../../components/Loader";
import { UserContext } from "../../UserContext";

function Account() {
  const defaultState = {
    updatingBasicInfo: false,
    updatingPassword: false,
    updatingLimit: false,
    profileLoading: true,
    emailisvalid: true,
    old_password: "",
    new_password: "",
    confirm_password: "",
    b_alert: false,
    p_alert: false,
    p_alert_color: "success",
    p_alert_text: "",
    profile: {}
  };

  const { user, updateUser } = useContext(UserContext);
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user.profile) {
        const { profile } = user;
        setState(prev => ({ ...prev, profile, profileLoading: false }));
      } else {
        const data = await getWithAuth("/profile/");
        const profile = await data.json();
        setState(prev => ({ ...prev, profile, profileLoading: false }));
        updateUser({ ...user, profile });
      }
    };
    fetchUserProfile();
  }, [state.profile, user, updateUser]);

  const updateBasicInfo = async () => {
    setState(prev => ({ ...prev, updatingBasicInfo: true }));
    const { first_name, last_name, email, phone, limit } = state.profile;
    console.log({ first_name, last_name, email, phone, limit });
    const response = await putWithAuth(
      "/profile/",
      {
        first_name,
        last_name,
        email,
        phone,
        limit
      },
      "application/x-www-form-urlencoded"
    );
    const data = await response.json();
    setState(prev => ({ ...prev, updatingBasicInfo: false, b_alert: true }));
    updateUser({ ...user, profile: { ...user.profile, ...data } });
  };

  const updatePassword = async () => {
    setState(prev => ({ ...prev, updatingPassword: true }));
    const response = await putWithAuth(
      "/password/",
      { old_password: state.old_password, new_password: state.new_password },
      "application/x-www-form-urlencoded"
    );
    const { status } = response;
    const data = await response.json();
    if (status === 200) {
      setState(prev => ({
        ...prev,
        updatingPassword: false,
        confirm_password: "",
        old_password: "",
        new_password: "",
        p_alert: true,
        p_alert_text: "Password Updated",
        p_alert_color: "success"
      }));
    } else {
      setState(prev => ({
        ...prev,
        updatingPassword: false,
        p_alert: true,
        p_alert_text: data[Object.keys(data)[0]][0],
        p_alert_color: "danger"
      }));
    }
  };

  const handleChange = ({ target, valid }) => {
    const { profile } = state;
    profile[target.name] = target.value;
    if (target.name === "email") {
      console.log(valid);
      setState(prev => ({ ...prev, profile, emailisvalid: valid }));
      return;
    }
    setState(prev => ({ ...prev, profile }));
  };

  const handlePassword = ({ target }) => {
    setState(prev => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <div>
      <h6> Account Setting </h6>
      <div className="account-grp">
        <InputField
          className="ctrl"
          type="text"
          name="username"
          id="user-name"
          autoComplete="username"
          label="User Name"
          value={state.profile.username || "Fetching..."}
          disabled={true}
        />
      </div>
      <div className="account-grp">
        <h6>Basic Info</h6>
        <hr />
        <Alert
          isOpen={state.b_alert}
          toggle={() => setState(v => ({ ...v, b_alert: false }))}
          color="success"
        >
          Profile Updated
        </Alert>
        <InputField
          className="ctrl"
          type="text"
          name="first_name"
          id="first-name"
          label="First Name *"
          defaultValue={state.profile.first_name}
          placeholder={state.profileLoading ? "fetching..." : ""}
          onKeyUp={handleChange}
        />
        <InputField
          className="ctrl"
          type="text"
          name="last_name"
          id="last-name"
          label="Last Name"
          defaultValue={state.profile.last_name}
          placeholder={state.profileLoading ? "fetching..." : ""}
          onKeyUp={handleChange}
        />
        <InputField
          className="ctrl"
          type="text"
          name="phone"
          id="phonenumber"
          label="Phone Number"
          defaultValue={state.profile.phone}
          placeholder={state.profileLoading ? "fetching..." : ""}
          onKeyUp={handleChange}
        />
        <EmailField
          className="ctrl"
          type="email"
          name="email"
          id="user-email"
          defaultValue={state.profile.email}
          placeholder={state.profileLoading ? "fetching..." : ""}
          label="Email *"
          onKeyUp={handleChange}
        />
        <InputField
          className="ctrl"
          type="number"
          name="limit"
          id="phonenumber"
          label="Limit"
          defaultValue={state.profile.limit}
          placeholder={state.profileLoading ? "fetching..." : ""}
          onKeyUp={handleChange}
        />
        <Button
          block
          color="success"
          disabled={
            state.profileLoading ||
            state.updatingBasicInfo ||
            !state.emailisvalid ||
            !state.profile.first_name
          }
          onClick={updateBasicInfo}
        >
          Update Basic Info
          {state.updatingBasicInfo && <Loader width="25px" />}
        </Button>
      </div>
      <div className="account-grp">
        <h6>Password</h6>
        <hr />
        <Alert
          isOpen={state.p_alert}
          toggle={() => setState(v => ({ ...v, p_alert: false }))}
          color={state.p_alert_color}
        >
          {state.p_alert_text}
        </Alert>
        <Password
          className="ctrl"
          name="old_password"
          id="user-current-password"
          autoComplete="current-password"
          label="Current Password"
          onChange={handlePassword}
          value={state.old_password}
        />
        <div className="mb-3 mt-3"></div>
        <Password
          className="ctrl"
          name="new_password"
          id="user-new-password"
          autoComplete="new-password"
          label="New Password"
          visibilityControl={false}
          value={state.new_password}
          onChange={handlePassword}
        />
        <div className="mb-3 mt-3"></div>
        <InputField
          id="password2"
          label="Confirm Password"
          className="ctrl md"
          type="password"
          name="confirm_password"
          onChange={handlePassword}
          value={state.confirm_password}
          validInput={
            state.confirm_password.length >= 1
              ? state.new_password === state.confirm_password
              : true
          }
          errorText={"password does not match!"}
        />
        <div className="mb-3 mt-3"></div>
        <Button
          block
          color="success"
          disabled={
            state.profileLoading ||
            state.updatingPassword ||
            !state.old_password.length >= 8 ||
            !state.new_password.length >= 8 ||
            state.new_password !== state.confirm_password
          }
          onClick={updatePassword}
        >
          Update Password
          {state.updatingPassword && <Loader width="25px" />}
        </Button>
      </div>
    </div>
  );
}

export default Account;
