import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router"; // 3
import Head from "next/head"; // 4
import { Fragment } from "react";

const NewMeetupPage = () => {
  const router = useRouter(); // 3

  const addMeetupHandler = async (enteredMeetup) => {
    // 1
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json(); // 2
    console.log(data);

    router.push("/"); // 3
  };

  return (
    <Fragment>
      {/* 4 */}
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own meetups and create networks." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
