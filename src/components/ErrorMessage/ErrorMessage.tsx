import React from "react";

interface Props {
  errors: string[];
}

const ErrorMessage: React.FC<Props> = ({ errors = [] }) => {
  return errors?.length > 0 ? (
    <p color="red" className="text-red-900 font-bold - text-[14px]">
      {errors.join(", ")}.
    </p>
  ) : null;
};

export default ErrorMessage;
