import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("jack@example.com");
  const [userPassword, setUserPassword] = useState("qwerty");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userEmail, userPassword);
    if (userEmail && userPassword) login(userEmail, userPassword);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="jack@example.com"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
