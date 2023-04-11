import { Benefits } from "@/components/benefits";
import RepairCalculating from "@/components/Repair-block/Repair-calculating/Repair-calculating.component";
import RepairInfo from "@/components/Repair-block/Repair-info/Repair-info.component";
import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";
import RepairPrice from "@/components/Repair-block/Repair-price/RepairPrice.component";
import textDataPrice from "@/constants/json/repaire-price.json";

const OvenPage = () => {

  return (
    <>
      <RepairTitle data={textData["title-block"].oven} />
      <Benefits />
      <RepairCalculating />
      <RepairInfo />
      <RepairPrice data={textDataPrice.oven.data}/>
    </>
  );
};

export default OvenPage;
