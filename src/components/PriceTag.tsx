import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <span className={`badge mt-1  ${className}`}>{formatPrice(price)}</span>
  );
}
