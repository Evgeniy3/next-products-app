import React, { FC, PropsWithChildren } from 'react';
import Meta, { IMeta } from '../seo/Meta';
import Header from './header/Header';

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  return (
    <Meta title={title} description={description}>
        <Header />
        {children}
    </Meta>
  )
};

export default Layout;