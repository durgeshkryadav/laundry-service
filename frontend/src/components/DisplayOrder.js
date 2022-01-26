import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
import TopBody from "./TopBody"
import Displayfn from "./FetchData/Displayfn"
// import DisplayAsTable from "./DisplayAsTable"

const DisplayOrder = () => {
    return <div>
        <Header />
        <TopBody />
        {/* <DisplayAsTable /> */}
        <Displayfn />
        <Footer />
    </div>;
};

export default DisplayOrder;
