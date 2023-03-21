import CartListType from "./cartType"

type MyOrderType = {
    _id: string;
    date: string;
    userId: string;
    productOrder: CartListType[];
}
export default MyOrderType