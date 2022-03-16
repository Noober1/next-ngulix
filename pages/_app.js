import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { wrapper } from '../redux';
import { useSelector } from 'react-redux';
import { selectConfig } from '../redux/slices/configSlice';
import '../styles/global.css'
import LoadingScreen from '../components/organisms/LoadingScreen';

function MyApp({ Component, pageProps }) {

    const config = useSelector(selectConfig)

    const themes = {
        light: createTheme({
            palette:{
                mode:'light'
            }
        }),
        dark:createTheme({
            palette:{
                mode:'dark'
            }
        })
    }

    const getLayout = Component.withLayout || ((page) => page)

    return(
        <ThemeProvider theme={themes[config.theme]}>
            <CssBaseline/>
            {getLayout(<Component {...pageProps} />)}
            <LoadingScreen
                delay={30}
            />
        </ThemeProvider>
    )
}

export default wrapper.withRedux(MyApp);