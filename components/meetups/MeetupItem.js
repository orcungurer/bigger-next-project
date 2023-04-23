import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useRouter } from "next/router"; // 2


const MeetupItem = (props) => {
  const router = useRouter(); // 2

  // 1
  const showDetailsHandler = () => {
    router.push("/" + props.id); // 3
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button> {/* 1 */}
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
