import React from 'react';
import CreatureCard from './CreatureCard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const component = renderer
        .create(<CreatureCard />)
        .toJson();
    expect(component).toMatchSnapshot();
});