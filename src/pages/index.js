import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Welcome to Modular Fiction Writing!"
      description="A microsite dedicated to modular fiction content strategy">
      <main>
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h1>Welcome to  Modular Fiction Writing!</h1>
          <p>
            This microsite is dedicated to providing comprehensive guidance on modular fiction writing. We outline best practices in reuse strategy and structured authoring to automate your fiction writing.
          </p>
          <p>
            Here, you'll find resources, insights, and the latest news on modular fiction writing. Learn to streamline, optimize, and publish more faster by adopting reuse strategy and structured authoring. 
          </p>
          <p>
            Use the navigation above to explore sections on getting started, creating genre-content maps, and troubleshooting common issues and questions.
          </p>
        </div>
      </main>
    </Layout>
  );
}
