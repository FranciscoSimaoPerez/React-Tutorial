import React from 'react';
// import PropTypes from 'prop-types';

const TodoItem = ({text}) => (
    <li>
        {text}
    </li>
)

// // propTypes
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired
// }

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;