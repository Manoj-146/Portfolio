import React,{ Suspense } from 'react';
const Header=React.lazy(()=>import ('./components/Header'));
const MainSection=React.lazy(()=>import ('./components/MainSection'));
const About=React.lazy(()=>import ('./components/About'));
const Project=React.lazy(()=>import ('./components/Project'));
const Resume=React.lazy(()=>import ('./components/Resume'));
const Contact=React.lazy(()=>import ('./components/Contact'));
const Footer=React.lazy(()=>import ('./components/Footer'));
const App=()=>{

    return(<>
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <MainSection/>
            <About/>
            <Project/>
            <Resume/>
            <Contact/>
            <Footer/>
        </Suspense>
    </>);
}

export default App;