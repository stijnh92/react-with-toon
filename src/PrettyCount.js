import React from 'react'
import PropTypes from 'prop-types'

function PrettyCount({
    label,
    count,
    style,
    ...props
}) {
    
    return (
        <div {...props} style={{ 
            color: "hotpink",
            fontSize: "100px",
            ...style
        }}>
            {label}: {count}
        </div>
    )
}

PrettyCount.propTypes = {
    label: PropTypes.string,
    count: PropTypes.number,
    style: PropTypes.object,
}

export default PrettyCount
