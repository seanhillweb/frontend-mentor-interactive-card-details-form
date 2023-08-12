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

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import mobileBackground from "@/public/bg-main-mobile.png";
import desktopBackground from "@/public/bg-main-desktop.png";
import creditCardFront from "@/public/bg-card-front.png";
import creditCardBack from "@/public/bg-card-back.png";
import creditCardLogo from "@/public/card-logo.svg";

export default function Home() {
  const creditCardValues = {
    cardName: "",
    cardNumber: "",
    cardCVC: "",
  };

  const [values, setValues] = useState(creditCardValues);

  function formatCreditCardNumber(value) {
    const number = value
      .toString()
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < number.length; i += 4) {
      parts.push(number.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

  function CreditCardFront({ cardName, cardNumber }) {
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

  function CreditCardBack({ cardCVCNumber }) {
    return (
      <div className="block relative w-full max-w-[447px] h-full max-h-[245px] shadow-xl">
        <div className="absolute bottom-[46%] right-14">
          <p className="text-sm text-white">
            {cardCVCNumber ? cardCVCNumber : `000`}
          </p>
        </div>
        <Image src={creditCardBack} alt="" />
      </div>
    );
  }

  function Form() {
    const validationSchema = yup.object({
      cardName: yup.string().required("Required"),
      cardNumber: yup
        .number()
        .required("Required")
        .typeError("Wrong format, numbers only"),
        cardCVC: yup.number().required("Required")
        .typeError("Wrong format, numbers only"),
    });

    const resolver = yupResolver(validationSchema);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver, defaultValues: values });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="cardName"
            className="text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
          >
            Cardholder Name
          </label>
          <input
            id="cardName"
            name="cardName"
            placeholder="e.g. Jane Appleseed"
            className={`rounded-lg p-3 focus:ring-transparent ${
              errors.cardName
                ? "border-brand-red hover:border-brand-red focus:border-brand-red"
                : "border-brand-violet-100 hover:border-brand-gradient-end focus:border-brand-gradient-end"
            }`}
            aria-invalid={errors.cardName ? "true" : "false"}
            {...register("cardName", {
              required: true,
              onChange: (e) =>
                setValues({
                  ...values,
                  cardName: e.target.value,
                }),
            })}
          />
          <ErrorMessage
            errors={errors}
            name="cardName"
            render={({ message }) => (
              <p role="alert" className="text-brand-red text-xs mt-1">
                {message}
              </p>
            )}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="cardNumber"
            className="text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
          >
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            defaultValue={formatCreditCardNumber(values.cardNumber)}
            placeholder="e.g. 1234 5678 9123 0000"
            type="tel"
            inputMode="numeric"
            className={`rounded-lg p-3 focus:ring-transparent ${
              errors.cardNumber
                ? "border-brand-red hover:border-brand-red focus:border-brand-red"
                : "border-brand-violet-100 hover:border-brand-gradient-end focus:border-brand-gradient-end"
            }`}
            aria-invalid={errors.cardNumber ? "true" : "false"}
            {...register("cardNumber", {
              required: true,
              minLength: 16,
              maxLength: 16,
              valueAsNumber: true,
              onChange: (e) =>
                setValues({
                  ...values,
                  cardNumber: e.target.value,
                }),
            })}
          />
          <ErrorMessage
            errors={errors}
            name="cardNumber"
            render={({ message }) => (
              <p role="alert" className="text-brand-red text-xs mt-1">
                {message}
              </p>
            )}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label
              htmlFor="cardCVC"
              className="text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
            >
              CVC
            </label>
            <input
              id="cardCVC"
              name="cardCVC"
              defaultValue={values.cardCVC}
              placeholder="e.g. 123"
              type="tel"
              inputMode="numeric"
              className={`rounded-lg p-3 focus:ring-transparent ${
                errors.cardCVC
                  ? "border-brand-red hover:border-brand-red focus:border-brand-red"
                  : "border-brand-violet-100 hover:border-brand-gradient-end focus:border-brand-gradient-end"
              }`}
              aria-invalid={errors.cardCVC ? "true" : "false"}
              {...register("cardCVC", {
                required: true,
                minLength: 16,
                maxLength: 16,
                valueAsNumber: true,
                onChange: (e) =>
                  setValues({
                    ...values,
                    cardCVC: e.target.value,
                  }),
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cardCVC"
              render={({ message }) => (
                <p role="alert" className="text-brand-red text-xs mt-1">
                  {message}
                </p>
              )}
            />
          </div>
        </div>
        <input type="submit" value="Confirm" className="text-white bg-brand-violet-300 p-4 rounded-xl hover:cursor-pointer" />
      </form>
    );
  }

  return (
    <main aria-label="Content">
      <h1 className="sr-only">
        Frontend Mentor, Interactive card details form
      </h1>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center md:min-h-screen">
          <div className="md:w-2/3 lg:w-1/2">
            <div className="grid gap-0 grid-cols-7 auto-rows-max">
              <div className="col-span-6 col-start-2 col-end-8 md:row-start-2">
                <CreditCardBack cardCVCNumber={values.cardCVC} />
              </div>
              <div className="col-span-6 col-start-1 cold-end-7 -mt-[24%] md:row-start-1 md:mt-0 md:mb-8">
                <CreditCardFront
                  cardName={values.cardName}
                  cardNumber={values.cardNumber}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 lg:w-1/2 px-8">
            <Form />
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
