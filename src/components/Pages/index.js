import FallingInTheRealTimeTrap from "./FallingInTheRealTimeTrap";
import FPLBTheory from "./FPLBTheory";
import BenjaminFranklinVirtues from "./BenjaminFranklinVirtues";
import SensationTwoThousand from "./SensationTwoThousand";

export const routedPages = [
    {
        path: "/sensation-two-thousand",
        page: SensationTwoThousand,
    },
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