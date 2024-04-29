import axios from 'axios';//when install axios it gives a error to onAuth

const AuthPage = (props) => {//if user dosent exist
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:4001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
        </div>

        <div className="auth">
          <div className="auth-label">Password</div>
          <input className="auth-input" name="password" />
        </div>

        <button className="auth-button" type="submit">
            Enter
          </button>
      </form>
    </div>
  );
};

export default AuthPage;