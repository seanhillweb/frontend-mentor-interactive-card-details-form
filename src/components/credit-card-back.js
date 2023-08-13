import Image from "next/image";
import creditCardBack from "@/public/bg-card-back.png";

export default function CreditCardBack({ cardCVCNumber }) {

  return (
    <div className="block relative w-full max-w-[447px] h-full max-h-[245px] mx-auto">
      <div className="absolute bottom-[45%] sm:bottom-[46%] md:bottom-[46%] right-14">
        <p className="text-sm text-white">
          {cardCVCNumber ? cardCVCNumber : `000`}
        </p>
      </div>
      <Image src={creditCardBack} alt="" />
    </div>
  );
}