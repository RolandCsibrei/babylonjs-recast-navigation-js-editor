import { button, useControls } from "leva";
import { useSignals } from "@preact/signals-react/runtime";

import { sigalnIsLoading, signalNavMesh } from "../signals";
import { levaText } from "./leva-text";

export const useGlbActionsControls = ({
  loadGlb,
  loadDefaultGlbSmall,
  loadDefaultGlbBig,
  exportAsGlb,
}: {
  loadGlb: () => void;
  loadDefaultGlbSmall: () => void;
  loadDefaultGlbBig: () => void;
  exportAsGlb: () => void;
}) => {
  useSignals();

  useControls(
    "GLB Actions",
    {
      "Load GLB": button(() => loadGlb(), {
        disabled: sigalnIsLoading.value,
      }),
      "Load Default GLB - Small": button(() => loadDefaultGlbSmall(), {
        disabled: sigalnIsLoading.value,
      }),
      "Load Default GLB - Big": button(() => loadDefaultGlbBig(), {
        disabled: sigalnIsLoading.value,
      }),
      "Export as GLTF": button(exportAsGlb, {
        disabled: !signalNavMesh.value,
      }),

      _: levaText("Alt/Option + I to toggle Inspector."),
    },
    [loadGlb]
  );
};
