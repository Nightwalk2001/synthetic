import {useRouter} from "next/router"

const Home = () => {
  const router = useRouter()
  const toProject = () => router.push("/background")
  const toTeam = () => router.push("/team")

  return <div className={"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] mx-auto"}>
    <div className={"flex flex-col items-center w-full mx-auto py-4 text-center"}>
      <div className={"mb-9 text-7xl text-gray-900 font-black tracking-wide"}>
        多细胞模块共催化合成高价值产品的应用。
      </div>
      <div className={"w-[620px] font-ff text-2xl text-gray-600 tracking-wider"}>
        探究使用人工双菌体系模块共催化合成酪醇，并对体系进行优化，在此基础上使用三菌体系，模块共催化合成酪醇衍生物红景天苷和羟基酪醇。
      </div>

      <div className={"flex my-8"}>
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