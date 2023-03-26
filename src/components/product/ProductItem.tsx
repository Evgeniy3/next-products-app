import { IProducts } from '@/services/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Product.module.scss';

const ProductItem: FC<IProducts> = ({ id, title, description, price, images }) => {
    return (
        <div className={styles.item}>
            <Image src={images[0]} alt='' width={400} height={300} />
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <Link href={`/product/${id}`}>Read more</Link>
        </div>
    )
};

export default ProductItem;