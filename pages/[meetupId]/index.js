import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail
      image="https://cdn1.matadornetwork.com/blogs/1/2023/02/Big-Ben-clock-social.jpg"
      title="First Meetup"
      address="Westminster, London, England"
      description="This is the first one of many."
    />
  );
};

export default MeetupDetailsPage;

// 2
export const getStaticPaths = () => {
  return {
    fallback: false, // 3
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
};

// 1
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://cdn1.matadornetwork.com/blogs/1/2023/02/Big-Ben-clock-social.jpg",
        title: "First Meetup",
        address: "Westminster, London, England",
        description: "This is the first one of many.",
      },
    },
  };
};
