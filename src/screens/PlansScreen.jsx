import React, { useEffect, useState } from 'react';
import db from '../firebase';
import './PlansScreen.scss';

function PlansScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();

          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        console.log(products);
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    console.log(priceId);
  };
  console.log(products);
  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData], id) => {
        console.log('id: ', productId, 'data: ', productData);

        return (
          <div className="plansScreen__plan" key={id}>
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
