import GuarantyFAQ from "@/components/guaranty/guarantyFAQ";
import GuarantyInfo from "@/components/guaranty/GuarantyInfo";
import { Workflow } from "@/components/workflow";
import style from "./guaranty.module.scss";

const Guaranty = () => {
  return (
    <div className={style.block}>
      <GuarantyInfo />
      <GuarantyFAQ />
    </div>
  );
};

export default Guaranty;
