type SectionTitleProps = {
  children: string;
  id?: string;
  subtitle?: string;
};

const SectionTitle = ({
  children,
  id,
  subtitle,
}: Readonly<SectionTitleProps>) => {
  return (
    <header className="flex w-full max-w-4xl flex-col items-center justify-center gap-3 text-center mx-auto">
      <h2
        id={id}
        className="text-center mx-auto text-3xl/8 md:text-4xl/9 font-bold tracking-tight"
      >
        {children}
      </h2>
      {subtitle ? (
        <p className="text-base/7 md:text-lg/8 text-[var(--textColorLight)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

export default SectionTitle;
