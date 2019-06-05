import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import env from '../.env';

function Footer() {
  return (
    <footer className="">
      <div className="container-fluid bg-dark d-block">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center">
              <a className="text-light" target="_blank" rel="noopener noreferrer" href={env.githubUrl}>
                <i className="fab fa-github fa-lg white-text fa-2x m-2"> </i>
              </a>
              <a className="text-light" target="_blank" rel="noopener noreferrer" href={env.linkedinUrl}>
                <i className="fab fa-linkedin-in fa-lg white-text fa-2x m-2"> </i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mx-auto text-light mb-0">{env.year} {env.username}</p>
      </div>
    </footer>
  );
}

export default Footer;