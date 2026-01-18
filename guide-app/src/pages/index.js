export default function Home() {
  return (
    <>
      <head>
        <title>Omni | Home</title>
      </head>
      <div style={{ padding: '2rem' }}>
        <h1><b>Today's headlines...</b></h1>
        <div style={{display: 'flex'}}>
          <div style={{flexGrow: '1'}}>
            <h3>Stay connected on what matters to you</h3>
            <h4>Follow topics and events as they occur</h4>
          </div>
          <div className="row">
            <a className='button' href="/signup">Get Started</a>
            <a className='button secondaryButton'>I have an account</a>
          </div>
        </div>
      </div>
    </>
  );
}
