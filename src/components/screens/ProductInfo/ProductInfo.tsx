import Layout from '@/components/layout/Layout';
import ProductItem from '@/components/product/ProductItem';
import { IProductsSingle } from '@/services/types';
import React, { FC } from 'react';

const ProductInfo: FC<IProductsSingle> = ({product}) => {
  
  return (
    <Layout title={product.title} description={product.description}>
        <ProductItem {...product}/>
    </Layout>
  )
};

export default ProductInfo;