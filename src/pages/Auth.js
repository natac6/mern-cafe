import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

export default function Auth({ setUser }) {
  return (
    <>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm />
    </>
    
  )
}