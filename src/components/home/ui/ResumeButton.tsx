import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href={
        "https://drive.google.com/file/d/184hehMl2Rp86knlwbdg9mD_tPvJhfRIA/view?usp=sharing"
      }
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
