import React from 'react'
import Logo from '../Logo/Logo'
import FooterLinks from './FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <footer>
      <Logo id="footer-logo"/>
      <FooterLinks />
      <p id="copyright">&copy;2024 Filmkväll</p>
    </footer>
  );
}

export default Footer