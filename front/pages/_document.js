import React from 'react';
import Document, {Main, NextScript, Head} from 'next/document';
import {Helmet} from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';




export default class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet();
        //글로벌 스타일 여기에다가 
        const page = context.renderPage((App)=> (props)=> sheet.collectStyles(
            <App {...props}/>  
        ));
        const styleTags = sheet.getStyleElement();
        return {...page, helmet: Helmet.renderStatic(), styleTags};
    }

  render() {
        const {htmlAttributes, bodyAttributes,...helmet} = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return (
            <html {...htmlAttrs}>
                <Head>
                    {this.props.styleTags}
                    {Object.values(helmet).map(el=>el.toComponent())}
                </Head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
  }
};

