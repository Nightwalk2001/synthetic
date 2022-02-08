import {useRouter} from "next/router"

const Home = () => {
  const router = useRouter()
  const toProject = () => router.push("/background")
  const toTeam = () => router.push("/team")

  return <div className={"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] mx-auto"}>
    <div className={"flex flex-col items-center w-full mx-auto py-4 text-center"}>
      <div className={"mb-9 text-7xl text-gray-900 font-black tracking-wide"}>
        多细胞模块共催化合成高价值产品的应用。
      </div>
      <div className={"px-[150px] font-ff text-xl text-gray-600"}>
        探究使用多菌共催化体系合成酪醇及其衍生物。
      </div>

      <div className={"flex my-10"}>
        <button
          onClick={toProject}
          className={"mr-12 px-3.5 py-2.5 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-400"}>
          了解项目
        </button>
        <button
          onClick={toTeam}
          className={"px-3.5 py-2.5 text-gray-500 bg-white rounded-md shadow-md hover:bg-gray-50"}>
          认识我们的团队
        </button>
      </div>
    </div>

  </div>
}

export default Home