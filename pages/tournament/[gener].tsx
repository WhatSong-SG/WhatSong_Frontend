import type { NextPage } from "next";
import { useRouter } from "next/router";
import WorldCupGame from "../../components/worldcup/worldcup-game";

const Gener: NextPage = () => {
  const router = useRouter();
  const { gener } = router.query;

  return <WorldCupGame genre={gener} />;
};

export default Gener;
