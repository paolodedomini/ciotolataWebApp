import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import fetchData from "@/utils/fetchData";
/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await fetchData(
    "https://paolodedomini.github.io/ciotolataWebApp/ciotolata.json"
  );

  unstable_setRequestLocale(locale);
  console.log(data, "data");
  return <main className={styles.main}>deeostronzo</main>;
}
