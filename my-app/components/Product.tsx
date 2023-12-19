import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FaStar as StarIcon } from "react-icons/fa";

function Tabs() {
  const product = {
    name: "Luxurios Lips Grower",
    price: "$350",
    discountPrice: "$150",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Formulated Makeup", href: "#" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1599733589378-235234c3f052?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://images.unsplash.com/photo-1617422275558-e5f616302690?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://images.unsplash.com/photo-1611605472181-7962c1c85ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      {
        name: "Brown Serious",
        class: "bg-yellow-900",
        selectedClass: "ring-yellow-800",
      },
      {
        name: "Red Passion",
        class: "bg-red-500",
        selectedClass: "ring-red-400",
      },
    ],
    sizes: [
      { name: "Brown ", inStock: true },
      { name: "Red ", inStock: true },
      { name: "Purple ", inStock: true },
    ],
    description:
      'Elevate your beauty routine with "Luxurious Lips Grower," a premium lipstick collection designed for the modern, bold individual. Available in three captivating shades - pristine White, rich Brown, and vibrant Red - each color promises to add a unique touch to your look. Whether youre aiming for a classic elegance, a natural earthy tone, or a daring and bold statement, these shades are tailored to enhance your style and mood.',

    highlights: [
      "Enriched with nourishing ingredients for lip care",
      "Long-lasting, vibrant pigmentation",
      "Smooth and even application",
      "Cruelty-free and environmentally friendly formulation",
    ],

    details:
      'Our "Luxurious Lips Grower" range includes three meticulously crafted shades. The White embodies purity and sophistication, perfect for a subtle yet stylish look. The Brown offers a touch of natural elegance, ideal for both day and night wear. The Red, a symbol of confidence and glamour, is your go-to for making a bold statement. Embrace the versatility of our collection and find the perfect shade to match every occasion and mood. Stay tuned for our exclusive seasonal releases that promise to keep your look fresh and on-trend.',
  };

  // State for selected color and size
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  // Function to send email
  const sendEmail = () => {
    const colorInfo = selectedColor
      ? `Color Selected: ${selectedColor.name}\n\n`
      : "";

    const emailBody = encodeURIComponent(
      `Hello,\n\nI am interested in pre-ordering your product. Here are the details of my preference:\n\n${colorInfo}Product: Luxurious Lips Grower\n\n[YOUR NAME HERE]\n\nThank you!`
    );

    window.location.href = `mailto:foreverYou@gmail.com?subject=Pre Order Inquiry&body=${emailBody}`;
  };

  const reviews = { href: "#", average: 4.9, totalCount: 1932 };
  const waitlisted = { list: 56043 };
  const stock = { amount: 200 };

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <a className="mr-2 text-sm font-medium text-gray-900"></a>
        {/* Image gallery */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              PRODUCT
            </h1>
          </div>
        </div>
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-4xl tracking-tight text-gray-900">
              <span>{product.discountPrice}</span> {/* Discounted Price */}
              <span className="line-through text-red-600">{product.price}</span>
            </p>
            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-red-400 hover:text-red-300"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <div className="text-lg flex items-center ">
              {" "}
              {waitlisted.list} People waiting for the item.
            </div>
            <div className="text-lg flex items-center text-red-400">
              {" "}
              {stock.amount} Only in stock.
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}

              <button
                onClick={sendEmail}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Pre Order
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-xl text-gray-900">{product.description}</p>{" "}
                {/* Increase text size using text-lg */}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-medium text-gray-900">Highlights</h3>{" "}
              {/* Increase text size using text-lg */}
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-xl">
                  {" "}
                  {/* Increase text size using text-lg */}
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-medium text-gray-900">Details</h2>{" "}
              {/* Increase text size using text-lg */}
              <div className="mt-4 space-y-6">
                <p className="text-xl text-gray-600">{product.details}</p>{" "}
                {/* Increase text size using text-lg */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
