import React from 'react';
import StyledInput from './StyledInput';

const Index = ({update, blabla, ...rest}) => (
    <div>
        <StyledInput
            onChange={(e) =>
                update(e, e.target || {})
            }
            {...rest}
        />
    </div>
);

export default Index;
