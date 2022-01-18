import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Home = (props) => <SliceZone {...props} resolver={resolver} />;

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams: {
    uid: 'homepage'
  }

});

export default Home;
