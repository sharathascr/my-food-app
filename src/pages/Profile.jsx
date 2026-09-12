import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Profile.css";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleLogin } from "../store/slices/AuthSlice";

function Profile() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [isEditField, setIsEditField] = useState({
    firstName: false,
    lastName: false,
    age: false,
    gender: false,
  });

  const [isEditEnabled, setIsEditEnabled] = useState(false);

  useEffect(() => {
    const isEdit = Object.values(isEditField).some((val) => val);

    setIsEditEnabled(isEdit);
  }, [isEditField]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profileResponse = await axios.get(
          "http://localhost:7777/auth/profile",
          { withCredentials: true },
        );
        setUser(profileResponse.data.user);

      } catch (err) {
        console.err("Error while fetching the user ", err.message);
        alert("Error while fetching the user");
      }
    }
    fetchProfile();
  }, []);

  const handleCancel = () => {
    Object.keys(isEditField).forEach((prop) => {
      isEditField[prop] = false;
    });
    setIsEditField({
      firstName: false,
      lastName: false,
      age: false,
      gender: false,
    });
  };

  const handleUpdate = async () => {
    try {
      const updateResponse = await axios.patch(
        "http://localhost:7777/auth/update",
        user,
        { withCredentials: true },
      );
      setUser(updateResponse.data.user);

      dispatch(handleLogin(updateResponse.data.user));
      setIsEditEnabled(false);
      setIsEditField({
        firstName: false,
        lastName: false,
        age: false,
        gender: false,
      });
    } catch (err) {
      alert("Error while updating user");
      console.err("Error while updating user", err.message);
    }
  };
  return (
    <div className="profile-page">
      <h1>Personal Information</h1>
      <div className="profile-container">
        <p>
          <span>First Name:</span>
          {!isEditField.firstName ? (
            <span>
              {user?.firstName}
              <MdEdit
                onClick={() =>
                  setIsEditField((prev) => ({ ...prev, firstName: true }))
                }
              />
            </span>
          ) : (
            <input
              value={user?.firstName}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          )}
        </p>
        <p>
          <span>Last Name:</span>
          {!isEditField.lastName ? (
            <span>
              {user?.lastName}
              <MdEdit
                onClick={() =>
                  setIsEditField((prev) => ({ ...prev, lastName: true }))
                }
              />
            </span>
          ) : (
            <input
              value={user?.lastName}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          )}
        </p>
        <p>
          <span>Email:</span>
          <span>{user?.email}</span>
        </p>
        <p>
          <span>Age:</span>
          {!isEditField.age ? (
            <span>
              {user?.age}{" "}
              <MdEdit
                onClick={() =>
                  setIsEditField((prev) => ({ ...prev, age: true }))
                }
              />
            </span>
          ) : (
            <input
              value={user?.age}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, age: e.target.value }))
              }
            />
          )}
        </p>
        <p>
          <span>Gender:</span>
          {!isEditField.gender ? (
            <span>
              {user?.gender}{" "}
              <MdEdit
                onClick={() =>
                  setIsEditField((prev) => ({ ...prev, gender: true }))
                }
              />
            </span>
          ) : (
            <input
              value={user?.gender}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, gender: e.target.value }))
              }
            />
          )}
        </p>
      </div>
      <div>
        {isEditEnabled && (
          <>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleUpdate}>Update Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
