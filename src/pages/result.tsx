import {BarChart} from "@/charts"
import Op1 from "@/images/op1.webp"
import Op10 from "@/images/op10.webp"
import Op11 from "@/images/op11.webp"
import Op12 from "@/images/op12.webp"
import Op2 from "@/images/op2.webp"
import Op3 from "@/images/op3.webp"
import Op4 from "@/images/op4.webp"
import Op5 from "@/images/op5.webp"
import Op6 from "@/images/op6.webp"
import Op7 from "@/images/op7.webp"
import Op8 from "@/images/op8.webp"
import Op9 from "@/images/op9.webp"
import Rs1 from "@/images/rs1.webp"
import Rs10 from "@/images/rs10.webp"
import Rs11 from "@/images/rs11.webp"
import Rs12 from "@/images/rs12.webp"
import Rs13 from "@/images/rs13.webp"
import Rs14 from "@/images/rs14.webp"
import Rs15 from "@/images/rs15.webp"
import Rs16 from "@/images/rs16.webp"
import Rs17 from "@/images/rs17.webp"
import Rs18 from "@/images/rs18.webp"
import Rs2 from "@/images/rs2.webp"
import Rs3 from "@/images/rs3.webp"
import Rs4 from "@/images/rs4.webp"
import Rs5 from "@/images/rs5.webp"
import Rs6 from "@/images/rs6.webp"
import Rs7 from "@/images/rs7.webp"
import Rs8 from "@/images/rs8.webp"
import Rs9 from "@/images/rs9.webp"
import {Article, Image} from "@/widgets"

