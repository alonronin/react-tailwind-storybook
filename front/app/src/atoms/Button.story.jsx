import React from 'react';

import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

const button = () => {
    const title = text('Title', 'Submit');
    const disabled = boolean('Disabled', false);
    return (
        <Button disabled={disabled} onClick={e => action('clicked')(e.target)}>
            {title}
        </Button>
    )
};

button.story = {
    // name: 'Button',
    parameters: {
        // centered: { disable: true }
    }
}

export default button;