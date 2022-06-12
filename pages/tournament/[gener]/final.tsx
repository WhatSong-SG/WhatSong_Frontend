import type { NextPage } from "next";
import { useRouter } from "next/router";
import WorldCupFinal from "../../../components/worldcup/worldcup-final";

const Final: NextPage = () => {
  const router = useRouter();
  const { gener } = router.query;
  return <WorldCupFinal gener={gener} />;
};

export default Final;
