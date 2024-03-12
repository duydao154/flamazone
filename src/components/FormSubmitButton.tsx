"use client";

import { ComponentProps } from "react";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";
type FormSubmitButtonProps = {
  children: React.ReactNode; // to add another component inside
  className?: string;
} & ComponentProps<"button">; //create a manual props and also add it to the default props that the <button> already has

export default function FormSubmitButton({
  children,
  className,
  ...props // for the remaining props that we pass from ComponentProps
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props} // so that the self created button has all the props of a normal button
      className={`btn btn-primary ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
