import React, { useState, useEffect, useMemo, createContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
// Theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// Pages
import Dashboard from "./pages/Dashboard";
import Training from "./pages/Training";
import Dictionary from "./pages/Dictionary";
// Components
import NavBar from './components/NavBar/NavBar'
// Data
import routes from './pages/routes'
import jsonDataService from "./API/jsonDataService";
import progressService from "./API/progressService";
const AppDataContext = createContext(null);
// Internals
const Layout = () => {
    return (
        <>
            <NavBar routes={routes} />
            <Container fixed>
                <Outlet />
            </Container>
        </>
    )
}
// APP
const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = useMemo(() => {
        return createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } })
    }, [isDarkMode]);
    //
    const [langPair] = useState({ sourceLang: 'es', targetLang: 'en' })
    const [data, setData] = useState({
        source: [],
        target: [],
        categories: []
    })
    useEffect(() => {
        const jsonData = jsonDataService.getData(langPair.sourceLang, langPair.targetLang)
        jsonData.categories.forEach(x => progressService.setTotalCount(x.key, x.count))
        setData(jsonData)
    }, [langPair])
    //
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppDataContext.Provider value={data}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index path='' element={<Dashboard />} />
                            <Route path='training/:category' element={<Training />} />
                            <Route path='dict' element={<Dictionary />} />
                            <Route path='*' element={<Dashboard />} />
                        </Route>
                        <Route path='*' element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </AppDataContext.Provider>
        </ThemeProvider>
    );
}

export default App
export { AppDataContext };