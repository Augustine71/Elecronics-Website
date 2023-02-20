import React from 'react';

export const DeliveryInstructions = () => {
    return (
        <React.Fragment>
           <div className='deliveries'>
                <div className='delivery_instructions'>Delivery Instructions</div>
                <div className='delivery_together'>
                    <div className='delivery_cod'>
                        <img src='https://imgur.com/qcwtGrC.jpg' alt='cod' className='delivery_cod_img'/>
                        <div className='delivery_cod_together'>
                            <div className='delivery_cod_title'>COD Available</div>
                            <div className='delivery_cod_content'>Free shipping all over India</div>
                        </div>
                    </div>
                    <div className='delivery_cashback'>
                        <img src='https://imgur.com/KYG5tKr.jpg' alt='cashback' className='delivery_cashback_img'/>
                        <div className='delivery_cashback_together'>
                            <div className='delivery_cashback_title'>20% Cashback</div>
                            <div className='delivery_cashback_content'>When you place an order and pay online</div>
                        </div>
                    </div>
                </div>
            </div>
        <h2 className="delivery_instruction_title">
            <b>Complete your payment using any of these payment options</b>
        </h2>

        <div className="delivery_options">
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/amex-icn.png" width="7" height="4" alt="amex" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/master-icn.png" width="7" height="4" alt="master-card" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/visa-icn.png" width="7" height="4" alt="visa" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/bhim-icn.png" width="7" height="4" alt="BHIM-UPI" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/gpay-icn.png" width="7" height="4" alt="Google Pay" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/netbanking-icn.png" width="7" height="4" alt="Net Banking" className="payment-option" loading="lazy" />
                    </span>
                    <span className="payment-option-wrapper">
                        <img src="https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_200,c_limit/v1603435295/staging/Home/Images/cash-icn.png" width="7" height="4" alt="Cash on Delivery" className="payment-option" loading="lazy" />
                    </span>
            </div>
        </React.Fragment>
    );
}