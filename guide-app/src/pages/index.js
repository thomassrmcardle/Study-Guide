export default function Home() {
  return (
    <>
      <head>
        <title>Omni | Home</title>
      </head>
      <div style={{ padding: '2rem' }}>
        <h1><b>Today's headlines...</b></h1>
        <div className="row">
          <a className='button' href="/signup">Get Started</a>
          <a className='button secondaryButton'>I have an account</a>
        </div>
      </div>
    </>
  );
}
