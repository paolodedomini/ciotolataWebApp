import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import fetchData from "@/utils/fetchData";
import { filterDataByAuthors } from "@/utils/filterData";
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
  unstable_setRequestLocale(locale);
  const data = await fetchData(
    "https://paolodedomini.github.io/ciotolataWebApp/api/ciotolata.json"
  );
  const dataByAuthors = await filterDataByAuthors(data);
  const randomIndex = Math.floor(Math.random() * dataByAuthors.length - 1);
  const randomQuote = dataByAuthors[randomIndex].text;
  const nextRandomQuote = dataByAuthors[randomIndex + 1].text;
  const prevRandomQuote = dataByAuthors[randomIndex - 1].text;

  return (
    <main className={styles.main}>
      {prevRandomQuote} <br />
      {randomQuote}
      <br />
      {nextRandomQuote}
    </main>
  );
}
