import { button, useControls } from "leva";
import { useSignals } from "@preact/signals-react/runtime";

import { sigalnIsLoading, signalNavMesh } from "../signals";

export const useGlbActionsControls = ({
  loadGlb,
  loadDefault,
  exportAsGlb,
}: {
  loadGlb: () => void;
  loadDefault: () => void;
  exportAsGlb: () => void;
}) => {
  useSignals();

  useControls(
    "GLB Actions",
    {
      "Load GLB": button(() => loadGlb(), {
        disabled: sigalnIsLoading.value,
      }),
      "Load Default GLB": button(() => loadDefault(), {
        disabled: sigalnIsLoading.value,
      }),
      "Export as GLTF": button(exportAsGlb, {
        disabled: !signalNavMesh.value,
      }),
    },
    [loadGlb]
  );
};
