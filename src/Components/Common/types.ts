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

export interface ICard {
  title: string;
  imageUrl: string;
  description: string;
  publishedAt: string;
  tags: string[];
  source: string;
  dispacherLink: string;
}
