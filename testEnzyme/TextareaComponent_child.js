import React from 'react';
import PropTypes from 'prop-types';
import ChildTextareaComponent from './TextareaComponent_nochild';
const propTypes = {
    title: PropTypes.string,
};

const defaultProps = {
    title: '',
};

function TextareaComponent({ title }) {
    return(
        <div>
            <div data-name="haveChild">
                <ChildTextareaComponent title={title}/>
            </div>
        </div>
    );
}
TextareaComponent.propTypes = propTypes;
TextareaComponent.defaultProps = defaultProps;
export default TextareaComponent;