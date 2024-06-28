import Image from "next/image";
import logoImage from "@/images/LogoTest.png";
import logoImageFooter from "@/images/LogoFooter.png";

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

export function Logo1(props: React.ComponentPropsWithoutRef<"img">) {
  return (
    <Image
      className={props.className}
      src={logoImageFooter}
      alt=""
      width={500}
      height={500}
      unoptimized
    />
  );
}
