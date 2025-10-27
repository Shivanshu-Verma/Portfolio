import type { CoreComponentsProps } from "@/types";

const Column = (props: Readonly<CoreComponentsProps>) => {
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
      className={`relative flex flex-col justify-start items-start transition duration-300 ease-in-out ${classNames}`}
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

export default Column;
