"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import formatCreditCardNumber from "@/utils/format-credit-card-number";
import Image from "next/image";
import iconComplete from "@/public/icon-complete.svg";

const Success = ({ onClick }) => {
  const handleClick = () => {
    onClick(false);
  };

  return (
    <div className="flex flex-col justify-center text-center my-12 lg:my-0">
      <Image src={iconComplete} alt="Icon, checkmark" width={80} height={80} className="mx-auto mb-10" />
      <h2 className="text-3xl text-brand-violet-300 uppercase tracking-widest mb-3">Thank you!</h2>
      <p className="text-brand-violet-200 mb-10">We&apos;ve added your card details</p>
      <button
        onClick={handleClick}
        className="text-white bg-brand-violet-300 hover:bg-brand-gradient-end focus:bg-brand-gradient-end px-4 py-3 rounded-lg transition duration-200 ease-in-out hover:cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
};

export default function Form({ values, onChange }) {
  const [isSuccessfullySubmitted, setSuccessfullySubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: values });

  const onSubmit = (data) => {
    setSuccessfullySubmitted(true);
  };

  return (
    <>
      {isSuccessfullySubmitted ? (
        <Success onClick={setSuccessfullySubmitted} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 lg:gap-8 my-12 lg:my-0"
        >
          <div className="flex flex-col">
            <label
              htmlFor="cardName"
              className="text-xs lg:text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
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
                required: "Can't be blank",
                onChange: (e) =>
                  onChange({
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
              className="text-xs lg:text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              name="cardNumber"
              value={formatCreditCardNumber(values.cardNumber)}
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
                required: "Can't be blank",
                maxLength: {
                  value: 19,
                  message: "Must be 16 digits",
                },
                onChange: (e) =>
                  onChange({
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
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            <fieldset>
              <legend className="text-xs lg:text-sm text-brand-violet-300 uppercase tracking-widest mb-2">
                Exp. Date (MM/YY)
              </legend>
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="cardExpMonth" className="sr-only">
                    Expiration Month
                  </label>
                  <input
                    id="cardExpMonth"
                    name="cardExpMonth"
                    placeholder="MM"
                    type="tel"
                    inputMode="numeric"
                    className={`rounded-lg p-3 focus:ring-transparent ${
                      errors.cardExpMonth
                        ? "border-brand-red hover:border-brand-red focus:border-brand-red"
                        : "border-brand-violet-100 hover:border-brand-gradient-end focus:border-brand-gradient-end"
                    }`}
                    aria-invalid={errors.cardExpMonth ? "true" : "false"}
                    {...register("cardExpMonth", {
                      required: "Can't be blank",
                      maxLength: {
                        value: 2,
                        message: "Must be 2 digits",
                      },
                      pattern: {
                        value: /^(1[0-2]|0[1-9])+$/,
                        message: "Wrong format, valid numbers only",
                      },
                      onChange: (e) =>
                        onChange({
                          ...values,
                          cardExpMonth: e.target.value,
                        }),
                    })}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cardExpYear" className="sr-only">
                    Expiration Year
                  </label>
                  <input
                    id="cardExpYear"
                    name="cardExpYear"
                    placeholder="YY"
                    type="tel"
                    inputMode="numeric"
                    className={`rounded-lg p-3 focus:ring-transparent ${
                      errors.cardExpYear
                        ? "border-brand-red hover:border-brand-red focus:border-brand-red"
                        : "border-brand-violet-100 hover:border-brand-gradient-end focus:border-brand-gradient-end"
                    }`}
                    aria-invalid={errors.cardExpYear ? "true" : "false"}
                    {...register("cardExpYear", {
                      required: "Can't be blank",
                      maxLength: {
                        value: 2,
                        message: "Must be 2 digits",
                      },
                      pattern: {
                        value: /^(?:[0-9]{2})+$/,
                        message: "Wrong format, valid numbers only",
                      },
                      onChange: (e) =>
                        onChange({
                          ...values,
                          cardExpYear: e.target.value,
                        }),
                    })}
                  />
                </div>
              </div>
              <ErrorMessage
                errors={errors}
                name="cardExpMonth"
                render={({ message }) => (
                  <p role="alert" className="text-brand-red text-xs mt-1">
                    {message}
                  </p>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="cardExpYear"
                render={({ message }) => (
                  <p role="alert" className="text-brand-red text-xs mt-1">
                    {message}
                  </p>
                )}
              />
            </fieldset>
            <div className="flex flex-col">
              <label
                htmlFor="cardCVC"
                className="text-xs lg:text-sm text-brand-violet-300 uppercase tracking-widest mb-2"
              >
                CVC
              </label>
              <input
                id="cardCVC"
                name="cardCVC"
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
                  required: "Can't be blank",
                  maxLength: {
                    value: 3,
                    message: "Must be 3 digits",
                  },
                  pattern: {
                    value: /^(?:[0-9]{3})+$/,
                    message: "Wrong format, valid numbers only",
                  },
                  onChange: (e) =>
                    onChange({
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
          <input
            type="submit"
            value="Confirm"
            className="text-white bg-brand-violet-300 hover:bg-brand-gradient-end focus:bg-brand-gradient-end px-4 py-3 rounded-lg transition duration-200 ease-in-out hover:cursor-pointer mt-2 md:mt-4"
          />
        </form>
      )}
    </>
  );
}
