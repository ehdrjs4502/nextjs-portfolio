import useMount from "@/app/hooks/useMount";
import { useTheme } from "next-themes";

type DarkModeIconProps = {
  lightIcon: React.ReactNode;
  darkIcon: React.ReactNode;
};

// 테마에 따라서 아이콘 변경
const DarkModeIcon: React.FC<DarkModeIconProps> = ({ lightIcon, darkIcon }) => {
  const mounted = useMount();
  const { theme } = useTheme();

  if (!mounted) return null;

  return theme === "dark" ? darkIcon : lightIcon;
};

export default DarkModeIcon;
