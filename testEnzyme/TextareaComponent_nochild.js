import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

function TextareaComponent({ title }) {
    return(
        <textarea name="title" rows="3" cols="102" placeholder="please enter value" value={title} />
    );
}
TextareaComponent.propTypes = propTypes;
TextareaComponent.defaultProps = defaultProps;
export default TextareaComponent;