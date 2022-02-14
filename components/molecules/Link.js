
import NextLink from 'next/link'
import MUILink from '@mui/material/Link'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { forwardRef } from 'react'

const Link = forwardRef(({className, href, children, ...props}, ref) => {
    return(
        <NextLink href={href}>
            <MUILink className={clsx('cursor-pointer', className)} ref={ref} component="a" {...props}>
                {children}
            </MUILink>
        </NextLink>
    )
})

Link.defaultProps = {
    className: ''
}

Link.propTypes = {
    className: PropTypes.string
}

export default Link