export interface details{
  productId: number;
  quantity: number;
  productName: string;
};
export interface orders{
  id: number;
  name: string;
  date: string;
  shippingAddress: string;
  city: string;
  pickup: boolean;
};

export interface detailsOrder {
  details: details[];
  orderId: number;
}

