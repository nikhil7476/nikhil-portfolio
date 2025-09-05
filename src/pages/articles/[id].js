import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import articlesData from "@/utils/articlesData";
import Link from "next/link";
import ArticlesPreview from "@/components/ArticlesPreview";

export default function BlogSingle() {
  const router = useRouter();
  const { id } = router.query;

  const articleIndex = articlesData.findIndex((a) => a.slug === id);
  const article = articlesData[articleIndex];

  if (!article) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">Loading article...</p>
      </Container>
    );
  }

  const prevArticle = articleIndex > 0 ? articlesData[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < articlesData.length - 1
      ? articlesData[articleIndex + 1]
      : null;

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}articles/`;
  const canonicalUrl = `${baseUrl}${article.slug}`;

  return (
    <>
      <Head>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.featuredImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={article.featuredImage} />
      </Head>
      <div
        className="banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${article.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
        }}
      >
        <Container>
          <span>News & Articles</span>
          <h1 className="fw-bold">{article.title}</h1>
          <ul className="breadcrumb d-flex align-items-center gap-2">
            <li>
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li>{"/"}</li>
            <li>
              <Link href="/articles" title="Articles">
                Articles
              </Link>
            </li>
            <li>{"/"}</li>
            <li>{article.title}</li>
          </ul>
        </Container>
      </div>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>{article.title}</h2>
              <p>
                <FaCalendarAlt /> {article.date} By Nikhil Mishra
              </p>
              <div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.blog}
                </ReactMarkdown>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className="mb-3 text-start">
              {prevArticle && (
                <Link href={`/articles/${prevArticle.slug}`}>
                  <FaArrowLeft /> Previous Article
                </Link>
              )}
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className="mb-3 text-end">
              {nextArticle && (
                <Link href={`/articles/${nextArticle.slug}`}>
                  Next Article <FaArrowRight />
                </Link>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <span>Read Latest</span>
              <h2>Read More News & Articles</h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <ArticlesPreview />
          </Row>
        </Container>
      </section>
    </>
  );
}
