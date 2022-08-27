import analysis from "@/router/main/analysis";
import product from "@/router/main/product";
import story from "@/router/main/story";
import system from "@/router/main/system";
const allRoute = [...analysis, ...product, ...story, ...system];

export default allRoute;
