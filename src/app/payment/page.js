const Betaling = async ({ searchParams }) => {
  const cart = (await searchParams).cart;

  console.log(cart);

  const parsedCart = JSON.parse(cart);
  console.log(parsedCart);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightblue text-background">
      <h1 className="text-3xl font-bold mb-4">Betalingsside</h1>
      <p className="text-lg">Her vil du kunne gennemføre din betaling.</p>
      {parsedCart.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Betaling;
