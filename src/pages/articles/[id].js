import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import articlesData from "@/utils/articlesData";
import Link from "next/link";

export default function BlogSingle() {
  const router = useRouter();
  const { id } = router.query;

  const article = articlesData.find((a) => a.slug === id);

  if (!article) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">Loading article...</p>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.featuredImage} />
      </Head>
      <section
        className="banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${article.featuredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
        }}
      >
        <Container>
          <h1 className="fw-bold">{article.title}</h1>
          <ul className="breadcrumb d-flex align-items-center gap-2">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>{">>"}</li>
            <li>
              <Link href="/articles" title="Articles">
                Articles
              </Link>
            </li>
            <li>{">>"}</li>
            <li>{article.title}</li>
          </ul>
        </Container>
      </section>
      <section>
        <Container className="py-5">
          <h2 className="fw-bold mb-3">{article.title}</h2>
          <p className="text-muted d-flex align-items-center gap-2 mb-4">
            <FaCalendarAlt /> Published in 2025
          </p>

          {/* Render blog content as Markdown */}
          <div className="blog-content fs-5 text-dark">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.blog}
            </ReactMarkdown>
          </div>
        </Container>
      </section>
    </>
  );
}
