import React from "react"

type ArticleProps = {
  children: React.ReactNode
}

export const Article = ({children}: ArticleProps) => <div
  className={"prose flex flex-col min-w-[70%] max-w-4/5 mx-auto mt-20"}>
  {children}
</div>