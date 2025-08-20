import Link from "next/link";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import articlesData from "@/utils/articlesData";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import MetaHead from "@/components/MetaHead";

export default function BlogList() {
  return (
    <>
      <MetaHead page="portfolio" />
      <Banner data={bannerData.article} />
      <Container className="my-5">
        <h1 className="text-center mb-4 fw-bold">Latest Articles</h1>
        <Row className="g-4">
          {articlesData.map((article) => (
            <Col key={article.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={article.featuredImage}
                  alt={article.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold">
                    {article.title}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {article.metaDescription}
                  </Card.Text>
                  <Link
                    href={`/articles/${article.slug}`}
                    passHref
                    legacyBehavior
                  >
                    <Button
                      variant="primary"
                      className="mt-auto d-flex align-items-center justify-content-center gap-2"
                    >
                      Read More <FaArrowRight />
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
