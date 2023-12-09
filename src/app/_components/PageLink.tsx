import { Tooltip } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

type linkProps = {
  url: string;
};

export default function PageLink({ url }: linkProps) {
  return (
    <Link href={url} target="_blank">
      <Tooltip title="페이지로 이동" arrow placement="top">
        <HomeIcon />
      </Tooltip>
    </Link>
  );
}
