import { getRuloSvgPathsFromFile } from "@/lib/rulo-svg-paths";
import { HeroAnimated } from "./HeroAnimated";

export function Hero() {
  const rulo = getRuloSvgPathsFromFile();
  return <HeroAnimated rulo={rulo} />;
}
