export default function Home() {
  return (
    <>
      <head>
        <title>Welcome to Guide</title>
      </head>
      <div style={{ padding: '2rem' }}>
        <h1><b>The free and effective tool for your studies</b></h1>
        <div className="row">
          <Link className='button' href="/signup">Get Started</Link>
          <Link className='button secondaryButton'>I have an account</Link>
        </div>
      </div>
    </>
  );
}
