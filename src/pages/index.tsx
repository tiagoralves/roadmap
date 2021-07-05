import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import data from "../utils/timeline_data";
import { FiMapPin, FiMap } from "react-icons/fi";
import styles from "./home.module.scss";
import Button from "../components/Button";

export default function Home({ content }) {
  const clickHandle = (link: string): void => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1>
        <FiMap color="#007aff" /> Roadmap Capstone
      </h1>
      <VerticalTimeline>
        {data.map((item) => (
          <VerticalTimelineElement
            contentStyle={
              item.hasAssignment
                ? {
                    background: "#121214",
                    border: "3px solid #39267D",
                    boxShadow: "inherit",
                  }
                : { background: "#121214", color: "#fff" }
            }
            iconStyle={{
              background: "#007aff",
              color: "#f5f5f5",
            }}
            contentArrowStyle={{
              marginLeft: "4px",
              marginRight: "4px",
            }}
            icon={<FiMapPin />}
          >
            <h3>{item.title}</h3>
            <h4 className={styles.planning}>{item.type}</h4>
            <h4>{item.date}</h4>
            <p>{item.content}</p>
            {item.hasAssignment && (
              <Button onClick={() => clickHandle(item.itemAssignment)}>
                Link da entrega
              </Button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
