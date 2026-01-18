
export default function Signup() {
    return (
        <>
            <head>
                <title>Omni | Sign Up</title>
                <meta name="description" content="Join Omni and stay informed with personalized news from around the world." />
            </head>
            <div>
                <h1>Sign Up</h1>
                <div className="card">
                    <form>
                        <label>
                            Username:
                            <input type="text" name="username" />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <br />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}