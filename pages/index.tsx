import { NextPage } from 'next';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { TalkComponent } from '../components/TalkComponent';
import { Talk } from '../model/Talk';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Talks">
      <TalkComponent Talk={new Talk()}>
          <div></div>
      </TalkComponent>
    </Layout>
  )
}

export default IndexPage
