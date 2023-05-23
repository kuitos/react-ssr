import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Html from './Html';
import Spinner from './Spinner';
import Comments from './Comments';
import Post from './Post';

const Layout = ({ children }) => {
  return <main>{children}</main>;
};

export default function App({ assets }) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={<Spinner/>}>
        <ErrorBoundary FallbackComponent={Error}>
          <Content/>
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <article className="post">
        <Suspense fallback={<Spinner/>}>
          <Post/>
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <Suspense fallback={<Spinner/>}>
            <Comments/>
          </Suspense>
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Layout>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
    </div>
  );
}
