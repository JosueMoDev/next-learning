"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/interfaces";
import { useState } from "react";
import { ProductImage } from "@/components";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <ProductImage
          src={displayImage}
          width={500}
          height={500}
          alt={product.title}
          className="mr-5 rounded"
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};
