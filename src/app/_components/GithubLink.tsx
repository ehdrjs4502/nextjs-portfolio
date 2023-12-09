import { Tooltip } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

type linkProps = {
  url: string;
};

export default function GithubLink({ url }: linkProps) {
  return (
    <Link href={url.toString()} target="_blank">
      <Tooltip title="깃허브로 이동" arrow placement="top">
        <GitHubIcon />
      </Tooltip>
    </Link>
  );
}
