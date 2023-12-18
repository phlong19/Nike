import * as Icons from "react-icons/fa6";
import { firstCap } from "../utils/helper";

function DynamicFaIcon({ name }: { name: string }) {
  const icon = "Fa" + firstCap(name);

  const IconComponent: string = Icons[icon as keyof typeof Icons];

  return <IconComponent />;
}

export default DynamicFaIcon;
