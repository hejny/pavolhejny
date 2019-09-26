import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
//import '../style/index.css';

export default () => (
    <Layout>
        <div className="card">
            <h1>Pavol Hejný</h1>
        </div>

        <div className="card">
            <h2>Vyvíjím</h2>
        </div>

        <style jsx>{`
            .card {
                background-color: #997777;
                height: 80vh;
            }
        `}</style>
    </Layout>
);
