import Col1 from "@/images/col1.webp"
import Col2 from "@/images/col2.webp"
import Col3 from "@/images/col3.webp"
import Col4 from "@/images/col4.webp"
import Col5 from "@/images/col5.webp"
import Col6 from "@/images/col6.webp"
import Col7 from "@/images/col7.webp"
import Col8 from "@/images/col8.webp"
import Col9 from "@/images/col9.webp"
import {Article, Image} from "@/widgets"

const Collaboration = () => {
  return <Article>
    <div>
      为了完善我们的项目，获得更好的实验结果和wiki设计，以更好地完成本次比赛，SYSU-SynMicrob的队员们积极与外界寻求合作。合作渠道包含了线上与线下的多种途径。
    </div>
    <h2>一、与本校iGem金牌队伍交流</h2>
    <p>
      2022年1月26日21:00，为解决在建模中遇到的问题，SYSU-SynMicrob队员与曾随本校SYSU-Software（iGem软件队）于2019、2020年两获iGem金奖的王佑琪师兄进行线上会议，展开交流互助。交流内容如下：
    </p>
    <h3>1.SYSU-Software可对本项目提供的帮助：</h3>
    <div className={"indent-0"}>
      1)自动化设计：SYSU-SynMicrob队伍实验的目标产物以及目标产量随时间的变化曲线，可输入iGem-Software所设计的软件，软件将设计出目标产物的基因线路，提供合适的酶和各项参数。
    </div>
    <div className={"indent-0"}>
      2)图像搜索：将设计好的基因线路在数据库中搜索，通过比对相似的路径，寻找可优化的地方。也可将SYSU-SynMicrob自行设计的基因线路输入数据库，寻找可优化之处
    </div>
    <div className={"indent-0"}>
      3)贝叶斯优化：把产物浓度随菌体浓度、葡萄糖浓度、菌体比例变化的公式输入软件，通过贝叶斯优化，模拟出更加好的参数，从而提高产量。
    </div>
    <h3>2.本队伍SYSU-Synmicrob的项目能够对SYSU-Software提供的帮助：</h3>
    <div>
      本项目的实验结果可优化SYSU-Software的软件，检验软件自动化设计存在的问题、调整软件贝叶斯优化模型的参数。
    </div>
    <Image src={Col1}/>
    <Image src={Col2}/>

    <h2>二、与来访学者进行学术交流</h2>
    <p>
      2021年12月31日，中科院深圳先进技术研究院易啸研究员于南校园生物楼进行宣讲，报告的主持人为本队伍的PI刘建忠教授。SYSU-SynMicrob五名队员到场听会，记录易啸研究员分享的合成生物学竞赛相关事项。
    </p>
    <div className={"flex justify-center space-x-10"}>
      <Image src={Col3}/>
      <Image src={Col4}/>
    </div>
    <Image src={Col5}/>

    <h2>三、与睿博兴科生物技术公司合作</h2>
    <p>
      我们在实验过程中，在使用CRISPR
      Cas9敲除feaB基因时，需对该基因及其上下游同源序列进行测序，并合成能表达靶向feaB的sgRNA的pTarget质粒，这些工作由睿博兴科生物技术公司完成。同时，合成质粒的测序，也依赖该公司其完成。
    </p>
    <div className={"flex justify-center space-x-10"}>
      <Image src={Col6}/>
      <Image src={Col7}/>
    </div>

    <h2>四、通过微信公众号</h2>
    <p>
      为更好地宣传队伍的项目，从而寻求来自校内外的关注和合作，我们创立了队伍专属的微信公众号SynMicrob，发表有关项目介绍、队员招募的文章。目前所发文章已超过300+阅读量。
    </p>
    <div className={"flex justify-center space-x-10"}>
      <Image src={Col8}/>
      <Image src={Col9}/>
    </div>

  </Article>
}

export default Collaboration