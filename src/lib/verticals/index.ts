import { type Vertical } from "./types";
import { vertical as industrialHumidification } from "./industrial-humidification";
import { vertical as resortHospitalityFogging } from "./resort-hospitality-fogging";
import { vertical as outdoorCoolingMisting } from "./outdoor-cooling-misting";
import { vertical as farmClimateControl } from "./farm-climate-control";
import { vertical as agriculturalMisting } from "./agricultural-misting";
import { vertical as dustSuppression } from "./dust-suppression";
import { vertical as hvacBuildingControl } from "./hvac-building-control";
import { vertical as industrialAutomation } from "./industrial-automation";
import { vertical as acCondenserFogging } from "./ac-condenser-fogging";
import { vertical as hPlant } from "./h-plant";

/**
 * Solution verticals, in navigation order. These are the pillar pages that live
 * under /industries. The first six are the "core" verticals surfaced on the home grid.
 */
export const verticals: Vertical[] = [
  industrialHumidification,
  resortHospitalityFogging,
  outdoorCoolingMisting,
  farmClimateControl,
  agriculturalMisting,
  dustSuppression,
  hvacBuildingControl,
  industrialAutomation,
  acCondenserFogging,
  hPlant,
];

/** The six core verticals shown on the home page grid. */
export const coreVerticals = verticals.slice(0, 6);

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}

export function getChild(verticalSlug: string, childSlug: string) {
  const v = getVertical(verticalSlug);
  const child = v?.children?.find((c) => c.slug === childSlug);
  return child ? { vertical: v!, child } : undefined;
}

export { type Vertical } from "./types";
