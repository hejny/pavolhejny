import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Column } from '../components/Column';

export default () => (
    <Layout>
        {/*
        <Card uri="/" title="Pavol Hejný" className="about">
            <h1>Pavol Hejný</h1>
        </Card>
        */}
        <Card uri="/programator" title="Vyvíjím">
            <Column columns={'aaaa'}>
                <h2>Vyvíjím</h2>
                Různé aplikace. Pracoval jsem např. na
            </Column>
            <Column>
                <h2>Projekty</h2>
            </Column>
        </Card>

        <Card uri="/hacker" title="Prototipuju"></Card>

        <Card uri="/organizator" title="Organizuju akce"></Card>

        <Card uri="/talks" title="Mluvím"></Card>

        <Card uri="/talks" title="Znám Prahu"></Card>

        <Card uri="/kontakt" title="Kontakt"></Card>
    </Layout>
);
