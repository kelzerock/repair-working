import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const HobPage = () => {
  return <RepairTitle data={textData["title-block"].hob} />;
};

export default HobPage;
