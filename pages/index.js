import MeetupList from "@/components/meetups/MeetupList";

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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
