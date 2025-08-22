// app/components/ProductHighlight.jsx
import dbConnect, { collectionNameObj } from '../../lib/dbConnect';
import ProductHighlightClient from './ProductHighlightClient';

const ProductHighlight = async () => {
  const productsCollection = dbConnect(collectionNameObj.servicesCollection);
  const products = await productsCollection
    .find({})
    .sort({ _id: -1 })
    .limit(8)
    .toArray();

  // Pass data down to Client Component
  return <ProductHighlightClient products={products} />;
};

export default ProductHighlight;
