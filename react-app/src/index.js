import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Test extends React.Component {
  render() {
    return (
      <p>Test</p>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Test/>);
