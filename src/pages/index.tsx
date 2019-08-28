import { NextPageContext } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { TalksComponent } from '../components/TalksComponent';
import { Talk } from '../model/Talk';
import { fetchTalks } from '../utils/fetchTalks';
import { compareDates, compareTalksbyDate } from '../utils/compareDates';

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
            //console.log(talks);
            return { talks };
        } catch (error) {
            return { error: error.message };
        }
    };

    render() {
        const { error, talks } = this.props;

        if (error) {
            return (
                <Layout title="Not found">
                    {error.split('\n').map((line) => (
                        <span>
                            {line}
                            <br />
                        </span>
                    ))}
                </Layout>
            );
        }

        return (
            <Layout title="Talks">
                <h2>Upcomming</h2>
                <TalksComponent
                    {...{ talks: talks.filter((talk) => compareTalksbyDate(talk) === -1).sort(compareTalksbyDate) }}
                />
                <h2>Past</h2>
                <TalksComponent
                    {...{ talks: talks.filter((talk) => compareTalksbyDate(talk) === 1).sort(compareTalksbyDate) }}
                />
            </Layout>
        );
    }
}

export default IndexPage;
