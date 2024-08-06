import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ExpiredPage = () => {
  return (
    <div>
      <h1 className="mb-4">Download Link Expired</h1>
      <Button asChild size="lg">
        <Link href="">Get New Link</Link>
      </Button>
    </div>
  );
};

export default ExpiredPage;
