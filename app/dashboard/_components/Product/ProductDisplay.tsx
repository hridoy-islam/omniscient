"use client";
// Import necessary types and components
import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";
import DeleteButton from "@/components/DeleteButton";
import { Product } from "@/utils/interfaces";
import Pagination from "@/components/Pagination";

interface ProductData {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  result: Product[];
}

// Define the props type for the ProductDisplay component
interface ProductDisplayProps {
  response: ProductData;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ response }) => {
  const allProducts = response?.result;

  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const [currentPage, setCurrentPage] = useState(Number(page) || 1);

  const totalPages = response?.meta?.totalPage;

  const getNextPageHref = () => {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) {
      return null;
    } else {
      return `/dashboard/admin/product?page=${nextPage}`;
    }
  };

  const getPreviousPageHref = () => {
    if (currentPage <= 1) {
      return null;
    } else {
      const previousPage = currentPage - 1;
      return `/dashboard/admin/product?page=${previousPage}`;
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="tableHeader">
          <div>
            <h2>Products</h2>
          </div>
          <div>
            <Link href="/dashboard/admin/product/create">
              <Button className="btn-basic rounded-md">
                <Icon icon="ic:round-plus" width={24} /> Add Product
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardBody>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Powerd By</th>
                {/* <th>Motherboard</th>
              <th>Processor</th>
              <th>RAM</th>
              <th>SMPS</th>
              <th>Graphics Card</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allProducts?.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.powerdby}</td>
                  {/* <td>{product.motherboard}</td>
                <td>{product.processor}</td>
                <td>{product.ram}</td>
                <td>{product.smps}</td>
                <td>{product.graphicscard}</td> */}
                  <td className="flex">
                    <Button
                      className="bg-primary text-white text-md"
                      onClick={() =>
                        router.push(
                          `/dashboard/admin/product/edit/${product._id}`
                        )
                      }
                    >
                      <Icon icon="uil:edit" className="text-lg" />
                      <span>Edit</span>
                    </Button>

                    <Button
                      onClick={() =>
                        router.push(`/dashboard/admin/product/${product._id}`)
                      }
                      className="text-primary border-primary border-1 bg-white ml-2 px-3 text-md"
                    >
                      <Icon icon="solar:eye-linear" className="text-lg" />
                      <span>View</span>
                    </Button>
                    <DeleteButton label="products" id={product._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPageHref={getPreviousPageHref()}
        nextPageHref={getNextPageHref()}
      />
    </>
  );
};

export default ProductDisplay;
