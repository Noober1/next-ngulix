import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

function MyApp({ Component, pageProps }) {

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

    const getLayout = Component.withLayout || ((page) => page)

    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    )
}
  
export default MyApp