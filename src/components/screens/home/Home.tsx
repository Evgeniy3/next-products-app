import React, { FC } from 'react';
import styles from './Home.module.scss';
import Layout from '@/components/layout/Layout';
import { IProducts, IProductsData } from '@/services/types';
import ProductItem from '@/components/product/ProductItem';

const Home: FC<IProductsData> = ({ products }) => {

  return (
    <Layout title='Home' description='Products'>
      <div className={styles.container}>
        {products.length ? products.map((product) => <ProductItem key={product.id} {...product} />) : <div>Products not found</div>}
      </div>
    </Layout>
  )
};

export default Home;