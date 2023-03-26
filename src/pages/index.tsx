import Home from '@/components/screens/home/Home';
import { ProductService } from '@/services/prosuct.service';
import { IProductsData } from '@/services/types';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<IProductsData> = ({products}) => {
  
  return <Home products={products}/>
};

export const getStaticProps: GetStaticProps<IProductsData> = async () => {
  const products = await ProductService.getAll();
  
  return {
    props: {products},
    revalidate: 360,
  }
}

export default HomePage;
