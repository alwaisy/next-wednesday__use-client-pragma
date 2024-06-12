import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ResetSkip = () => {
  const { push } = useRouter();

  function onClick() {
    push("/");
  }

  return <Button onClick={onClick}>Reset skip</Button>;
};

export default ResetSkip;
