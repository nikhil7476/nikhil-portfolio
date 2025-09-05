import articlesData from "@/utils/articlesData";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

function ArticlesPreview() {
  // take the latest 4 articles (assuming last ones are the newest)
  const latestArticles = articlesData.slice(-4).reverse();

  return (
    <>
      <Row className="d-flex flex-wrap justify-content-between">
        {latestArticles.map((article) => (
          <Col
            key={article.id}
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className="mb-3"
          >
            <Link href={`/articles/${article.slug}`} title={article.title}>
              <div>
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  title={article.title}
                  width={350}
                  height={350}
                  className="img-fluid rounded"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="m-2">{article.title}</div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ArticlesPreview;
