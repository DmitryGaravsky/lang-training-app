import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
//
import "./App.css";
import Layout from './components/Layout'
import Dashboard from "./pages/Dashboard";
import Training from "./pages/Training";
import Dictionary from "./pages/Dictionary";
//
import jsonDataService from "./API/jsonDataService";
const AppDataContext = createContext(null);
//
export default function App() {
    const [langPair] = useState({ sourceLang: 'es', targetLang: 'en' })
    const [data, setData] = useState({
        source: [],
        target: [],
        categories: []
    })
    useEffect(() => {
        setData(jsonDataService.getData(langPair.sourceLang, langPair.targetLang))
    }, [langPair])
    //
    return (
        <AppDataContext.Provider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='' element={<Dashboard />} />
                        <Route path='training' element={<Training />} />
                        <Route path='dict' element={<Dictionary />} />
                        <Route path='*' element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppDataContext.Provider>
    );
}

export { AppDataContext };