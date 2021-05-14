import React from 'react';

import { Link } from 'gatsby';

import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';

const FooterStyles = styled.footer`
  background-color: black;
  font-family: FuturaLight;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 3rem 3rem;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;

  ul {
    list-style: none;
  }

  //LEFT COLUMN
  ul:first-child {
    //LOGO
    li:first-child {
      fill: white;
      width: 7rem;
    }
    //COPYRIGHT
    li {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }
  }

  // MIDDLE COLUMN
  .sitemap {
    display: flex;
    flex-direction: column;
    order: 2;

    //SITEMAP TITEL
    &__titel {
      margin-bottom: 0.5rem;
      font-family: 'FuturaHeavy', sans-serif;
      font-weight: normal;
      color: $color-white;
    }

    // SITEMAP ITEMS
    > a {
      color: $color-grey;
      line-height: 1.8rem;

      &:hover {
        color: white;
      }
    }
  }

  // CONTACT COLUMN
  .contact {
    order: 3;
    display: flex;
    flex-direction: column;

    // CONTACT TITEL
    &__titel {
      margin-bottom: 0.5rem;
      font-family: 'FuturaHeavy', sans-serif;
      font-weight: normal;
      color: $color-white;
    }

    > a {
      line-height: 1.8rem;
      color: $color-grey;

      &:hover {
        color: white;
      }
    }
  }


  //INSTAGRAM ICON
  .icon-logo_ig {
    margin-left: 0.5rem;

    &:hover {
      opacity: 0.6;
    }
  }

  //ICON FACEBOOK
  .icon-logo_fb:hover {
    opacity: 0.6;
  }

  //ICON LINKEDIN
  .icon-Linkedin {
    margin-left: 0.5rem;
    position: relative;
    left: -2px;
    top: 7px;

    &:hover {
      opacity: 0.6;
    }
  }

  // MEDIAQUERIES
  @media (max-width: $breakpoint-tablet) {
    footer {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 3rem;

      .logo {
        margin-top: 3rem;
        order: 3;
      }

      .sitemap {
        order: 1;
      }

      .contact {
        margin-top: 3rem;
        order: 2;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul className="logo">
        <li>
          <Logo />
        </li>
        <li className="logo__copyright">
          &copy; {new Date().getFullYear()} Kim Westerlink
        </li>
      </ul>
      <ul className="sitemap">
        <li className="sitemap__titel">SITEMAP</li>
        <li>
          <Link to="/">KIM</Link>
        </li>
        <li>
          <Link to="/pizzas/">WORK</Link>
        </li>
        <li>
          <Link to="/slicemasters">MEET</Link>
        </li>
        <li>
          <Link to="/order">MORE</Link>
        </li>
      </ul>
      <ul className="contact">
        <li className="contact__titel">CONTACT</li>
        <li href="">kimwesterlink@live.nl</li>
        <li href="">+31 6 29 23 46 45</li>
        <li className="contactFooter__socials" />
      </ul>
    </FooterStyles>
  );
}
