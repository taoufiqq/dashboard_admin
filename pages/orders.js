import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Orders</h1>
      <table className="mt-4 basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Paid</td>
            <td>Recipient</td>
            <td>Products</td>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td
                  className={
                    order.paid
                      ? "text-green-700 + font-medium"
                      : "text-red-700 + font-medium"
                  }
                >
                  {order.paid ? "YES" : "NO"}
                </td>
                <td>
                  {order.name}
                  <br />
                  {order.email}
                  <br />
                  {order.streetAddress} {order.city}
                  <br />
                  {order.country} {order.postalCode}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      {l.price_data?.product_data.name} x {l.quantity} <br />
                    </>
                  ))}
                </td>
              </tr>
            ))}
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
