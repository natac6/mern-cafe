import SignUpForm from "../components/SignUpForm"

export default function Auth({ setUser }) {
  return (
    <>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
    </>
    
  )
}