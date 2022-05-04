import type { NextPage } from "next";
import { useRouter } from "next/router";

const Gener: NextPage = () => {
  const router = useRouter();
  const { gener } = router.query;
  
  return <div>{gener}</div>;
};

export default Gener;
