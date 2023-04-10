import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const WasherPage = () => {
  return <RepairTitle data={textData["title-block"].washer} />;
};

export default WasherPage;
