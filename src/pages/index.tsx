import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { TalkComponent } from '../components/TalkComponent';
import { Talk } from '../model/Talk';
import { fetchTalks } from '../utils/fetchTalks';

interface IndexPageProps {
    error?: string;
    talks: Talk[];
}

interface IndexPageState {}
export class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    static getInitialProps = async ({ query }: NextPageContext) => {
        try {
            //const { id } = query;
            const talks = await fetchTalks();
            return { talks };
        } catch (error) {
            return { error: error.message };
        }
    };

    render() {
        const { error, talks } = this.props;

        if (error) {
            return <Layout title="Not found">{error.split('\n').map(line=>(<span>{line}<br/></span>))}</Layout>;
        }

        return (
            <Layout title="Talks">
                {talks.map((talk,i)=>(
                    <TalkComponent key={i} {...{ talk }} />
                ))}
                
            </Layout>
        );
    }
}

export default IndexPage;
