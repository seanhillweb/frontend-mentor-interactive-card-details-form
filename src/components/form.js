"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import formatCreditCardNumber from "@/utils/format-cred-card-number";
import { creditCardValues } from "@/data/credit-card";

export default function Form() {
  const [values, setValues] = useState(creditCardValues);

  const validationSchema = yup.object({
    cardName: yup.string().required("Required"),
    cardNumber: yup
      .number()
      .required("Required")
      .typeError("Wrong format, numbers only"),
    cardCVC: yup
      .number()
      .required("Required")
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
      <input
        type="submit"
        value="Confirm"
        className="text-white bg-brand-violet-300 p-4 rounded-xl hover:cursor-pointer"
      />
    </form>
  );
}