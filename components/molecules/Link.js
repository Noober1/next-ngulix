
import NextLink from 'next/link'
import MUILink from '@mui/material/Link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Link = ({className, href, children, ...props}) => {
    return(
        <NextLink href={href}>
            <MUILink className={clsx('cursor-pointer', className)}>
                {children}
            </MUILink>
        </NextLink>
    )
}

Link.propTypes = {
    className: PropTypes.string
}

export default Link