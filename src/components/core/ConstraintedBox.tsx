import type { CoreComponentsProps } from "@/types";

const ConstraintedBox = (props: Readonly<CoreComponentsProps>) => {
  const {
    children,
    classNames,
    id,
    elementRef,
    onClick,
    role,
    ariaLabel,
    ariaDescribedBy,
  } = props;

  return (
    <div
      className={`relative flex flex-col justify-start items-start w-full constrained-width p-0 mx-auto my-0 overflow-hidden transition duration-300 ease-in-out drop_in ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </div>
  );
};

export default ConstraintedBox;
