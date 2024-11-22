import React from 'react'

const Loader = (props) => {
    const { bgColor } = props

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ borderTopColor: bgColor, borderRightColor: bgColor, borderLeftColor: bgColor }} class="loader"></div>
        </div>
    )
}

export default Loader