import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
// import TopBody from "./TopBody"
import Displayfn from "./FetchData/Displayfn"
// import Aside from "./Aside"

const DisplayOrder = () => {
    return <div>
        <Header />
        {/* <Aside /> */}
        {/* <TopBody /> */}
        <Displayfn />
        <Footer />
    </div>;
};

export default DisplayOrder;
