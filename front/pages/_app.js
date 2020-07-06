import React from 'react';
import {Helmet} from 'react-helmet';
import AppLayout from '../components/AppLayout'

const App = ({Component, pageProps}) => {
    return (
        <>
        <Helmet
                title="Resume"
                htmlAttributes={{ lang: 'ko' }}
                meta={[{
                  charset: 'UTF-8',
                }, {
                  name: 'viewport',
                  content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
                }, {
                  'http-equiv': 'X-UA-Compatible', content: 'IE=edge',
                }, {
                  name: 'description', content: ' Resume',
                }, {
                  name: 'og:title', content: 'Resume',
                }, {
                  name: 'og:description', content: 'Resume',
                }, {
                  property: 'og:type', content: 'website',
                }]}
                link={[{
                  rel: 'shortcut icon', href: '/favicon.ico',
                }, {
                  rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css',
                }, {
                  rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
                }, {
                  rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
                }]}
            />
            <>
              <AppLayout>
                  <Component {...pageProps}/>
              </AppLayout>
            </>   
        </>
    );

};

export default App;