import React, {  useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { SideBar } from './components/SideBar/SideBar';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
const ProductListing = React.lazy(() => import('./pages/ProductListing/ProductListing'))

function App() {
  const [filterData, setFilterData] = useState(null);
  const [notify, setNotify] = useState(false)
  const [sideBarBtn,setSideBarBtn] = useState(false)

  const notifyFunc = () => {
    setTimeout(() => {
      setNotify(false)
    },1000)
  };

  if(notify){
    notifyFunc()
  };

  return (
    <div className="App">
      <Header setFilterData={setFilterData} setSideBarBtn={setSideBarBtn}/>
      <div className='d-flex justify-content-between'>
        {notify && <p className='added'>Added</p>}
        <SideBar setFilterData={setFilterData} sideBarBtn={sideBarBtn}/>
        <Routes>
          {/* Lazy component */}
            <Route path='/' element={
              <React.Suspense fallback={<div>please wait...</div>}>
                <ProductListing filterData={filterData} setNotify={setNotify}/>
              </React.Suspense>
            } 
            />

          <Route path='//Product-Details/:productId' element={<ProductDetails setNotify={setNotify}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
