import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Questions? Contact us.</li>
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Account</li>
          <li className="fListItem">Investor Relations</li>
          <li className="fListItem">Ways To Watch</li>
          <li className="fListItem">Privacy</li>
          <li className="fListItem">Corporate IInformation</li>
          <li className="fListItem">Speed Test</li>
          <li className="fListItem">Only On netflix</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Help Center</li>
          <li className="fListItem">Media Center</li>
          <li className="fListItem">Jobs</li>
          <li className="fListItem">Jobs</li>
          <li className="fListItem">Cookie Preferences</li>
          <li className="fListItem">Contact US</li>
          <li className="fListItem">Legal Notices</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Syrine Ben Ameur</div>
    </div>
  );
};

export default Footer;
