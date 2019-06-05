import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Spinner() {
  return (
    <div className="spinner-custom">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;