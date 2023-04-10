import { Benefits } from "@/components/benefits";
import RepairCalculating from "@/components/Repair-block/Repair-calculating/Repair-calculating.component";
import RepairInfo from "@/components/Repair-block/Repair-info/Repair-info.component";
import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const WasherPage = () => {
  return (
    <>
      <RepairTitle data={textData["title-block"].washer} />;
      <Benefits />
      <RepairCalculating />
      <RepairInfo />
    </>
  );
};

export default WasherPage;
