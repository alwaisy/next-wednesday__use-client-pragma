import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const LoadMore = () => {
  const [skip, setSkip] = useState(5);

  const { push } = useRouter();

  function onClick() {
    setSkip(skip + 5);

    push(`/?skip=${skip}`);
  }

  return <Button onClick={onClick}>Load next 5</Button>;
};

export default LoadMore;
