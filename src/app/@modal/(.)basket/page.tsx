"use client";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"; 
  import Basket from "@/components/Basket"; 

export default function BasketInterception() {
    const router = useRouter();
    function onDismiss() {
        router.back();
    }
  return (
    <Dialog
    open
    onOpenChange={(isOpen) => {
      if (!isOpen) onDismiss();
    }}
  >
    <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
      <DialogHeader>
        <DialogTitle>Basket</DialogTitle>
        <DialogDescription>
          <p>Contents of your basket</p>
        </DialogDescription>
      </DialogHeader>
      <Basket />
    </DialogContent>
  </Dialog>
  )
}
