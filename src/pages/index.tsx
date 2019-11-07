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
            <Column>
                <h2>Vyvíjím</h2>
                Různé aplikace
                . Pracoval jsem např. na
            </Column>
            <Column>
                <h2>Projekty</h2>
            </Column>
        </Card>

        <Card uri="/hacker" title="Učebnice matematiky"></Card>


        <Card uri="/hacker" title="Prototipuju"></Card>

        <Card uri="/organizator" title="Organizuju akce"></Card>

        <Card uri="/talks" title="Mluvím"></Card>

        <Card uri="/talks" title="Píšu"></Card>

        <Card uri="/talks" title="Mentoruju a porotcuju"></Card>

        <Card uri="/talks" title="Mentoruju a porotcuju">

            Mám přehled o tom, co za akce se v Čechách dějí. Proto spolu s ... rozesílám pravidelný měsíční email o eventech.


        </Card>

        <Card uri="/talks" title="Znám Prahu"></Card>

        <Card uri="/talks" title="Maluju"></Card>

        <Card uri="/talks" title="Dělám Faily"></Card>

        <Card uri="/kontakt" title="Kontakt"></Card>
    </Layout>
);
