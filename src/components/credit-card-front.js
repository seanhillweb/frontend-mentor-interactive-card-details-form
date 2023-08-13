import Image from "next/image";
import creditCardFront from "@/public/bg-card-front.png";
import creditCardLogo from "@/public/card-logo.svg";
import formatCreditCardNumber from "@/utils/format-cred-card-number";

export default function CreditCardFront({
  cardName,
  cardNumber,
  cardExpMonth,
  cardExpYear,
}) {
  return (
    <div className="block relative w-full max-w-[447px] h-full max-h-[245px] mx-auto">
      <Image src={creditCardLogo} alt="" className="absolute w-14 sm:w-auto md:w-14 lg:w-auto top-6 left-6" />
      <div className="absolute bottom-6 left-6 right-6 text-white tracking-widest">
        <p className="text-lg sm:text-2xl md:text-lg lg:text-2xl xl:text-3xl mb-2 sm:mb-4 xl:mb-6">
          {cardNumber
            ? formatCreditCardNumber(cardNumber)
            : `0000 0000 0000 0000`}
        </p>
        <div className="flex flex-row justify-between text-xs sm:text-sm uppercase">
          <p>{cardName ? cardName : `Jane Appleseed`}</p>
          <p>
            <span>{cardExpMonth ? cardExpMonth : `00`}</span>/
            <span>{cardExpYear ? cardExpYear : `00`}</span>
          </p>
        </div>
      </div>
      <Image src={creditCardFront} alt="" />
    </div>
  );
}
