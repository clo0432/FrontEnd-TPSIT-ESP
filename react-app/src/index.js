import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Test extends ReactDOM {
  render() {
    return (
      <p>Test</p>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Test/>);
