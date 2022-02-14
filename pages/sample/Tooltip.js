import React from 'react'

const Tooltip = () => {
    return (
        <Tooltip
            // placement="top || left || bottom || right"
            // arrow={true}
            title={
                <Typography>
                    Test
                </Typography>
            }
        >
            <span>Tooltip</span>
        </Tooltip>
    )
}

export default Tooltip