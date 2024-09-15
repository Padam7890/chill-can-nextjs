import { Bounded } from "@/components/Bounded";
import Soda3DViewr from "@/components/Soda3DView";
import React from "react";

const ProductShowCase = () => {
  return (
    <Bounded className="h-screen w-full bg-red-100 text-sky-950">
      <div>
        <div className="container flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="leftside flex max-w-96 flex-col gap-8">
            <h1 className="text-6xl font-bold">Black Chhery</h1>
            <p className=" leading-7">
              Experience the bold and
              irresistible taste of Chill Can Black Cherry Bliss. Each sip
              delivers a perfect balance of deep, juicy black cherry flavor with
              just the right amount of sweetness and fizz. This refreshing soda
              brings the taste of ripe black cherries in a deliciously smooth
              and satisfying beverage, perfect for quenching your thirst and
              satisfying your craving for something sweet and bold. Whether
              you're enjoying it on its own or pairing it with your favorite
              meal, Chill Can Black Cherry Bliss is the ultimate choice for
              cherry lovers.
            </p>
          </div>

          <div className="rightside">
            <Soda3DViewr flavor="blackCherry" />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default ProductShowCase;
