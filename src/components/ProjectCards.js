import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import env from '../.env';

function ProjectCards(props) {
  const { src, srcAlt, title, text, githubUrl, onlineUrl } = props;
  return (
    <div className="card m-2 shadow-sm">
      <img src={src} className="card-img-top w-25 p-3 " alt={srcAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div>
        {githubUrl && <a target="_blank" rel="noopener noreferrer" href={githubUrl} className="btn btn-outline-dark mt-2 mr-2" role="button">{env.githubProjectUrlBtnText}</a>}
        {onlineUrl && <a target="_blank" rel="noopener noreferrer" href={onlineUrl} className="btn btn-outline-dark mt-2" role="button">{env.onlineProjectUrlBtnText}</a>}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
