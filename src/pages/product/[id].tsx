import ProductInfo from "@/components/screens/ProductInfo/ProductInfo";
import { ProductService } from "@/services/prosuct.service";
import { IProductsSingle } from "@/services/types";
import { GetServerSideProps, NextPage } from "next";

const ProductPage: NextPage<IProductsSingle> = ({product}) => {
  console.log(product);
  
  return <ProductInfo product={product}/>
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  
  const product = await ProductService.getById(String(query.id))
  
  return {
    props: {product}
  }
}


export default ProductPage;