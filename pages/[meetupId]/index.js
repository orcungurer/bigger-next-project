import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb"; // 4, 12

const MeetupDetailsPage = (props) => {
  return (
    // 11
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export default MeetupDetailsPage;

// 2
export const getStaticPaths = async () => {
  // 4
  const client = await MongoClient.connect(
    "mongodb+srv://orcungurer:ljsrAfeGwOTjuuBN@cluster0.4nfosmu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray(); // 5

  client.close(); // 7

  return {
    fallback: false, // 3
    paths: meetups.map((meetup) => ({
      // 6
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

// 1
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  // 8
  const client = await MongoClient.connect(
    "mongodb+srv://orcungurer:ljsrAfeGwOTjuuBN@cluster0.4nfosmu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  // 9, 12
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};
