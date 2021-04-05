/*import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
<<<<<<< HEAD
    ReactDOM.render(<App />, div);
=======
    ReactDOM.render(<App/>, div);
>>>>>>> 7e44106961996ffdd79a3999c4c1800a4225a48b
    ReactDOM.unmountComponentAtNode(div);
});
