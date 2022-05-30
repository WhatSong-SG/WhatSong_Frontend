import type { NextPage } from "next";
import { useRouter } from "next/router";

const Final: NextPage = () => {
  const router = useRouter();
  const { gener } = router.query;
  return <div>{gener}</div>;
};

export default Final;
