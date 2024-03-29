import Image from "next/image";
import logoImage from "@/images/logo50.png";

export function Logo(props: React.ComponentPropsWithoutRef<"img">) {
  return (
    <Image
      className={props.className}
      src={logoImage}
      alt=""
      width={83}
      height={50}
      unoptimized
    />
  );
}
