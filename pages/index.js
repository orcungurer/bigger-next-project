import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg/500px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_May_2007.jpg",
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
      "https://lh3.googleusercontent.com/p/AF1QipMZji5UXvwLd-MlZsG05g_lTgBHr-PlGw5_m8Ul=s1360-w1360-h1020",
    address: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
    description: "This is the third one of many.",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
