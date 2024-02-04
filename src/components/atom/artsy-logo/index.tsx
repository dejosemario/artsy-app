import Link from "next/link";
import clsx from "clsx";

type ArtsyLogoProps = {
  className?: string;
};  // Add type for props

export default function ArtsyLogo(className: ArtsyLogoProps) {
  return (
    <Link href="/">
      <h1 className={`text-grey-dark text-[1.5rem] font-bold font-stix" ${className}`}>
        ARTSY.
      </h1>
    </Link>
  );
}
