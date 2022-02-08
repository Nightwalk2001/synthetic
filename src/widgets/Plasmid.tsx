type PlasmidProps = {
  title: string
  graph: string
  seq: string
}

export const Plasmid = ({title, graph, seq}: PlasmidProps) => {
  return <>
    <h2>{title}</h2>
    <div className={"indent-0"}>图谱：</div>
    <img src={graph} alt="" className={"self-center"}/>
    <div className={"indent-0"}>序列：</div>
    <div className={"font-ff break-words uppercase"}>{seq}</div>
  </>
}