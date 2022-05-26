import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';

const CheckoutForm = ({ data, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [caedError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setSProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, price } = data;
    console.log(price)

    useEffect(() => {
        fetch('https://safe-falls-41750.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('');
        setSProcessing(true);
        refetch();


        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret
            ,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: data?.userName,
                        email: data?.userEmail,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSProcessing(false)

        }
        else {
            setCardError('');
            setTransactionId(paymentIntent)
            console.log(paymentIntent.id);
            setSuccess('Cnngreates!@! Your Payment is compleated')
            refetch();

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id,
            }
            // update payment to backend // store payment on database
            fetch(`https://safe-falls-41750.herokuapp.com/purchase/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json()).then(data => {
                setSProcessing(false);
                console.log(data)
                Swal.fire(
                    'Congratss',
                    'Your Payment is Recived Successfully',
                    'success'
                )
                window.location.reload()
                refetch()
            })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                caedError && <p className='text-red-900'>{caedError} </p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success} {transactionId}  </p>
                </div>
            }
            {/* {y
            success && <div className='text-green-500'>
                <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
            </div>
        } */}
        </div>
    );
};

export default CheckoutForm;