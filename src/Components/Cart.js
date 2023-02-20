import React,{useState, useEffect} from 'react'
import {Navbar} from './Navbar'
import {auth,fs} from '../Config/Config'
import { CartProducts } from './CartProducts';
import { Puma } from './Puma';
import {useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal';

export const Cart = () => {


    const navigate = useNavigate();

    // show modal state
    const [showModal, setShowModal]=useState(false);

    // trigger modal
    const triggerModal=()=>{
        setShowModal(true);
    }

    // hide modal
    const hideModal=()=>{
        setShowModal(false);
    }

    // getting current user function
    function GetCurrentUser(){
        const [user, setUser]=useState(null);
        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('users').doc(user.uid).get().then(snapshot=>{
                        setUser(snapshot.data().FullName);
                    })
                }
                else{
                    setUser(null);
                }
            })
        },[])
        return user;
    }

    const user = GetCurrentUser();
    // console.log(user);
    
    // state of cart products
    const [cartProducts, setCartProducts]=useState([]);

    // getting cart products from firestore collection and updating the state
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                    const newCartProduct = snapshot.docs.map((doc)=>({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);                    
                })
            }
            else{
                console.log('user is not signed in to retrieve cart');
            }
        })
    },[])

    // console.log(cartProducts);

     // getting the qty from cartProducts in a seperate array
     const qty = cartProducts.map(cartProduct=>{
        return cartProduct.qty;
    })

     // reducing the qty in a single value
     const reducerOfQty = (accumulator, currentValue)=>accumulator+currentValue;

     const totalQty = qty.reduce(reducerOfQty,0);
 
     // console.log(totalQty);

     // getting the TotalProductPrice from cartProducts in a seperate array
    const price = cartProducts.map((cartProduct)=>{
        return cartProduct.TotalProductPrice;
    })

    // reducing the price in a single value
    const reducerOfPrice = (accumulator,currentValue)=>accumulator+currentValue;

    const totalPrice = price.reduce(reducerOfPrice,0);

     // state of totalProducts
     const [totalProducts, setTotalProducts]=useState(0);
     // getting cart products   
     useEffect(()=>{        
         auth.onAuthStateChanged(user=>{
             if(user){
                 fs.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                     const qty = snapshot.docs.length;
                     setTotalProducts(qty);
                 })
             }
         })       
     },[])  

    // global variable
    let Product;
    
    // cart product increase function
    const cartProductIncrease=(cartProduct)=>{
        // console.log(cartProduct);
        Product=cartProduct;
        Product.qty=Product.qty+1;
        Product.TotalProductPrice=Product.qty*Product.price;
        // updating in database
        auth.onAuthStateChanged(user=>{
            if(user){
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(()=>{
                    console.log('increment added');
                })
            }
            else{
                console.log('user is not logged in to increment');
            }
        })
    }

    // cart product decrease functionality
    const cartProductDecrease =(cartProduct)=>{
        Product=cartProduct;
        if(Product.qty > 1){
            Product.qty=Product.qty-1;
            Product.TotalProductPrice=Product.qty*Product.price;
             // updating in database
            auth.onAuthStateChanged(user=>{
                if(user){
                    fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(()=>{
                        console.log('decrement');
                    })
                }
                else{
                    console.log('user is not logged in to decrement');
                }
            })
        }
    }

  

    async function displayRazorpay() {
    //     let a= [];
    //     const uid = auth.currentUser.uid;
    //     const cartData = await fs.collection('Cart ' + uid).get();
    //     for(var snap of cartData.docs){
    //         var data = snap.data();
    //         data.ID = snap.id;
    //         a.push(data);
    //          await fs.collection('Cart ' + uid).doc(snap.id).delete();
    //     }
    //     await fs.collection('Cart'+ user).add({
    //         FullName: user,
    //         OrderId: "sda",
    //         CartPrice: totalPrice,
    //         CartQty: totalQty,
    //         cartValues: a
    //     })
    // }




        const data = await fetch("http://localhost:3001/razorpay", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json; charset=utf-8',
          },
          body:JSON.stringify({
            amount: totalPrice,
          })
        }).then((t) => t.json());
       
        console.log(data);
       
        const options = {
          key: "rzp_test_yBoqfRWvDQWfYD",
          currency: "INR",
          amount: data.amount,
          name: "E-Commerce",
          description: "Wallet Transaction",
          order_id: data.id,
          handler: async function (response) {
            console.log(response);
                    let a= [];
                    const uid = auth.currentUser.uid;
                    const cartData = await fs.collection('Cart ' + uid).get();
                    for(var snap of cartData.docs){
                        var data = snap.data();
                        data.ID = snap.id;
                        a.push(data);
                        await fs.collection('Cart ' + uid).doc(snap.id).delete();
                    }
                    await fs.collection('Cart '+ user).add({
                        FullName: user,
                        OrderId: response.razorpay_order_id,
                        CartPrice: totalPrice,
                        CartQty: totalQty,
                        cartValues: a
                    })
                    navigate('/');
                    toast.success('Your order has been placed successfully', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
          }
        };
       
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    

    return (
        <>
            {/* <Navbar user={user} totalProducts={totalProducts}/>            */}
            <br></br>
            <Puma />
            {/* {cartProducts.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Cart</h1>
                    <div className='products-box'>
                        <CartProducts cartProducts={cartProducts}  cartProductIncrease={cartProductIncrease}
                           cartProductDecrease={cartProductDecrease}/>
                    </div>
                    <div className='summary-box'>
                        <h5>Cart Summary</h5>
                        <br></br>
                        <div>
                        Total No of Products: <span>{totalQty}</span>
                        </div>
                        <div>
                        Total Price to Pay: <span>$ {totalPrice}</span>
                        </div>
                        <br></br>
                        <button className='btn btn-secondary btn-md' 
                        onClick={displayRazorpay}>Cash on Delivery</button>
                        <h6 className='text-center'
                        style={{marginTop: 7+'px'}}>OR</h6>
                        <button className='btn btn-secondary btn-md' 
                        onClick={()=>triggerModal()}>Cash on Delivery</button>
                    </div>   
                </div>
            )}
            {cartProducts.length < 1 && (
                <div className='container-fluid'>No products to show</div>
            ) }   

             {showModal===true&&(
                <Modal TotalPrice={totalPrice} totalQty={totalQty}
                    hideModal={hideModal}
                />
            )}             */}
        </>
    )
}