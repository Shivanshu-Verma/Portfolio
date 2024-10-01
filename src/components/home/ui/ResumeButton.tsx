import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href={
        "https://drive.google.com/file/d/1xIYEYDblOmY8KKfOb6oTCu38TiOXsrpr/view?usp=drive_link"
      }
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
