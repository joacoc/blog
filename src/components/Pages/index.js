import FallingInTheRealTimeTrap from "./FallingInTheRealTimeTrap";
import FPLBTheory from "./FPLBTheory";
import BenjaminFranklinVirtues from "./BenjaminFranklinVirtues";
import SensationTwoThousand from "./SensationTwoThousand";
import NewLaptop from "./NewLaptop";
import NYSubway from "./NYSubway"

export const routedPages = [
    {
        path: "/ny-subway",
        page: NYSubway,
    },
    {
        path: "/new-laptop",
        page: NewLaptop,
    },
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