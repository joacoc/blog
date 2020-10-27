import FallingInTheRealTimeTrap from "./FallingInTheRealTimeTrap";
import FPLBTheory from "./FPLBTheory";
import BenjaminFranklinVirtues from "./BenjaminFranklinVirtues";

export const routedPages = [
    {
        path: "/benjamin-franklin-virtues",
        page: BenjaminFranklinVirtues,
    },
    {
        path: "/falling-in-the-real-time-trap",
        page: FallingInTheRealTimeTrap,
    },
    {
        path: "/fplb-theory",
        page: FPLBTheory,
    }
];

export default [
    BenjaminFranklinVirtues,
    FallingInTheRealTimeTrap,
    FPLBTheory];