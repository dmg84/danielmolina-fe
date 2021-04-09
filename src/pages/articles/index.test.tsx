import React from 'react';
import { render } from '@testing-library/react';
import Articles from './index';
import { mount } from '../../test/test.utils';

describe('Articles', () => {
    it('should match the snapshot', () => {
        const container = render(mount(<Articles />));
        expect(container).toMatchSnapshot();
    });
});
