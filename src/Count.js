import React, { useCallback, useEffect, useState } from 'react'
import PrettyCount from './PrettyCount'

function Count({
    label,
    ...props
}) {
    const [count, setCount] = useState(69)
    const handleIncrement = useCallback((amount) => {
        setCount(count => count + amount)
    }, [])

    return (
        <div {...props}>
            <PrettyCount label={label} count={count} style={{ marginBottom: "100px" }}/>
            <button onClick={() => { handleIncrement(1) }}>
                +1
            </button>
        </div>
    )
}

export default Count
