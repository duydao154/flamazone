"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articlesInCart = cart.items.find(
    (item) => item.productId === productId,
  );

  if (articlesInCart) {
    await prisma.cartItem.update({
      where: { id: articlesInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }

  // indicate which route you want to refresh since there is no state so we could watch on
  revalidatePath("/products/[id]");
}
