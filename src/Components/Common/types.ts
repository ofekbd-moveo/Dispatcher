// pass to global env
export enum buttonType {
  NONE = "none",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
}

export enum FilterType {
  DROPDWON_LIST = "dropdown-list",
  OPTION_LIST = "option-list",
}

export enum ChartType {
  DOUGHNUT = "Doughnut",
  LINE = "Line",
  BAR = "Bar",
}

export enum SideBarFilterType {
  FILTER_LIST = "filter-list",
  FILTER = "filter",
}

export enum NoDataType {
  TEXTUAL = "textual",
  GRAPHIC = "graphic",
}

export enum Colors {
  PURPLE_BLUE = "#5A5A89",
  CYAN_BLUE = "#0058B9",
  WHITE = "#FFFFFF",
  GHOST_WHITE = "#F8F8FF",
  DARK_PURPLE = "#262146",
  BLUISH_BLACK = "#14142B",
  BRIGHT_PURPLE_BLUE = "#F3F3FF",
  LIGHT_GRAY = "#D9DBE9",
}
export enum Categories {
  SEARCH_IN = "Search in",
  SOURCES = "Sources",
  COUNTRY = "Country",
  TAGS = "Tags",
}

export interface ICard {
  title: string;
  imageUrl: string;
  description: string;
  publishedAt: string;
  tags: string[];
  source: string;
  dispacherLink: string;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

export type TChartCard = IDoughnutChart | ILineChart | IBarChart;

type doughnutDataType = {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    hoverBackgroundColor?: string[];
    hoverOffset?: number;
    spacing?: number;
  }[];
};

export const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 40,
};

export const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

export const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

type lineDataType = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    hoverBorderWidth?: number;
    indexAxis?: string;
    tension?: number;
  }[];
};

type barDataType = {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
    barThickness?: number | string;
    borderRadius?: number;
    indexAxis?: string;
  }[];
};

export interface IDoughnutChart {
  title: string;
  type: ChartType.DOUGHNUT;
  data: doughnutDataType;
}

export interface ILineChart {
  title: string;
  type: ChartType.LINE;
  data: lineDataType;
}

export interface IBarChart {
  title: string;
  type: ChartType.BAR;
  data: barDataType;
}
