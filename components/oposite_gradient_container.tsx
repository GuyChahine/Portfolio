export default function SectionContainer({
  children,
  className = "",
  bg_gradient = false,
  tr_blur = false,
  lb_blur = false,
}: {
  children: React.ReactNode;
  className?: string;
  bg_gradient?: boolean;
  tr_blur?: boolean;
  lb_blur?: boolean;
}) {
  return (
    <div
      className={
        bg_gradient
          ? `bg-gradient-to-br from-primary via-secondary/5 to-primary from-10% to-90% relative w-full overflow-hidden inset-0 ${className}`
          : ""
      }
    >
      {tr_blur ? (
        <div className="bg-secondary/5 size-96 absolute top-0 right-0 rounded-full blur-3xl"></div>
      ) : null}
      {lb_blur ? (
        <div className="bg-secondary/5 size-96 absolute bottom-0 left-0 rounded-full blur-3xl"></div>
      ) : null}
      {children}
    </div>
  );
}
