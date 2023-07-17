import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
           {showProducts && <Products/>}   {/*showProducts로 되어있으면 제품을 보여줘*/}
           <button onClick={()=> setShowProducts((show) => !show)}>Toggle</button> 
           {/* 버튼을 클릭하면 제품을 보여줄지 않보여줄지 토글 */}
        </div>
    );
}

