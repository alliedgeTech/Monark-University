import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <div className="enquiry">
        <Link href={"/inquiry"}>
          <button className="text-white">Enquiry Now</button>
        </Link>
      </div>
    </div>
  );
};

export default index;
