import D1 from "@/images/design1.webp"
import D2 from "@/images/design2.webp"
import D3 from "@/images/design3.webp"
import D4 from "@/images/design4.webp"
import {Article, Image} from "@/widgets"

const Design = () => {
  return <Article>
    <p>
      多细胞体系可实现代谢功能分工、复杂底物多组分利用及耐受复杂环境，且相比于单菌可以实现长代谢途径的产物合成，已成为合成生物学发展的新方向[1]。目前常用的人工多细胞体系常采用顺序接种或混合培养，细胞生长与产物合成同时进行，存在生长条件不匹配、碳源竞争性利用、中间代谢产物和终产物抑制细胞生长等问题，且中间代谢产物穿过不同细胞壁、膜时存在传质阻力。因此，本项目创新提出模块共催化方法，即将细胞的生长和产物合成分为两个阶段，利用外源途径合成目标产物，有效的避免了产物合成对细胞生长的代谢负担[2]。结合Spy环化技术，使外源质粒表达的蛋白具有耐热性[3]，并对下游模块菌进行热处理，从而提高细胞通透性，减小了传质阻力[4]。我们利用这种创新性的Spy模块菌共催化方法，人工合成了酪醇及其衍生物红景天苷和羟基酪醇。
    </p>
    <Image src={D1}/>
    <Image src={D2}/>
    <h3>1. 模块化分割合成通路</h3>
    <div>
      酪醇的合成途径如下图所示，我们将合成途径分为葡萄糖-酪氨酸/酪氨酸-酪醇两个模块，以小分子的酪氨酸为中间代谢物，便于细胞间转运。即上游模块菌负责摄入前体物质葡萄糖，合成节点分子酪氨酸，下游模块菌负责摄入酪氨酸，合成终产物酪醇。
    </div>
    <Image src={D3}/>
    <h3>2. 合成质粒，构建外源途径</h3>
    <div>
      为使模块菌发挥其功能，需要将合成的外源质粒导入到大肠杆菌中，从而使其表达相应酶蛋白。质粒合成采用DNA无缝克隆技术，将含有目标酶基因的克隆片段插入到载体质粒中形成重组质粒。大引物PCR（megaprimer PCR of
      whole plasmid,
      MEGAWHOP）能够使克隆DNA片段直接插入到质粒中形成重组质粒而避免常规重组质粒构建中面临的污染等问题。首先，需要插入质粒的基因以互补DNA片段的形式被克隆出来，同时两端有与模板质粒同源的互补片段。克隆的DNA片段作为大引物（megaprimers），在全质粒PCR反应中替代模板质粒中的同源区间掺入质粒中构建重组质粒。在一轮PCR反应合成带有缺口的环状质粒后，用DpnⅠ酶处理混合物以分解被甲基化修饰的模板链，处理过的混合物能直接被用以转化感受态细菌[5]。我们使用此方法得到了质粒pZEA-Spy-aas-yahk、pZEA-spy-AtUGT85A1、pZEA-spy-hpaB-C
      。
    </div>
    <Image src={D4}/>
    <h3>3.转化</h3>
    <div>
      转化包括制备感受态细胞和外源DNA转化感受态细胞两步。本实验使用氯化钙法制备感受态细胞：将大肠杆菌置于低温（0℃）、低渗（0.1mol/L
      CaCl2）溶液处理后，该菌细胞质膜和细胞壁通透性会增加，菌体也会膨胀。此时加入转化混合物，其中的外源DNA会形成抗DNase的羟基-钙磷酸复合物黏附于细胞表面，经过短暂的热休克（42℃）处理后，外源DNA很容易进入感受态细胞。
    </div>
    <div>
      本实验选用已经用低温低渗氯化钙处理的感受态工程菌，待其解冻后将重组质粒直接加入感受态菌液中混匀，冰上静置30min，随后在42℃下热激90s，立即取出冰浴4min即可。
    </div>
    <h3>4. 热处理提高细胞膜通透性</h3>
    <div>
      为减少全细胞催化中细胞膜对底物和产物的阻碍作用，可以用热处理的方式提高细胞膜的透性。在实验中拟设定60-80℃，间隔5℃的温度区间来探索最适热处理温度[6]。考察不同温度热处理细胞催化酪氨酸合成酪醇的能力。
    </div>
    <h3>5. 多细胞体系模块共催化</h3>
    <div>
      首先将不同模块菌分别接种于 37℃ 200rpm 在 10ml 液体 LB 培养基过夜培养 8h。培养液随后以 2%的接种量接种到 250ml 新鲜自诱导培养基 ZYM-5052 培养基并在 37℃、200rpm 的条件下培养
      16-20 h。低温离心收集菌体，用 50 mM 磷酸缓冲液( pH7.0，含葡萄糖、10 mM MgCl2) 重悬；对含 Spy 环化质粒的酪醇产生菌 E. coli Tyrosol-1 来说，事先用上一步确定的最佳温度处理
      20 min，然后再离心收集菌体、重悬。在 37℃ 、200 rpm 下共催化 24h，测定酪醇产量。
    </div>
    <div>
      在这个过程中，我们会探究各模块菌的最适浓度及比例、催化体系中葡萄糖含量等因素，从而优化该多细胞体系。
    </div>
    <h3>6. 产品检测</h3>
    <div>
      产品通过高效液相色谱法（HPLC）检测。HPLC是一类在经典液相色谱和气相色谱基础上发展的新型分离分析技术，通过高压泵输送溶剂经过色谱柱来实现混合样品的分离与检测。共催化培养液再一定反应时间后加入氰化甲烷终止反应，取1ml样品检测酪醇及其衍生物含量（HPLC）[7]。使用固定相为十八烷基-二氧化硅色谱柱、流动相包括buffer
      A（0.1%（v/v）三氟醋酸）和buffer B（100% 甲醇）的HPLC系统。HPLC的流程和相关设定如下：使buffer
      B的浓度在5分钟内由20%均匀增加到80%后，使其维持在80%的浓度5分钟；过柱时温度恒定在30℃，流动相流速控制在0.4ml/min，检测波长设为276nm。标品酪醇、酪氨酸和红景天苷在过柱时的滞留时间分别为18.9分钟、12.0分钟、11.5分钟，分析波峰出现的时间和面积确定产物的类型和浓度，进而实现对产品的检测。
    </div>
    <h3>参考文献</h3>
    <p className={"font-ff indent-0"}>
      [1]Zhang, H. and X. Wang, Modular co-culture engineering, a new approach for metabolic engineering. Metab Eng,
      2016. 37: p. 114-121.
      [2]Lin, B. and Y. Tao, Whole-cell biocatalysts by design. Microb Cell Fact, 2017. 16(1): p. 106.
      [3]Li, Y., S. Liu, and C. You, Permeabilized Escherichia coli Whole Cells Containing Co-Expressed Two Thermophilic
      Enzymes Facilitate the Synthesis of scyllo-Inositol from myo-Inositol. Biotechnol J, 2020. 15(2): p. e1900191.
      [5]Miyazaki, K., MEGAWHOP CLONING: A METHOD OF CREATING RANDOM MUTAGENESIS LIBRARIES VIA MEGAPRIMER PCR OF WHOLE
      PLASMIDS, in Synthetic Biology, Pt B: Computer Aided Design and DNA Assembly, C. Voigt, Editor. 2011. p. 399-406.
      [6]Li, Y., S. Liu, and C. You, Permeabilized Escherichia coli Whole Cells Containing Co-Expressed Two Thermophilic
      Enzymes Facilitate the Synthesis of scyllo-Inositol from myo-Inositol. Biotechnology Journal, 2020. 15(2).
      [7]YANG H, XUE Y, YANG C, et al. Modular Engineering of Tyrosol Production in Escherichia coli [J]. Journal of
      Agricultural and Food Chemistry, 2019, 67(14): 3900-8.

    </p>
  </Article>
}

export default Design