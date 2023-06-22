import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  function goBack() {
    router.push("/products");
  }
  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete this product &nbsp;{" "}
        <span className="text-2xl text-black">`{productInfo?.title}`</span> ?
      </h1>
      <div className="flex justify-center gap-2">
        <button onClick={deleteProduct} className="btn-red">
          Yes
        </button>
        <button onClick={goBack} className="btn-default">
          No
        </button>
      </div>
    </Layout>
  );
}
