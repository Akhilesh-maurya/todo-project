import Login from "./components/Login";

// const columns = [
//   { id: "product", label: "Product", name: "product" },
//   { id: "quantity", label: "Quantity", name: "quantity" },
//   { id: "price", label: "Price", name: "price" },
//   { id: "discount", label: "Discount", name: "discount" },
//   { id: "total", label: "Total price", name: "total" },
// ];

// const rows = [
//   {
//     id: "1",
//     product: "Shirt",
//     quantity: "2",
//     price: "3000",
//     discount: "10%",
//     total: "2000",
//   },
// ];

// const initData = {
//   subTotal: "subTotal",
//   invoicePrice: "2000",
//   total: "Total",
//   tax: "Tax",
//   percent: "10%",
//   invoiceTax: "1000",
//   totalPrice: "1200",
// };

function App(props) {
  // const { data = initData } = props;
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
