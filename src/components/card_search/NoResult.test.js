import NoResult from './NoResults';
import React from 'react';
import { createShallow } from 'material-ui/test-utils';

describe("<NoResult />", () => {
    let shallow;
    before(() => {
        shallow = createShallow();
    });
    it("should work", () => {
        const wrapper = shallow(<NoResult />);
    });
});