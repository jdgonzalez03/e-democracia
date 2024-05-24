/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { VotingForm } from "./VotingForm";
import axios from "axios";
import { userUrl } from "../constants/urls";
import "./Voting.css";

export const Voting = ({ user }) => {
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`${userUrl}/${String(user.code)}`); // Asegúrate de que user.id es el identificador correcto
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo();
  }, []);

  const refresh = async () => {
    try {
      const userResponse = await axios.get(`${userUrl}/${user.code}`);
      setUserInfo(userResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="voting-section">
      <h2 className="yellow">Votaciones</h2>
      <VotingForm refresh={refresh} user={userInfo} />
    </div>
  );
};
