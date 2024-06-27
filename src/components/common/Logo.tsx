import Image from "next/image";
import logoImage from "@/images/LogoTest.png";

export function Logo(props: React.ComponentPropsWithoutRef<"img">) {
  return (
    <Image
      className={props.className}
      src={logoImage}
      alt=""
      width={469}
      height={100}
      unoptimized
    />
  );
}
