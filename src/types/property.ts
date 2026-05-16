export interface PropertyItem {
  home_id: string;

  type: string;

  price_in_inr: number;

  features: {
    rooms: number;

    washrooms: number;

    kitchens: number;
  };
  images: string[];
}
