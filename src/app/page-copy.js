"use client";

/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. A credit card signup form that displays card detail updates in real-time.
 *
 * @link https://react.dev/learn/updating-arrays-in-state
 * @link https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
 * @link https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98
 */

import Image from "next/image";
import mobileBackground from "@/public/bg-main-mobile.png";
import desktopBackground from "@/public/bg-main-desktop.png";
import Form from "@/components/form";
import CreditCardFront from "@/components/credit-card-front";
import CreditCardBack from "@/components/credit-card-back";
import { creditCardValues } from "@/data/credit-card";

export default function Home() {

  return (
    <main aria-label="Content">
      <h1 className="sr-only">
        Frontend Mentor, Interactive card details form
      </h1>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center md:min-h-screen">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="grid gap-0 grid-cols-7 auto-rows-max">
              <div className="col-span-6 col-start-2 col-end-8 md:row-start-2">
                <CreditCardBack cardCVCNumber={creditCardValues.cardCVC} />
              </div>
              <div className="col-span-6 col-start-1 cold-end-7 -mt-[24%] md:row-start-1 md:mt-0 md:mb-8">
                <CreditCardFront
                  cardName={creditCardValues.cardName}
                  cardNumber={creditCardValues.cardNumber}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/2">
            <Form formValues={creditCardValues}/>
          </div>
        </div>
      </div>
      <Image
        src={mobileBackground}
        alt=""
        className="absolute -z-10 top-0 left-0 right-0 mx-auto block md:hidden"
      />
      <Image
        src={desktopBackground}
        alt=""
        className="absolute -z-10 top-0 left-0 bottom-0 h-full hidden md:block"
      />
    </main>
  );
}
