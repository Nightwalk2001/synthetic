import P1 from "@/images/proto1.webp"
import P2 from "@/images/proto2.webp"
import P3 from "@/images/proto3.webp"
import P4 from "@/images/proto4.webp"
import P5 from "@/images/proto5.webp"
import P6 from "@/images/proto6.webp"
import P7 from "@/images/proto7.webp"
import {Article, Image} from "@/widgets"

const Protocol = () => {
  return <Article>
    <h2>1 pZEA-SpyTag-ARO10-(GSG)2-yahk-SpyCatcher 质粒的构建</h2>
    <h3>1.1 实验原理</h3>
    <div>
      基于同源重组的方法，通过 DNA 无缝克隆技术，将插入片段定向克隆在目标载体的位点。将载体线性化后，在插入片段正/反向 PCR 引物 5’端引入线性化载体的末端序列，使 PCR 产物 5’和
      3’末端带有同线性化载体末端一致的序列，将插入片段 PCR 产物同线性化载体混合后，在重组酶催化下，即可进行转化，完成载体的构建（图 1）。
    </div>
    <Image src={P1}/>
    <h3>1.2 实验步骤 </h3>
    <h4>1.2.1 准备线性化载体 </h4>
    <div>
      将含有环化系统的 pZEA-SpyTag-SpyCatcher 质粒通过反向 PCR 扩增，获得不含有 KpnⅠ和SalⅠ两个酶切位点的线性化质粒（图 2）。
    </div>
    <Image src={P2}/>
    <h4> 1.2.2 插入片段扩增</h4>
    <div>设计好5’ 端分别含有线性化载体两末端同源序列的正反引物，利用高保真聚合酶对 ARO10-(GSG)2-yahk 进行 PCR。</div>
    <h4>1.2.3 重组反应</h4>
    <div>于冰上配置以下反应体系：</div>
    <Image src={P3}/>
    <div>轻轻吹打混匀，短暂离心后将反应液收集至管底，37℃反应 30min，立即置于冰上冷却。</div>

    <h4>1.2.4 重组产物转化</h4>
    <div>
      冰上解冻 DH5α感受态细胞，取 10 μl 重组产物加入到 100 μl 感受态细胞中，轻弹管壁混匀，冰上静置30 min。42℃水浴热激 45s，立即置于冰上冷却 3min，加入 900 μl LB 培养基，37℃下摇床培养
      1h。5000rpm 离心 5min，弃掉 900 μl 上清，用剩余培养基将菌体重悬，涂布于含有氨苄的平板上，37℃培养箱中倒置培养 16h。
    </div>

    <h4>1.2.5 重组产物鉴定 </h4>
    <div>
      挑选重组反应转化平板上若干个克隆以及阴性对照平板上的一个克隆进行菌落 PCR 鉴定，引物采用pZEA 质粒上的通用测序引物，同时接种于液体培养基中。鉴定为阳性的菌落，将剩余菌液接种至含有氨苄的液体 LB
      培养基中过夜培养，之后进行一代测序验证。
    </div>

    <h2>2 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒的构建</h2>
    <h3>2.1 实验原理 </h3>
    <div>
      基于同源重组的方法，通过 DNA 无缝克隆技术，将插入片段定向克隆在目标载体的位点。将 4-羟基丙酮酸通过 4-羟基苯乙醛到酪醇的合成途径(ARO10-yahK)替换成由酪氨酸到酪醇的合成途径(aas-yahK)。
    </div>
    <h3>2.2 实验步骤</h3>
    <h4>2.2.1 载体构建 </h4>
    <div>
      将构建的 pZEA-SpyTag-ARO10-(GSG)2-yahK-SpyCatcher 质粒和纯化的 ass基因片段溶液加入离心管中，加入高保真酶 2x Phanta Max Master Mix，进行 PCR
      扩增，得到重组质粒pZEA-SpyTag-aas-(GSG)2-yahk-SpyCatcher。
    </div>
    <h4>2.2.2 转化</h4>
    <div>用重组质粒转化 DH5α敏感态细菌，将转化后的菌株涂布于带有氨苄抗性的 LB 培养基中。根据电泳结果挑取对应单菌落培养</div>

    <h2>3 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒转化 E.coli BW25113</h2>
    <h3>3.1 实验原理 </h3>
    <div>通过氯化钙转化法向大肠杆菌 BW25113 菌株中转pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒，构建下游酪醇发酵菌株。</div>
    <h3>3.2 实验步骤 </h3>
    <h4>3.2.1</h4>
    <div>用试剂盒提取 pZEA-SpyTag-aas-(GSG)2-yahK-SpyCatcher 质粒</div>
    <h4>3.2.2 转化</h4>
    <div>将重组质粒转化进 BW25113 敏感态细菌，将转化后的菌株涂布于带有氨苄抗性的 LB培养基中培养。</div>
    <h4>3.2.3 扩培</h4>
    <div>平板培养24h后，挑取培养基上的单菌落培养。</div>
    <h2>4 空载质粒pZEA 电转入酪氨酸高产菌E. coli DOPA-30N-ΔREG-ΔhpaBC</h2>
    <h3>4.1 实验原理</h3>
    <div>
      由于下游菌株拥有氨苄抗性，因此将含有氨苄抗性基因的质粒 pZEA 电转入感受态 E. coli DOPA-30N-ΔREG-ΔhpaBC 中，在 Amp 平板上能够生长的可能为成功转入质粒的菌落。
    </div>
    <h3>4.2 实验步骤</h3>
    <h4>4.2.1 制备感受态细胞</h4>
    <div>
      复苏 E. coli DOPA-30N-ΔREG-ΔhpaBC，待 OD 为 0.6 左右时，用冷的纯水洗涤 2次，10 %甘油洗 1 次，最后重悬中 100 微升甘油中。
    </div>
    <h4>4.2.2 电转</h4>
    <div>向感受态细胞中加入 2.5 微升质粒，于冰上孵育 15 min，于 1.8 kV 电击。</div>
    <h4>4.2.3 复苏</h4>
    <div>电击后立即加入 800 微升 LB 培养基，摇床培养 1 h，取菌液涂布于含氨苄的平板</div>

    <h2>5 不同途径对酪氨酸转化酪醇的影响</h2>
    <h3>5.1 实验原理 </h3>
    <div>
      通过向大肠杆菌中引入三种不同的酪醇合成途径，分别为pZBK-QS-ARO10-yahk、pZEA-Spy-ARO10-yahk、pZEA-Spy-aas-yahk，比较哪一种途径合成效率最高。
    </div>
    <Image src={P4}/>
    <h3>5.2 实验步骤</h3>
    <h4>5.2.1 制备 BW25113 感受态细胞</h4>
    <div>
      向感受态细胞中电转 pZBK-QS-ARO10-yahk(Kan)、 pZEA-Spy-ARO10-yahk(Amp)、
      pZEA-Spy-aas-yahk(Amp)三个质粒，涂布相应抗性平板。
    </div>
    <h4>5.2.2 挑选阳性克隆</h4>
    <div>
      接种于LB种子液中，37 ℃摇床培养20 h，接种于ZYM培养基中使初始OD为0.1，37 ℃摇床培养20 h。4 ℃离心收集菌体，用冷生理盐水洗涤2次，重悬于含1 g/L 酪氨酸、10 mM Mg2+的1 M PBS
      中，使OD为30。37 ℃摇床培养48 h，分别于24 h和48 h测量菌体OD600值，并收集液相色谱样品。对样品进行高效液相色谱，测量酪醇含量。
    </div>

    <h2>6 feaB 敲除高产酪氨酸菌株的构建</h2>
    <h3>6.1实验原理</h3>
    <div>
      由于发现酪醇合成中出现大量的 4-羟基苯乙酸(4-HPAA)，认为 feaB 基因会引起碳 流量向副产物流动。因此，我们利用 CRISPR/Cas9 技术敲除高产酪氨酸菌株中的 feaB，具体通过向菌株中转入
      pCas9、pTargetF-feaB(含靶向 feaB 的 sgRNA)质粒以及 feaB 基因上下游 1000 bp 的同源片段。
    </div>
    <div>
      通过向菌株中转入 pCas9、pTargetF-feaB(含靶向 feaB 的 sgRNA)质粒以及 feaB 基因 上下游 1000 bp 的同源片段，在阿拉伯糖诱导下表达 Red 重组酶，实现 feaB 基因的敲除。目标菌株
      feaB 基因敲除后需要将 pCas9(Kan 抗性)、pTargetF(Spe 抗性)质粒消除。在 IPTG 诱导下 pCas9 质粒中靶向 pTargetF 的 sgRNA 表达，切割 pTargetF。在
      40℃下温敏型质粒 pCas9 会丢失。通过挑选阳性克隆筛选质粒消除的 feaBKO 酪氨酸高产菌株。
    </div>
    <Image src={P5}/>
    <h3>6.2 实验步骤 </h3>
    <h4>6.2.1 设计靶向 feaB 的sgRNA</h4>
    <div>
      利用 CRISPR RGEN(www.rgenome.net/cas-designer/)设计靶向 feaB 的sgRNA。合成含sgRNA 的引物对 pTargetF 质粒进行 PCR，得到 pTargetF-feaB。
    </div>
    <h4>6.2.2 设计引物</h4>
    <div>
      设计feaB上游500bp序列A的正向引物和反向引物，下游500bp序列B的正向引物和反向引物。其中A的反向引物包括B 序列 5’端 20 bp 序列，B 的正向引物包括 A 的 3’端 20 bp 序列。通过两轮的重叠延伸
      PCR，获得feaB 上下游的 1000 bp 同源片段。
    </div>
    <h4>6.2.3 制备电转感受态细胞</h4>
    <div>
      挑 pCas9 高产酪氨酸菌的单克隆于5mL LB 培养基中过夜培养，按 2%体积 取过夜培养物于种子液中。培养 2 h 后加入终浓度为 10mM 的 Arabinose 溶液，1 h 后收集菌体，制备电转感受态细胞。
    </div>
    <h4>6.2.4 电转</h4>
    <div>
      向该感受态细胞中分别加入 pTargetF-feaB 与 1000bp 同源片段，混匀后冰上预冷，以 1.8 kV 电压电击转化，30℃复苏 3 h（后 1.5h 再加一次 Arabinose 诱导），复苏后涂 Kan+Spe
      平板上，30℃过夜培养后。
    </div>
    <h4>6.2.5 菌落PCR</h4>
    <div>利用 A 序列的 F 引物和 B 序列的 R 引物，挑选阳性克隆进行菌落 PCR，确认产物片段大小以验证是否敲除成功。</div>
    <h4>6.2.6 消除pTargetF质粒</h4>
    <div>
      挑阳性feaB敲除单克隆于5 mL LB培养基中，并加入终浓度为0.5mM的IPTG， 30℃过夜培养。在 Kan 抗性平板上划线，30℃过夜培养。用灭菌牙签挑取单菌落先后点板至贴有标号的 Kan+Spe 板和 Kan
      板，验证质粒 pTargetF 是否消除。
    </div>
    <h4>6.2.7 消除pCas质粒</h4>
    <div>
      挑取pTargetF消除的单克隆于5mL LB 培养基中，40 ℃过夜培养，于无抗性平板上划线，37 ℃过夜培养。用灭菌牙签挑取单菌落先后点板至贴有标号的Kan板和无抗板，验证质粒pCas是否消除。
    </div>

    <h2>7 feaB 敲除对全细胞催化从头合成酪醇的影响</h2>
    <h3>7.1 实验原理</h3>
    <div>
      分别以转入酪醇合成途径(pZEA-Spy-aas-yahk)的酪氨酸高产菌 E. coli
      DOPA-30N-ΔREG-ΔhpaBC 和 feaBKO酪氨酸高产菌为底盘细胞，用葡萄糖为底物全细胞催化从头合成酪醇，比较 feaB 敲除对酪醇合成的影响。
    </div>
    <h3>7.2 实验步骤 </h3>
    <div>
      分别挑含pZEA-Spy-aas-yahk的酪氨酸高产菌和feaB KO酪氨酸高产菌单克隆于20 mL LB培养基中，于37 ℃、200 rpm摇床培养20 h；转接到含自诱导培养基 ZYM5052
      中，使起始OD600为0.1，于 30 ℃、200 rpm下培养8 h，于20 ℃、200 rpm下培养18 h；于 4 ℃、5000 g下离心10 min、并用冷生理盐水洗涤2 次，将菌体重悬在含 20 g/L葡萄糖、10
      mM MgSO4的1 M pH7.0磷酸缓冲液(10 mL/100 mL 三角瓶)，使 OD600为30于37 ℃、200 rpm摇床反应48 h；于24 h、48 h 取样，利用液相色谱测定酪醇含量。
    </div>

    <h2>8 热处理温度对全细胞共催化合成酪醇的影响 </h2>
    <h3>8.1 实验原理</h3>
    <div>
      以酪氨酸高产菌 E. coli DOPA-30N-ΔREG-ΔhpaBC 和含 Spy 环化酪醇合成途径的 feaBKO酪氨酸高产菌为上下游底盘细胞，用葡萄糖为底物全细胞共催化合成酪醇，其中下游菌株分别于
      45-65℃下进行热处理提高膜通透性，从而提高中间物酪氨酸在菌株间的流量，增加产量。
    </div>
    <h3>8.2实验步骤 </h3>
    <div>
      分别挑含 pZEA 空载的酪氨酸高产菌(上游菌)和含 pZEA-Spy-aas-yahk 的feaBKO 酪氨酸高产菌(下游菌)单克隆于 20 mL LB 培养基中，于 37 度、200 rpm 摇床培养 20
      h；转接到含自诱导培养基 ZYM5052 中，使起始 OD600为 0.1，于 30 度、200 rpm下培养 8 h，于 20 度、200 rpm 下培养 18 h；于 4 度、5000 g 下离心 10
      min、并用冷生理盐水洗涤 2 次，将上游菌重悬在含 20 g/L 葡萄糖、10 mM MgSO4 的 0.1 M pH7.0 磷酸缓冲液(10 mL/100 mL 三角瓶)，使 OD600为 17.5；下游菌重悬于 0.1 M
      PBS 至 OD600为 100，分别于 45、50、55、60、65℃下热处理 20 min，重悬于催化体系使 OD600为 17.5。于 37 度、200 rpm 摇床反应 24 h；于 24
      h后取样，利用液相色谱测定酪醇含量。
    </div>

    <h2>9 优化该多细胞体系</h2>
    <div>
      在该多细胞体系成功生产酪醇后，我们将探究最合适的上下游模块菌比例、催化体系中葡萄糖浓度以及总菌体浓度等因素。从而优该多细胞体系。
    </div>
    <h3>9.1 探究最佳上下游模块菌比例</h3>
    <div>
      挑单克隆于20 mL LB培养基中，于37度、200 rpm摇床培养20 h；转接到自诱导培养基ZYM5052中，使起始OD600为0.1，于30度、200 rpm下培养8 h，于20度、200 rpm下培养18
      h；上游菌低温离心收集菌体，并用冷0.85%NaCl洗涤2次；下游菌离心后重悬PBS溶液，于55度热处理20分钟后低温离心收集菌体。
    </div>
    <div>
      按不同比例（4:1、2:1、1:1、1:2、1:1）将上、下游菌重悬于10 mL 含20 g/L葡萄糖和10 mM 硫酸镁的0.1 M pH7.0磷酸缓冲液中，每个比例设置3个重复。置于37度、200 rpm摇床进行催化。24
      h后取样，利用液相色谱测定酪醇含量。根据HPLC的结果，选择酪醇产量最高组的上下游模块菌比例作为最佳比例。
    </div>
    <h3>9.2 探究催化体系中葡萄糖最适浓度</h3>
    <div>
      菌体培养和收集过程与上述相同。按之前实验确定的最佳上、下游比例，将上、下游菌重悬于10 mL 含不同浓度（20g/L-100g/L）葡萄糖和10 mM 硫酸镁的0.1 M
      pH7.0磷酸缓冲液中，每个葡萄糖浓度设置三个重复。于37度、200 rpm摇床进行催化。24 h后取样，利用液相色谱测定酪醇含量。根据HPLC的结果，选择酪醇产量最高组的葡萄糖浓度为最佳。
    </div>
    <h3>9.3 探究最佳菌体总浓度</h3>
    <div>
      菌体培养和收集过程与上述相同。按之前实验确定的最佳上、下游比例和葡萄糖浓度，将上、下游菌重悬于10 mL 含葡萄糖和10 mM 硫酸镁的0.1 M
      pH7.0磷酸缓冲液中，并使每组的菌体总OD600不同，每种总OD600设置3个平行重复；于37度、200 rpm摇床进行催化。24
      h后取样，利用液相色谱测定酪醇含量。根据HPLC的结果，选择酪醇产量最高组的总浓度，作为该体系的最佳菌体总浓度。
    </div>

    <h2>10 构建三菌体系生产酪醇衍生物</h2>
    <div>
      为体现合成生物学即插即用的优点，我们根据酪醇合成其衍生物的路径（图5），在产酪醇的双菌体系基础上，加入第三模块菌。第三模块菌因导入其中的质粒含有外源途径，能表达将酪醇转化为其衍生物的酶。故该三菌体系可以生产更具有经济价值的酪醇衍生物，如红景天苷和羟基酪醇。
    </div>
    <Image src={P6}/>
    <h3>10.1 构建质粒</h3>
    <h4>10.1.1 准备线性化载体</h4>
    <div>
      将含有环化系统的 pZEA-SpyTag-SpyCatcher 质粒通过反向 PCR 扩增，获得不含有 KpnⅠ和SalⅠ两个酶切位点的线性化质粒。
    </div>
    <h4>10.1.2 插入片段扩增</h4>
    <div>
      设计好5’ 端分别含有线性化载体两末端同源序列的正反引物，利用高保真聚合酶对 ARO10-(GSG)2-yahk 进行 PCR。
    </div>
    <h4>10.1.3 重组反应</h4>
    <div>
      于冰上配置以下反应体系：
      <Image src={P7} classes={"my-0"}/>
      轻轻吹打混匀，短暂离心后将反应液收集至管底，37℃反应 30min，立即置于冰上冷却。
    </div>
    <h3>10.2 重组产物转化</h3>
    <div>
      冰上解冻 DH5α感受态细胞，取 10 μl 重组产物加入到 100 μl 感受态细胞中，轻弹管壁混匀，冰上静置30 min。42℃水浴热激 45s，立即置于冰上冷却 3min，加入 900 μl LB 培养基，37℃下摇床培养
      1h。5000rpm 离心 5min，弃掉 900 μl 上清，用剩余培养基将菌体重悬，涂布于含有氨苄的平板上，37℃培养箱中倒置培养 16h。
    </div>
    <h4>10.2.5 重组产物鉴定 </h4>
    <div>
      挑选重组反应转化平板上若干个克隆以及阴性对照平板上的一个克隆进行菌落 PCR 鉴定，引物采用pZEA 质粒上的通用测序引物
    </div>
    <h3>10.4 三菌共催化体系的运作</h3>
    <div>
      按之前实验确定的最佳条件，将三种模块菌经培养、收集、重悬于催化反应体系中，于37度、200 rpm摇床进行催化。24 h后取样，利用液相色谱测定目标产物（红景天苷和羟基酪醇）含量。
    </div>
  </Article>
}

export default Protocol