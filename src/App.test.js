// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import  React from 'react';
import App from "./App";
import ReactDOM from 'react-dom'
import SamuraiJSApp from "./App";

it ('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<SamuraiJSApp />, div);
   ReactDOM.unmountComponentAtNode(div);
});