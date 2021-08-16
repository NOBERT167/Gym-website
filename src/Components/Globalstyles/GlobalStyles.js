import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Btn = styled(LinkScroll)`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  color: #010606;
  white-space: nowrap;
  outline: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.25s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Btn2 = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  color: #010606;
  white-space: nowrap;
  outline: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.25s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
