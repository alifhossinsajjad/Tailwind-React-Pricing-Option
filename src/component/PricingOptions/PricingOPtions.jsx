import React, { use } from 'react';

const PricingOPtions = ({pricingPromise}) => {

   const pricingData = use(pricingPromise)
    console.log(pricingData);
    return (
        <div>
            
        </div>
    );
};

export default PricingOPtions;