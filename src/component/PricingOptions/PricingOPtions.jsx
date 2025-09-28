import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOPtions = ({pricingPromise}) => {

   const pricingData = use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-5xl'>Get Our MemberShip</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}/>)
                }
            </div>
        </div>
    );
};

export default PricingOPtions;