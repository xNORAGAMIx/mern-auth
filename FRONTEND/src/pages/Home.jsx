const Home = () => {
  return (
    <>
    <h1 className="font-extrabold uppercase text-4xl text-center mt-10 
    bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent ">Authentication App Using MERN Stack!</h1>
      <div className="flex flex-col gap 4 mx-auto max-w-5xl px-6 py-12 bg-transparent m-10 rounded-3xl shadow-2xl shadow-violet-800">
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">Overview</h2>
          <p className="text-xl px-6">
            Our authentication app is a robust and secure web application
            developed using the MERN stack (MongoDB, Express.js, React.js, and
            Node.js). Designed to provide comprehensive user management, it
            supports user sign-in, account deletion, profile updates, and Google
            authentication. By integrating modern technologies and best
            practices, this app ensures a seamless and secure user experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">Key Features</h2>
          <ol className="list-decimal px-8 text-xl py-2">
            <li>
              User Authentication and Authorization:
              <ul className="list-disc px-6 py-2">
                <li>Sign-in/Sign-up:</li>
                <li>JWT & Cookies:</li>
                <li>Google Authentication:</li>
              </ul>
            </li>
            <li>
              State Management with Redux Toolkit:
              <ul className="list-disc py-2 px-6">
                <li>Redux Toolkit:</li>
              </ul>
            </li>
            <li>
              Profile Management:
              <ul className="list-disc py-2 px-6">
                <li>Image Uploads:</li>
                <li>Account Deletion:</li>
              </ul>
            </li>
            <li>
              Password Security:
              <ul className="list-disc py-2 px-6">
                <li>Bcrypt Hashing:</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">Technical Stack</h2>
          <ul className="list-disc px-8 text-xl py-2">
            <li>
              Frontend:
              <ul className="list-disc px-8 text-xl py-2">
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Tailwind CSS</li>
              </ul>
            </li>
            <li>
              Backend:
              <ul className="list-disc px-8 text-xl py-2">
                <li>Node.js & Express.js:</li>
                <li>JWT:</li>
                <li>Bcrypt:</li>
              </ul>
            </li>
            <li>
              Database:
              <ul className="list-disc px-8 text-xl py-2">
                <li>MongoDB:</li>
              </ul>
            </li>
            <li>
              Cloud Storage:
              <ul className="list-disc px-8 text-xl py-2">
                <li>Firebase Storage:</li>
              </ul>
            </li>
            <li>
              Authentication Services:
              <ul className="list-disc px-8 text-xl py-2">
                <li>Firebase Authentication:</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">
            Security and Best Practices
          </h2>
          <ul className="list-disc px-8 text-xl py-2">
            <li>JWT Authentication</li>
            <li>Secure Password Handling</li>
            <li>Cookies for Token Storage:</li>
            <li>Data Validation:</li>
            <li>Google Authentication:</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">Usage</h2>
          <ul className="list-disc px-8 text-xl py-2">
            <li>Sign-Up:</li>
            <li>Sign-In:</li>
            <li>Profile Update:</li>
            <li>Account Deletion:</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6">
          <h2 className="font-semibold text-2xl">Conclusion</h2>
          <p className="text-xl px-6">
            This authentication app is a comprehensive solution for secure user
            management, showcasing a full-fledged implementation of modern
            authentication practices using the MERN stack. The integration of
            Firebase Authentication for Google sign-ins adds an extra layer of
            convenience and security. Whether you are looking to enhance an
            existing project or start a new one, this app serves as a reliable
            platform for user authentication and management.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
