import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

// let backgroundColor = 'black';
// const getSiteUrl = window.location.pathname;

const NavStyles = styled.nav`
  ul {
    display: flex;
    padding: 3rem 10vw;
    margin: 0;
    list-style: none;

    .logo {
      width: 136px;
      margin-right: auto;
    }
  }

  //BALLOONS GENERALS
  li:not(:first-child) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57px;
    height: 64px;
    /* background: ${getSiteUrl === '/kim' ? 'orange' : 'purple'}; */
    background: ${(props) => props.BkgColor || 'blue'};

    font-size: 0.78rem;
    color: white;
    border-radius: 90%;
    position: relative;
    margin: 0px -9px;

    // FIRST BALLOON
    &:nth-child(2) {
      margin-top: 3rem;
      margin-right: -4px;
      /* background-color: ${backgroundColor || 'black'}; */
      &:hover {
        background-color: $color-purple;
        &::before {
          color: $color-purple;
        }
        &::after {
          background-color: $color-purple;
        }
      }
    }

    // SECOND BALLOON
    :nth-child(3) {
      &:hover {
        background-color: $color-grey;
        &::before {
          color: $color-grey;
        }
        &::after {
          background-color: $color-grey;
          height: calc(100vh - 110px);
        }
      }
    }

    //THIRD BALLOON
    &:nth-child(4) {
      margin-top: 3.5rem;
      &:hover {
        background-color: $color-yellow;
        &::before {
          color: $color-yellow;
        }
        &::after {
          background-color: $color-yellow;
        }
      }
    }

    //FOURTH BALLOON
    &:nth-child(5) {
      margin-top: 0.3rem;
      &:hover {
        background-color: $color-grey;
        &::before {
          color: $color-grey;
        }
        &::after {
          background-color: $color-grey;
        }
      }
    }

    //BALLOON TRIANGLES
    &::before {
      content: '▲';
      font-size: 12px;
      color: black;
      text-align: center;
      position: absolute;
      bottom: -10px;
    }

    //BALLOON STRINGS
    &::after {
      position: absolute;
      display: inline-block;
      top: 60px;
      height: calc(100vh - 110px);
      width: 2px;
      margin: 0 auto;
      content: '';
      background: black;
      left: 0; //moet erbij omdat Safari dit mooi afhandelt
      right: 0; //idem
    }
  }

  //TEXT
  a {
    color: white;
    font-family: FuturaMedium;
  }
`;

export default function Nav(props) {
  // useEffect(() => {
  //   if (getSiteUrl === '/kim') {
  //     backgroundColor = 'purple';
  //   }
  //   console.log(getSiteUrl);
  // });

  return (
    <NavStyles>
      <ul>
        <li className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/kim" background="purple">
            KIM
          </Link>
        </li>
        <li>
          <Link to="/work/">WORK</Link>
        </li>
        <li>
          <Link to="/meet">MEET</Link>
        </li>
        <li>
          <Link to="/more">MORE</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