const Result = () => {
  return <Article>
    <h2>1 pZEA-SpyTag-ARO10-(GSG)2-yahk-SpyCatcher 质粒的构建</h2>
    <p>
      重组反应平板上成功长出单菌落（图1），说明很有可能重组成功，为避免卫星菌落，挑选 20
      个单菌落进形PCR（图2），电泳结果中虽然阴性对照存在少量条带，但重组反应对应条带很亮，很有可能为阳性。一代测序结果直接证明了重组反应正确，成功构建pZEA-SpyTag-ARO10-(GSG)2-yahk-SpyCatcher
      质粒。
    </p>
    <Image src={Rs1}/>
    <div className={"flex justify-center space-x-8"}>
      <Image src={Rs2}/>
      <Image src={Rs3}/>
    </div>
    <h2>2 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒的构建</h2>
    <p>
      平板上出现一定数量的菌落（图3），说明有目的基因导入成功的可能性。取平板菌落进行菌落PCR，并对所得质粒进行电泳，电泳结果有目标质粒条带（第 3、5、6、7、13、16、17
      号泳道）出现（图4），说明重组质粒转化成功，可挑取成功转化的菌落培养。
    </p>
    <Image src={Rs4}/>
    <div className={"flex justify-center space-x-8"}>
      <Image src={Rs5}/>
      <Image src={Rs6}/>
    </div>
    <h2>3 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒转化 E.coli BW25113</h2>
    <p>
      如图5B，培养 24h 后平板上长出加多菌落，说明成功构建转化菌。本实验中成功将 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 转化 BW25113，得到重组菌并挑取培养基上的单菌落进行扩培。
    </p>
    <Image src={Rs7}/>
    <h2>4 空载质粒pZEA电转入酪氨酸高产菌E. coli DOPA-30N-ΔREG-ΔhpaBC</h2>
    <p>
      含氨苄的LB平板上长出许多单菌落，说明成功构建含 pZEA 质粒的 E. coli DOPA-30N-ΔREG-ΔhpaBC。
    </p>
    <Image src={Rs8}/>
    <h2>5 不同途径对酪氨酸转化酪醇的影响</h2>
    <p>
      如图7和表1所示，在三种途径中，pZBK-QS-ARO10-yahk 途径产量最低，几乎不产酪醇。pZEA-Spy-ARO10-yahk和pZEA-Spy-aas-yahk两条途径产量接近，分别为 242mg/L和260
      mg/L，经过双因素方差分析，显示两者差异显著({`P<0.01`})，说明pZEA-Spy-aas-yahk 途径酪醇合成的产量最高。因此，后续实验以该途径开展。
    </p>
    <BarChart/>
    <Image src={Rs9}/>
    <h2>6 feaB 敲除高产酪氨酸菌株的构建</h2>
    <p>
      在 Kan+Spe平板上，出现阳性克隆，表明 pTargetF-feaB 质粒转入进含 pCas9
      的高产酪氨酸菌株。同时菌落 PCR 条带位于 1000bp 左右，表明不存在 feaB 基因，敲除成功。
    </p>
    <Image src={Rs10}/>
    <Image src={Rs11}/>
    <p>
      在 Kan 抗性平板中，1-12 号单克隆除了 7 号没有成功消除 pTargetF，其余均成功消除质粒（图10）。在无抗性平板中，1-12 号单克隆除了 9 号均成功消除pCas9 质粒（图11）。
    </p>
    <Image src={Rs12}/>
    <Image src={Rs13}/>

    <h2>7 feaB 敲除对全细胞催化从头合成酪醇的影响 </h2>
    <p>
      酪氨酸高产菌和 feaB 敲除的高产菌均能全细胞催化从头合成酪醇(图12)，24 h 产量分别为 245.49± 7.96、263.03± 4.27 (mg/L)，48 h 后产量没有明显变化(表2)。feaB
      敲除能够提高酪醇产量(图13，P=0.02)。
    </p>

    <div className={"flex  justify-center space-x-10 items-end"}>
      <Image src={Rs14}/>
      <Image src={Rs15}/>
    </div>

    <h2>8 热处理温度对全细胞共催化合成酪醇的影响</h2>
    <p>
      上游菌株采用酪氨酸高产菌会提高前体酪氨酸产量，进一步提高酪醇产量。在下游菌株 55℃处理后，产量和转化率达到最高，分别为 1.05 ± 0.09 g/L 和 5.38 ± 0.43%。
    </p>
    <Image src={Rs16}/>

    <h2>9 酪醇双菌体系的优化</h2>
    <p>
      我们按照方案中的优化措施，对酪醇双菌体系的上下游模块菌比例、体系中葡萄糖浓度以及总菌体浓度进行了探究。发现上下游模块菌的比例为4:1、催化体系中葡萄糖浓度为20g/L、菌体总OD600=25时，该体系酪醇产量最高，达到1.37g/L。
    </p>
    {[Op1, Op2, Op3, Op4, Op5, Op6, Op7, Op8, Op9, Op10, Op11, Op12].map((d, i) => <Image key={i} src={d}
                                                                                          classes={"my-2"}/>)}

    <h2>10 构建三菌体系生产酪醇衍生物</h2>
    <p>
      为验证pZEA-spy-hpaB-C和pZEA-spy-UGT85A1质粒构建是否成功，采用质粒提取试剂盒提取重组菌中的质粒进行PCR，所用引物为含SpyCatcher和SpyTag两端序列的正反引物。电泳条带结果如图15，所用Marker为
      DL 5000 plus DNA Marker。两目标条带大小分别为2400bp（1-3号泳道）和1800bp（4-6号泳道），经与Marker条带比对后确认无误，从而验证了第三模块菌成功构建。
    </p>
    <Image src={Rs17}/>
    <p>
      在验证第三模块菌构建成功后，我们将两种第三模块菌分别加入酪醇双菌体系，从而分别建立了红景天苷三菌体系和羟基酪醇三菌体系。经共催化后，我们提取样品并用HPLC检测。经与标准品的峰比对，发现三菌体系产出了酪醇衍生物。
    </p>
    <Image src={Rs18}/>

    <h2>总结</h2>
    <div>
      我们将合成的质粒导入大肠杆菌中，使模块菌能够表达外源途径，实现不同模块菌在酪醇生产过程中的接力分工。我们构建了将pZEA空载质粒导入酪氨酸高产菌E. coli
      DOPA-30N-ΔREG-ΔhpaBC，构建了上游模块菌；对酪氨酸高产菌株通过CRISPR
      Cas9进行了feaB基因的敲除，并导入pZEA-Spy-aas-yahK质粒，构建了下游模块菌，经由热处理提高了膜的通透性。初试的酪醇为产量1.05
      g/L，相比单菌生产提高了4.25倍。之后，我们通过探究最合适的上下游模块菌比例、葡萄糖浓度和总菌种浓度，对该酪醇双菌体系进行优化，酪醇产量到了1.37 g/L。之后，我们将新构建的两个第三模块菌，E.coli BW25113
      pZEA-Spy-UGT和E.coli BW25113 pZEA-Spy-hpaB-C，即分别是红景天苷生产菌和羟基酪醇生产菌，加入酪醇双菌体系。这两种三菌体系分别生产出了酪醇的高价值衍生物，红景天苷和羟基酪醇。
    </div>
    <div>
      我们的结果证明了多细胞模块化生产的可实现性，体现了合成生物学即插即用、格物致知的特点。即可以通过不同模块菌的组合，辅以催化体系的优化，从而实现更多高价值和大宗商品的高效生产。
    </div>
  </Article>
}

export default Result