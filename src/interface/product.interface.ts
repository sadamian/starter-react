export type ProductCategory = "general" | "tech" | "home" | null;

export interface IProduct {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly image: string;
  readonly promotion?: boolean;
  readonly category?: ProductCategory;
}

export interface ImageProps {
  readonly image: string;
}

export interface TitleProps {
  readonly name: string;
}
