import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb"; // 6
import Head from "next/head"; // 10
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn1.matadornetwork.com/blogs/1/2023/02/Big-Ben-clock-social.jpg",
    address: "Westminster, London, England",
    description: "This is the first one of many.",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOnJHzIOu1VUvkTX0GKjmqK-NdgXWJEUa8m2YPd=s1360-w1360-h1020",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    description: "This is the second one of many.",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://images.prismic.io/bounce/277a1ffb-7c0d-4f6b-ad06-51682d810705_frans-ruiter-jfPGunIH_9M-unsplash.jpg?auto=compress,format",
    address: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
    description: "This is the third one of many.",
  },
];

// 3
const HomePage = (props) => {
  return (
    <Fragment>
      {/* 11 */}
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse a list of meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export default HomePage;

// 5
// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// 1
export const getStaticProps = async () => {
  // 6
  const client = await MongoClient.connect(
    "mongodb+srv://orcungurer:ljsrAfeGwOTjuuBN@cluster0.4nfosmu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); // 7

  client.close(); // 8

  // 2
  return {
    props: {
      meetups: meetups.map((meetup) => ({ // 9
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1, // 4
  };
};
