import Image from "next/image";

const Betaling = async ({ searchParams }) => {
  const cart = searchParams.cart; // Modtag cart-data fra URL

  if (!cart) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-lightblue text-background">
        <h1 className="text-3xl font-bold mb-4">Betalingsside</h1>
        <p className="text-lg">Ingen varer i kurven.</p>
      </div>
    );
  }

  const parsedCart = JSON.parse(cart); // Parse JSON-stringen

  // Udregn samlet pris
  const totalPrice = parsedCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex flex-col-2 gap-10 items-center justify-center h-screen bg-lightblue text-background">
      {/* Korrekt opsætning af Next.js Image */}
      <div>
      <Image 
        src="/img/catogA.jpg" // Sti relativt til public-mappen
        width={250} 
        height={350} 
        alt="QR kode" 
      /></div><div>
      <h1 className="text-3xl font-bold mb-4">Betalingsside</h1>
      <p className="text-lg mb-4">Her vil du kunne gennemføre din betaling.</p>
      <ul className="mb-4">
        {parsedCart.map((item, index) => (
          <li key={index} className="mb-2">
            <p className="font-bold">{item.title}</p>
            <p>Pris: {item.price} kr</p>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold">Total: {totalPrice} kr</h2>
    </div>
    </div>
  );
};

export default Betaling;
