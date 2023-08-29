import { useNavigate } from "react-router"

const NotFound = () => {

  const nav = useNavigate();

  return (
    <div className="h-[400px] w-[400px] mx-auto mt-10">
      <lottie-player src="https://lottie.host/e1e2fb37-1be4-4496-870a-89366098a23f/J7u2cocgps.json" background="#FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
      <div className="text-center space-y-2">
        <h1 className="text-pink-600">Page Not Found</h1>
        <button onClick={() => nav(-1)}>Back To Home Page</button>
      </div>

    </div>
  )
}
export default NotFound