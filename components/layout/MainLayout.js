import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const MainLayout = ({children}) => {

    const lightTheme = createTheme({
        palette:{
            mode:'light'
        }
    })

    const darkTheme = createTheme({
        palette:{
            mode:'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            {children}
        </ThemeProvider>
    )
}

export default MainLayout