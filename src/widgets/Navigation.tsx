import Logo from "@/images/logo.svg"
import {DocSearch} from "@docsearch/react"
import {Popover} from "@headlessui/react"
import {SunIcon} from "@heroicons/react/outline"
import Link from "next/link"
import React from "react"
import {NavPopover} from "./NavPopover"

export const Navigation: React.FC = () => <div
  className={"relative px-16 lg:px-24 xl:px-36 pt-4 lg:pt-6 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6 dark:text-gray-200"}>

  <Link href={"/"}>
    <img
      src={Logo}
      alt={"back to home"}
      width={132}
      height={22}
      className={"cursor-pointer"}
    />
  </Link>

  <div className={"flex justify-between items-center w-[450px] text-md text-gray-600"}>

    <div className={"flex space-x-4"}>
      <NavPopover
        btn={<span className={"font-semibold transition hover:text-[#38bdf8]"}>项目信息</span>}
        panel={
          <Popover.Panel
            className={`absolute z-10 w-screen max-w-xs py-4 mt-1
                transform -translate-x-1/2 left-1/2 bg-white rounded-lg shadow-lg sm:pl-2`}>
            <div className={"grid grid-cols-2 gap-x-4 gap-y-5 px-6"}>
              {["背景 Background", "元件 Component", "设计 Design", "方案 Protocol", "结果 Result", "结论 Conclusion"]
                .map(d => <Link key={d} href={`/${d.split(" ")[1].toLowerCase()}`}>
                  <div className={"cursor-pointer transition hover:text-indigo-300"}>{d}</div>
                </Link>)}
            </div>
          </Popover.Panel>
        }/>

      <Link href={"/collaboration"}>
        <div className={"font-semibold cursor-pointer transition hover:text-[#38bdf8]"}>外界合作</div>
      </Link>

      <Link href={"/team"}>
        <div className={"font-semibold cursor-pointer transition hover:text-[#38bdf8]"}>队伍信息</div>
      </Link>
    </div>

    <div className={"w-[1px] h-[25px] bg-[#e2e8f0]"}/>

    <div className={"flex justify-between items-center"}>
      <SunIcon className={"w-6 h-6 text-cyan-500 cursor-pointer"}/>
      <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
      />
    </div>

  </div>
</div>

// type SvgLinkProps = {
//   logo: string
//   to: string
//   title: string
//   subtitle: string
// }
//
// const SvgLink: React.FC<SvgLinkProps> = ({logo, to, title, subtitle}) =>
//   <div className={"flex justify-between w-full"}>
//     <img src={logo} width={46} height={46} alt={""}/>
//     <div className={"flex flex-col justify-start space-y-0.5 grow max-w-[215px]"}>
//       <Link to={to}>
//         <span
//           className={"text-md font-semibold text-gray-500 cursor-pointer transition hover:text-indigo-300"}>{title}</span>
//       </Link>
//       <span className={"text-sm font-normal"}>{subtitle}</span>
//     </div>
//   </div>
