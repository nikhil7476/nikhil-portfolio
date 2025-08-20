// // pages/blog/[id].js
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { Container, Image } from "react-bootstrap";
// import { FaCalendarAlt } from "react-icons/fa";
// import articlesData from "@/utils/articlesData";

// export default function BlogSingle() {
//   const router = useRouter();
//   const { id } = router.query;

//   const article = articlesData.find((a) => a.slug === id);

//   if (!article) {
//     return (
//       <Container className="py-5 text-center">
//         <p className="text-muted">Loading article...</p>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{article.metaTitle}</title>
//         <meta name="description" content={article.metaDescription} />
//         <meta name="keywords" content={article.keywords.join(", ")} />
//         <meta property="og:title" content={article.metaTitle} />
//         <meta property="og:description" content={article.metaDescription} />
//         <meta property="og:image" content={article.featuredImage} />
//       </Head>

//       <Container className="py-5">
//         <Image
//           src={article.featuredImage}
//           alt={article.title}
//           fluid
//           rounded
//           className="mb-4"
//           style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
//         />

//         <h1 className="fw-bold mb-3">{article.title}</h1>
//         <p className="text-muted d-flex align-items-center gap-2 mb-4">
//           <FaCalendarAlt /> Published in 2025
//         </p>

//         <div className="mb-4">
//           {article.blog.split("\n").map((para, idx) => (
//             <p key={idx} className="text-secondary fs-5 mb-3">
//               {para}
//             </p>
//           ))}
//         </div>
// {/*
//         <h4 className="fw-semibold mt-5">Conclusion</h4>
//         <p className="fs-5 text-dark">{article.conclusion}</p> */}
//       </Container>
//     </>
//   );
// }

// pages/blog/[id].js
import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Image } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import articlesData from "@/utils/articlesData";

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

      <Container className="py-5">
        <Image
          src={article.featuredImage}
          alt={article.title}
          title={article.title}
          fluid
          rounded
          className="mb-4"
          style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
        />

        <h1 className="fw-bold mb-3">{article.title}</h1>
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
    </>
  );
}
