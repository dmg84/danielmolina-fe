import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NotFound from './index';
import Tumbleweed from '../../images/Tumbleweed.gif';
import { mount } from '../../test/test.utils';

describe('NotFound', () => {
    it('should match the snapshot', () => {
        const container = render(mount(<NotFound />));
        expect(container).toMatchSnapshot();
    });

    it('it should render h2, img and link', async () => {
        const { getByRole, getByText } = render(mount(<NotFound />));
        const image = getByRole('img');
        await waitFor(() => expect(image.getAttribute('src')).toBe(Tumbleweed));
        expect(image).toHaveAttribute('alt', 'tumbleweed meme');
        expect(document.querySelector('h2')).toHaveTextContent('404 - Page not found');
        expect(document.querySelector('p')).toHaveTextContent('Please, go to main page.');
        expect(getByText('main page').getAttribute('href')).toBe('/');
    });
});
