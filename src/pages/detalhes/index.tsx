import { HeaderDetailScreen } from "~/components/organisms/HeaderDetailScreen";
import { DetailScreen } from "~/components/templates/DetailScreen";

export default function Detail() {
  if (typeof window === "undefined") return null;

  return (
    <main>
      <HeaderDetailScreen />
      <DetailScreen />
    </main>
  );
}
