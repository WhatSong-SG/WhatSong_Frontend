import { atom } from "recoil";

export const TournamentId = atom({
  key: "TournamentIdAtom",
  default: 0,
});

export const MatchCount = atom({
  key: "MatchCountAtom",
  default: 0,
});

export const MatchCountMax = atom({
  key: "MatchCountMaxAtom",
  default: 0,
});

export const MatchInfoData = atom({
  key: "MatchInfoDataAtom",
  default: {
    current_round: 0,
    id: 0,
    is_finish: false,
    match: 0,
    match_count: 0,
    music1: { name: "", artist: "", cover: "" },
    music2: { name: "", artist: "", cover: "" },
  },
});
