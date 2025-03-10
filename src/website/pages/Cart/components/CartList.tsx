import { useCart } from "@/hooks/use-cart";
import { Minus, Plus } from "lucide-react";

const CartList = () => {
  const { items, removeItem, updateItemQuantity } = useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateItemQuantity(id, newQuantity);
    } else {
      removeItem(id);
    }
  };
  
  return (
    <div className="border  rounded-3xl  md:col-span-3  px-6 md:min-w-[28rem] h-screen overflow-y-scroll  no-scrollbar scroll-smooth ">
      {!items.length ? (
        <div className="flex h-full  items-center justify-center">
          <p className="text-black/60">Your cart is empty</p>
        </div>
      ) : (
        items.map((product) => (
          <div key={product.id} className="flex justify-between border-b py-6 ">
            <div className="flex">
              <figure className=" aspect-square mr-4 overflow-hidden rounded-[1.25rem] bg-neutral-100 w-20  md:max-w-[7.75rem]">
                <img
                  src={product.thumbnail}
                  className="object-cover transition-all duration-300 hover:scale-105"
                  alt={`Product Image ${product.title}`}
                />
              </figure>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl  font-bold">{product.title}</h3>

                <span className="block text-gray-400 ">
                  Category:{product.category}
                </span>
                <h3 className="text-xl font-bold">
                  ${Math.round(product.price)}
                </h3>
              </div>
            </div>
            <div className="relative ">
              <button
                className="absolute top-0 right-0 text-white "
                onClick={() => removeItem(product.id)}
              >
                <svg
                  width={18}
                  height={20}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#FF3333] hover:fill-[#ff3333]/90"
                >
                  <path d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z" />
                </svg>
              </button>
              <div className=" absolute bottom-0 right-0  flex items-center justify-center gap-6 rounded-full bg-secondary font-medium  border">
                <button
                  type="button"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                  className="active:scale-90 px-2 py-1    "
                >
                  <Minus className="size-4 md:size-6  " />
                </button>

                <span>{product.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                  className="active:scale-90 px-2 py-1  "
                >
                  <Plus className="size-4 md:size-6" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
