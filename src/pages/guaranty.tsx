import GuarantyInfo from "@/components/guaranty/GuarantyInfo";
import { Workflow } from "@/components/workflow";
import style from "./guaranty.module.scss";

const Guaranty = () => {
  return (
    <div className={style.block}>
      <GuarantyInfo />
    </div>
  );
};

export default Guaranty;
