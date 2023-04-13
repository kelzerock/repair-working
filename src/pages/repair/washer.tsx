import { Benefits } from "@/components/benefits";
import RepairCalculating from "@/components/Repair-block/Repair-calculating/Repair-calculating.component";
import RepairInfo from "@/components/Repair-block/Repair-info/Repair-info.component";
import RepairPrice from "@/components/Repair-block/Repair-price/RepairPrice.component";
import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";
import textDataPrice from "@/constants/json/repaire-price.json";
import { Reviews } from "@/components/reviews";
import RepairBreak from "@/components/Repair-block/Repair-break/repair-break.component";
import textBreak from "@/constants/json/repair-break.json"

const WasherPage = () => {
  return (
    <>
      <RepairTitle data={textData["title-block"].washer} />
      <Benefits />
      <RepairCalculating />
      <RepairInfo />
      <RepairPrice data={textDataPrice.washer.data}/>
      <Reviews />
      <RepairBreak filter={textBreak.washer.header} />
    </>
  );
};

export default WasherPage;
