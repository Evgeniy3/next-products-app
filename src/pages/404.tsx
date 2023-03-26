import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import React from 'react';


const NotFoundPage: NextPage = () => {
    return (
        <Layout title='NotFound'>
            <div className='root'>
                <h1>
                    <span>😕</span>
                    <br />
                    Ничего не найдено
                </h1>
                <p className='description'>
                    К сожалени данная страница отсутствует в нашем интернет-магазине
                </p>
            </div>
        </Layout>
    )
};

export default NotFoundPage;