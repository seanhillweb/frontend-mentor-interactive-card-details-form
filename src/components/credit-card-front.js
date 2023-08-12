import Image from "next/image";
import creditCardFront from "@/public/bg-card-front.png";
import creditCardLogo from "@/public/card-logo.svg";
import formatCreditCardNumber from "@/utils/format-cred-card-number";

export default function CreditCardFront({ cardName, cardNumber }) {
  return (
    <div className="block relative w-full max-w-[447px] h-full max-h-[245px] shadow-xl">
      <Image src={creditCardLogo} alt="" className="absolute top-6 left-6" />
      <div className="absolute bottom-6 left-6 right-6 text-white tracking-widest">
        <p className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4 md:mb-6">
          {cardNumber
            ? formatCreditCardNumber(cardNumber)
            : `0000 0000 0000 0000`}
        </p>
        <div className="flex flex-row justify-between text-sm uppercase">
          <p>{cardName ? cardName : `Jane Appleseed`}</p>
          <p>00/00</p>
        </div>
      </div>
      <Image src={creditCardFront} alt="" />
    </div>
  );
}