import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { wrapper } from '../redux';
import { PersistGate } from "redux-persist/integration/react";
import NextNprogress from 'nextjs-progressbar';
import { useSelector, useStore } from 'react-redux';
import { selectConfig } from '../redux/slices/configSlice';

function MyApp({ Component, pageProps }) {

    const store = useStore((state) => state);
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
        <PersistGate persistor={store.__persistor}>
            <ThemeProvider theme={themes[config.theme]}>
                <CssBaseline/>
                <NextNprogress
                    color={themes[config.theme].palette.primary.main || '#17B5F1'}
                    startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={true}
					options={{
						showSpinner:true
					}}
                />
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </PersistGate>
    )
}

export async function getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {
        pageProps: pageProps
    };
}

// const makeStore = () => store;
  
// export default withRedux(makeStore)(MyApp);
export default wrapper.withRedux(MyApp);