import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: #4CAF50;
  padding: 5px 25px;
  font-size: 1em;
  margin-top: 5px;
  border: 2px solid #4CAF50;
  cursor: pointer;
`;

export const Logout = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};