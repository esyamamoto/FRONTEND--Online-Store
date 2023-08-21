type ProductCard = {
  name: string;
  price: number;
  image: string;
};

export function productCard(props: ProductCard) {
  const { name, price, image } = props;
  return (
    <div>
      <img src={ image } alt="image2" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
