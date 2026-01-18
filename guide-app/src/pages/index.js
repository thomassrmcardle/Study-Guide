

export const articles = [
  {title: "Example", desc: "Some description"},
  {title: "Example", desc: "Some description"},
  {title: "Example", desc: "Some description"},
  {title: "Example", desc: "Some description"},
  {title: "Example", desc: "Some description"},
  {title: "Example", desc: "Some description"},
];


export default function Home() {


  return (
    <>
      <head>
        <title>Omni | Home</title>
      </head>
      <div style={{ margin: '2rem 20rem' }}>
        <h1>Global Headlines</h1>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
          <div className="primaryCard storyCard">
            <img className="storyBanner" src="https://hips.hearstapps.com/hmg-prod/images/moving-to-countryside-advice-1610529118.jpg"></img>
            <div>
              <h2>Main Article</h2>
              <p>Brief description here.</p>
            </div>
          </div>
          <lu>
            {articles.map((article, index) =>
              <li className="storyCard">
                <img className="storyBanner" src="https://hips.hearstapps.com/hmg-prod/images/moving-to-countryside-advice-1610529118.jpg"></img>
                <div>
                  <h2>Article Name</h2>
                  <p>Brief description here.</p>
                </div>
              </li>
            )}
          </lu>
        </div>
        <div className="promptCard" style={{display: 'flex'}}>
          <div style={{flexGrow: '1'}}>
            <h3>Stay connected on what matters to you</h3>
            <h4>Follow topics and events as they occur</h4>
          </div>
          <div className="row">
            <a className='button' href="/signup">Sign Up</a>
            <a className='button secondaryButton' href="/login">Login</a>
          </div>
        </div>
      </div>
    </>
  );
}
