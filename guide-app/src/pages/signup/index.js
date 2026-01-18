
export default function Signup() {
    return (
        <>
            <head>
                <title>Omni | Sign Up</title>
                <meta name="description" content="Join Omni and stay informed with personalized news from around the world." />
            </head>
            <div style={{ margin: "2rem 20rem", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Sign Up</h1>
                <div className="card field">
                    <form>
                        <label>
                            <h3>Username:</h3>
                            <input type="text" name="omni_username" />
                        </label>
                        <br />
                        <label>
                            <h3>Email:</h3>
                            <input type="email" name="email" />
                        </label>
                        <br />
                        <label>
                            <h3>Password:</h3>
                            <input type="password" name="omni_password" />
                        </label>
                        <br />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}