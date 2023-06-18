import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import headers from "@/constants/json/headers.json";
import Head from "next/head";

const arrCheckPath = ["/" , "/repair-washer" , "/repair-dishwasher" ,"/repair-hob" , "/repair-stove" , "/repair-oven" , "/repair-dryer" , "/install-washer" , "/install-dishwasher" , "/price" ,  "/faq" , "/reviews" , "/guaranty" , "/contacts"]

const HeadersInfo = () => {
  const testHead: any = headers;
  const route = usePathname();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateInfo = () => {
    const path = arrCheckPath.includes(route)? route : "/mistake"
    setTitle(() => testHead[path].title);
    setDescription(() => testHead[path].description);
  };

  useEffect(() => {
    updateInfo();
  }, [route]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default HeadersInfo;
