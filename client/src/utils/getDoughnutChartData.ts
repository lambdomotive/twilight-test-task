import { Infection } from "@/models/Infection";
import countBy from "lodash/countBy";

import { chartBorderColors, chartColors } from "@/utils/chartColors";

export const getDoughnutChartData = (infections: Infection[]) => {
    if (infections.length) {
      const stealerTypes = infections.map(({ stealer_type }) => stealer_type);
      const stealerTypesCounted = countBy(stealerTypes);
      const labels = Object.keys(stealerTypesCounted);
      const numberOfStealerTypes = Object.values(stealerTypesCounted).length;
      console.log("numberOfStealerTypes: ", numberOfStealerTypes);
      const datasets = [
        {
          label: "vulnerabilities found",
          data: Object.values(stealerTypesCounted),
          backgroundColor: chartColors.slice(0, numberOfStealerTypes),
          borderColor: chartBorderColors.slice(0, numberOfStealerTypes),
          borderWidth: 1,
        },
      ];

      return {
        labels,
        datasets,
      };
    }

    return null;
  }