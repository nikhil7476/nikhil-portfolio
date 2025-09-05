import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useMemo } from "react";
import articlesData from "@/utils/articlesData";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";
import MetaHead from "@/components/MetaHead";

export default function BlogList() {
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const recentBlogs = useMemo(() => {
    return [...articlesData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, []);

  return (
    <>
      <MetaHead page="articles" />
      <Banner data={bannerData.article} />
      <section>
        <Container>
          <Row>
            <Col xl={9} lg={9} md={8} sm={12} xs={12}>
              <Row>
                {filteredArticles.map((article) => (
                  <Col
                    key={article.id}
                    xl={6}
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    className="mb-3"
                  >
                    <Link
                      href={`/articles/${article.slug}`}
                      title={article.title}
                    >
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
                      <div className="m-2">
                        <h5>{article.title}</h5>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xl={3} lg={3} md={4} sm={12} xs={12}>
              <h5>Search Articles</h5>
              <Form.Control
                type="text"
                placeholder="Search Articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-3"
              />
              <h5>Recent Articles</h5>
              <ul className="mb-3">
                {recentBlogs.map((blog) => (
                  <li key={blog.id} className="mb-2">
                    <Link href={`/articles/${blog.slug}`} title={blog.title}>
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
