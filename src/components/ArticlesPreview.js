import articlesData from "@/utils/articlesData";
import Link from "next/link";
import Image from "next/image";

function ArticlesPreview() {
  // take the latest 4 articles (assuming last ones are the newest)
  const latestArticles = articlesData.slice(-4).reverse();

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between">
        {latestArticles.map((article) => (
          <div key={article.id} style={{ width: "24%" }}>
            <div>
              <Link href={`/articles/${article.slug}`}>
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  title={article.title}
                  width={350}
                  height={350}
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="m-2">
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticlesPreview;
