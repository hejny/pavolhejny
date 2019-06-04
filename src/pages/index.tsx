import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { TalkComponent } from '../components/TalkComponent';
import { Talk } from '../model/Talk';
import { findData } from '../utils/sample-api';

interface IndexPageProps {
    error?: string;
    talk: Talk;
}

interface IndexPageState {}
export class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    static getInitialProps = async ({ query }: NextPageContext) => {
        try {
            const { id } = query;
            const talk = await findData(Array.isArray(id) ? id[0] : id);
            return { talk };
        } catch (error) {
            return { error: error.message };
        }
    };

    render() {
        const { error, talk } = this.props;

        if (error) {
            return <Layout title="Not found">{error}</Layout>;
        }

        return (
            <Layout title="Talks">
                <TalkComponent {...{ talk }} />
            </Layout>
        );
    }
}

export default IndexPage;
