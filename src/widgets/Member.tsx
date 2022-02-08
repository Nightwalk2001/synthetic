type MemberProps = {
  avatar: string
  name: string
  description: string
  mail: string
}

export const Member = ({avatar, name, description, mail}: MemberProps) =>
  <p className={"flex space-x-5 max-w-[900px]"}>
    <img src={avatar} alt={""} width={180} height={180} className={"aspect-1 object-cover my-0 rounded-full"}/>
    <div className={"flex flex-col pt-2 indent-0"}>
      <span className={"text-lg font-semibold"}>{name}</span>
      <div className={"indent-0"}>{description}</div>
      <span className={"text-indigo-300 underline cursor-pointer"}>{mail}</span>
    </div>
  </p>