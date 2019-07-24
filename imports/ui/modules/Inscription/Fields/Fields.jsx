import React from 'react';
import fields from './array';
import Index from "/imports/ui/components/CustomInput";

const Fields = ({update, state}) => {
    return fields.map(field => (
        <Index
            type={field.type}
            key={field.name}
            update={update}
            value={state[field.name]}
            placeholder={field.placeholder}
            name={field.name}
        />
    ))
};

export default Fields;