"use client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useTransition } from "react";
import {
  deleteProduct,
  toggleProductAvailability,
} from "../../_actions/products";
import { useRouter } from "next/navigation";

export function ActiveTogglerDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const router = useRouter();
  router.refresh();
  const [isPending, startTransiton] = useTransition();
  return (
    <DropdownMenuItem
      className="p-1 transition-colors duration-300 hover:bg-gray-200"
      disabled={isPending || isAvailableForPurchase}
      onClick={() => {
        startTransiton(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const router = useRouter();
  router.refresh();

  const [isPending, startTransiton] = useTransition();
  return (
    <DropdownMenuItem
      className="p-1 transition-colors duration-300 hover:bg-destructive"
      disabled={isPending || disabled}
      onClick={() => {
        startTransiton(async () => {
          await deleteProduct(id);
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
}
