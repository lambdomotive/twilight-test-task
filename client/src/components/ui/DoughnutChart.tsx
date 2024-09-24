'use client';

import { FC } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
}

export const DoughnutChart: FC<DoughnutChartProps> = ({ data }) => (
  <Doughnut data={data} />
);
