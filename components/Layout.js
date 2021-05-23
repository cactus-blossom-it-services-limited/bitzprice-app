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
        {props.children}

    </div>
);

export default Layout;