import type { CoreComponentsProps } from "@/types";

const GridBox = (props: Readonly<CoreComponentsProps>) => {
  const {
    children,
    classNames,
    onClick,
    id,
    elementRef,
    role,
    ariaLabel,
    ariaDescribedBy,
  } = props;

  return (
    <div
      className={`relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4 transition duration-300 ease-in-out ${classNames}`}
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

export default GridBox;
