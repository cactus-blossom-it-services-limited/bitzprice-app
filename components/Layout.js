import Head from 'next/Head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitzprice</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
         {props.children}
        </div>
    </div>
);

export default Layout;