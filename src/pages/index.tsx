import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Column } from '../components/Column';
import { CARD_DESIGNS } from '../config/config';

export default () => (
    <Layout>
        {/*
        <Card uri="/" title="Pavol Hejný" className="about">
            <h1>Pavol Hejný</h1>
        </Card>
        */}
        <Card cardDesign={CARD_DESIGNS.ABOUT} uri="/programator" title="Vyvíjím">
            <Column>
                <h2>Vyvíjím</h2>
                Různé aplikace . Pracoval jsem např. na
            </Column>
            <Column>
                <h2>Projekty</h2>
            </Column>
        </Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/hacker" title="Učebnice matematiky"></Card>

        <Card cardDesign={CARD_DESIGNS.WHITE} uri="/hacker" title="Prototipuju"></Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/organizator" title="Organizuju akce"></Card>

        <Card cardDesign={CARD_DESIGNS.WHITE} uri="/talks" title="Mluvím"></Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/talks" title="Píšu"></Card>

        <Card cardDesign={CARD_DESIGNS.WHITE} uri="/talks" title="Mentoruju a porotcuju"></Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/talks" title="Mentoruju a porotcuju">
            Mám přehled o tom, co za akce se v Čechách dějí. Proto spolu s ... rozesílám pravidelný měsíční email o
            eventech.
        </Card>

        <Card cardDesign={CARD_DESIGNS.WHITE} uri="/talks" title="Znám Prahu"></Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/talks" title="Maluju"></Card>

        <Card cardDesign={CARD_DESIGNS.WHITE} uri="/talks" title="Dělám Faily"></Card>

        <Card cardDesign={CARD_DESIGNS.BLACK} uri="/kontakt" title="Kontakt"></Card>
    </Layout>
);
