import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[12rem]"
      href={Strings.linkedInLink}
      target="_blank"
    >
      Let&apos;s Connect
    </Link>
  );
};

export default TalkButton;
