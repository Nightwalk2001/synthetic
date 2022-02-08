import Bg1 from "@/images/bg1.webp"
import Bg2 from "@/images/bg2.webp"
import Bg3 from "@/images/bg3.webp"
import {Article, Image} from "@/widgets"

const Background = () => {
  return <Article>
    <h2>一、本项目的总体介绍</h2>
    <div>
      在合成生物学全细胞催化领域中，多细胞体系相比于单菌体系，可实现代谢功能分工、复杂底物多组分利用及耐受复杂环境等，并可以实现长代谢途径的产物合成，在医药、食品、化工、环境及能源等领域发挥着不可替代的作用，已成为合成生物学发展的新方向[1]。而目前常用的多细胞培养，细胞生长与产物合成同时进行，存在中间代谢产物穿过不同细胞壁、膜的传质阻力，以及中间代谢产物和终产物的毒性抑制细胞生长等缺陷[2]。因此，本项目创新提出多细胞模块共催化方法，即细胞生长与产物合成分开，从而在保持共培养的优点的基础上，避免了代谢产物对细胞的毒害。我们结合了Spy环化技术，使外源质粒表达的蛋白具有耐热性[3]，并对下游模块菌进行热处理，从而提高细胞通透性，减小了传质阻力[4]。我们利用这种创新性的Spy模块菌共催化方法，人工合成了酪醇及其衍生物红景天苷和羟基酪醇。
    </div>

    <p>
      本研究充分利用模块工程的优点，将长的合成途径分割成多个途径，构建模块菌，从而组装成人工多细胞体系，实现共催化合成酪醇及其衍生物红景天苷和羟基酪醇。项目体现了合成生物学的模块化和合成微生物组的特点，展现了造物致知和造物之用的精髓。
    </p>

    <div>
      我们希望在未来能够进一步优化该体系，如探究最理想的培养基配方、最合适的各模块菌的浓度和比例等，从而实现更高的产量。同时，扩大合成产物的范围，以合成更多高价值和前景的产品。
    </div>

    <div className={"flex items-center"}>
      <Image src={Bg1}/>
      <Image src={Bg2}/>
    </div>

    <h2>二、人工多细胞体系的背景</h2>
    <p>
      早期，为实现大宗和高附加值化学品的高效生物合成，人们利用传统代谢工程手段提高单菌发酵性能[5]
      。然而在构建工程菌株过程中，外源基因受到的排他性和基因沉默途径的存在，以及发酵过程需要的严格培养条件等因素制约了生物制造产业的发展[6]。如果产品的合成途径较长，也会对单菌产生代谢负担。而人工合成网络规模和复杂程度的不断增加，使得利用单菌兼容这些功能成为难题。例如，利用葡萄糖从头合成紫杉醇需要35～51步。通过基因编辑获得的E.coli工程菌株最高只能合成1.02g/L
      紫杉二烯（紫杉醇的前体）[7]，无法满足工业生产的需求。多细胞体系的研究为这类复杂代谢路径物质的合成提供了新的借鉴和方法。通过理性设计与构建人工多细胞培养体系，将代谢路径分配组装到多个独立细胞，可减轻单菌的代谢负担。并且，通过设计与优化单个底盘细胞的代谢能力，可以实现各模块的最佳组合[1]。
    </p>
    <p>
      事实上，人类很早就开始利用微生物混菌体系进行生物发酵，如奶酪和酱油的生产就是由混合菌群发酵完成[8]，其中的天然微生物菌群通过在不同细胞间进行劳动分工，可完成复杂工作，且对复杂环境具有更强的适应性和稳定性。混菌体系具有的强大优势也正促使合成生物学的发展从基本模块和元件的单菌底盘设计逐步走向从头设计和构建人工混菌体系[9]。近年来，研究人员已在微生物混菌体系的应用潜力开发、菌群细胞的劳动分工设计、细胞间信息互作机制解析以及微生物群落系统统计模型开发等方面开展了大量的研究工作。
    </p>
    <p>
      通过解析天然混菌体系的互作机制，指导理性设计与构建系统鲁棒和稳定的人工混菌体系为合成生物学的网络化与多功能化研究开辟了新的研究方向。在基因表达方面，复杂混菌体系为单细胞创造了独特的生长微环境，可能会激活常规单菌培养条件下的“沉默”基因簇，合成新的化学物质，这为新药的研究开发提供了广阔资源[10]。在代谢路径方面，多细胞体系采用“劳动分工”的方法，减轻了单菌底盘的代谢负担，适于完成更复杂的工作[11]。通过菌群结构的调控可以实现代谢路径的模块化组装和优化。在系统鲁棒性方面，多细胞体系集合了不同性状、不同功能的细胞，细胞间的作用关系维持着动态平衡，对环境波动具有更强适应性和稳定性，可在复杂环境下完成复杂功能[12]。目前，人工多细胞体系已在医疗、食品、化工、能源、环境等多个领域广泛应用，并且取得了一定的进展。
    </p>
    <Image src={Bg3}/>
    <p>
      虽然多细胞体系在天然产物的合成方面已经取得一定的进展，但如何将其应用于工业化生产
      中仍是一个巨大的挑战。除了菌群结构调控和培养条件的权衡优化外，还有更多的实际问题需要考虑：①不同微生物组成的混合培养会引起一些次级代谢物的合成，给菌群结构的调控、产品的
      下游分离带来了更多挑战；②多细胞体系内，细胞之间的交流主要通过物质和信号分子的传递起作用，如何提高这类物质的传递和接收效率是提高多细胞体系运作效率的关键；③多细胞体系内细胞之间的交流是一个动态过程，很难实现长期稳定生产[14]。因此，从实验室规模的角度来判断多细胞体系的工业潜力还为时过早。更多的大规模试验，特别是长期培养过程有待考察。
    </p>

    <h2>三、产品介绍</h2>
    <p>
      酪醇（Tyrosol）又名对羟基苯乙醇，分子式为C8H10O2
      ，是红景天属植物中广泛存在的一种酪氨酸衍生物成分，是天然的抗氧化剂和抗炎剂。酪醇能够抑制低密度脂蛋白氧化，因此被认为可以预防冠心病和肿瘤的发生[15]。酪醇性质温和，几乎没有毒副作用，是一种功能强大的治疗性食品和饮食补充剂，在医药和食品领域也具有广阔的应用前景。传统的酪醇生产方法为化学合成法，存在产率低、选择性差、成本高、污染大等问题，因此酪醇的生物合成逐渐受到关注，目前已有使用模块菌生物合成酪醇的报道。Xu等通过整合一个经过大肠杆菌密码子优化的酿酒酵母苯丙酮酸脱羧酶基因（ARO10*），并增加拷贝数至5个，敲除竞争性代谢途径（feaB、pheA、tyrB），最终5
      L发酵罐中产量达到3.9 g/L[16]。Yang等将葡萄糖合成酪醇的途径分为三个模块，通过调节不同模块基因的表达使酪醇产量最终达到0.8 g/L[17]。
    </p>
    <p>
      红景天苷[(4-羟基-苯基)-β-D-吡喃葡萄糖苷］是酪醇的衍生物，红景天属(Rhodiola)植物中广泛存在的酚苷类化合物，可从植物根、茎提取，亦可通过生物合成途径、化学合成途径、生物催化合成途径等其他途径合成。红景天苷被证实具有抗衰老、抗疲劳、保护心脑血管系统、调节免疫系统、防辐射、抗疲劳、抗肿瘤等药理作用，红景天苷还对对心血管系统、中枢神经系统、肝肾、肺、皮肤等具有保护作用，红景天苷还能有抗骨质疏松和糖尿病的药理学功能[18]。由于红景天野生资源少，且红景天苷在红景天中含量极少、提取率低，因此，研究提高红景天苷产量的生物合成方法具有重要的意义和价值,
      目前的生物合成方法主要是利用红景天组织培养、细胞培养和其他生物进行红景天苷合成[19]，但目前还没有在微生物中直接合成红景天苷的报道。
      羟基酪醇(HT)是以酯类形式广泛存在于木犀科植物油橄榄的枝叶和果实中的多酚类化合物,是天然的抗氧化剂之一[20]。近年来,大量研究发现,HT在代谢综合征、心血管疾病、神经退行性疾病等方面均有较好的活性,能够有效抗癌、抗炎、抗抑郁等;此外,HT属于亲水亲油性物质,具有较高的生物利用度和细胞毒性小的特点,能够快速分布于各组织器官且易透过血脑屏障[21]。因此,研究人员将其视为新药开发的重点研究对象。但目前还鲜有通过微生物多细胞体系合成酪醇的报道。
    </p>
    <h2>参考文献</h2>
    <p className={"font-ff indent-0"}>
      [1]Zhang, H. and X. Wang, Modular co-culture engineering, a new approach for metabolic engineering. Metab Eng,
      2016. 37: p. 114-121. <br/>
      [2]Lin, B. and Y. Tao, Whole-cell biocatalysts by design. Microb Cell Fact, 2017. 16(1): p. 106. <br/>
      [3]Li, Y., S. Liu, and C. You, Permeabilized Escherichia coli Whole Cells Containing Co-Expressed Two Thermophilic
      Enzymes Facilitate the Synthesis of scyllo-Inositol from myo-Inositol. Biotechnol J, 2020. 15(2): p.
      e1900191. <br/>
      [4]Miyazaki, K., MEGAWHOP CLONING: A METHOD OF CREATING RANDOM MUTAGENESIS LIBRARIES VIA MEGAPRIMER PCR OF WHOLE
      PLASMIDS, in Synthetic Biology, Pt B: Computer Aided Design and DNA Assembly, C. Voigt, Editor. 2011. p.
      399-406. <br/>
      [5]George M. Hall, Howe J . The impact of synthetic biology in chemical engineering—Educational issues[J].
      Education for Chemical Engineers, 2012. <br/>
      [6] Bhatia S K , Bhatia R K , Choi Y K , et al. Biotechnological potential of microbial consortia and future
      perspectives[J]. Critical Reviews in Biotechnology, 2018:1-21. <br/>
      [7]P, K, Ajikumar, et al. Isoprenoid Pathway Optimization for Taxol Precursor Overproduction in Escherichia
      coli[J]. Science, 2010, 330(6000):70-74. <br/>
      [8] Hanemaaijer M , Rling W F M , Olivier B G , et al. Systems modeling approaches for microbial community
      studies: From metagenomics to inference of the community structure[J]. Frontiers in Microbiology, 2015,
      6(299):213. <br/>
      [9]Xin, Wang, Rui, et al. Engineering a Microbial Consortium Based Whole-Cell System for Efficient Production of
      Glutarate From L-Lysine.[J]. Frontiers in Microbiology, 2019.<br/>
      [10] Netzker T , Flak M , Krespach M K , et al. Microbial interactions trigger the production of antibiotics[J].
      Current Opinion in Microbiology, 2018, 45:117-123.<br/>
      [11] Zhou K , Qiao K , Edgar S , et al. Distributing a metabolic pathway among a microbial consortium enhances
      production of natural products[J]. Nature Biotechnology, 2015, 33(4):377-383.<br/>
      [12] Mccarty N S , Ledesma-Amaro R . Synthetic Biology Tools to Engineer Microbial Communities for
      Biotechnology[J]. Trends in Biotechnology, 2018.<br/>
      [13]钱秀娟, 陈琳, 章文明,等. 人工多细胞体系设计与构建研究进展[J]. 合成生物学, 2020, 1(3):18.<br/>
      [14] Roell G W , Zha J , Carr R R , et al. Engineering microbial consortia by division of labor[J]. Microbial Cell
      Factories, 2019, 18(1).<br/>
      [15]Elisa, Tripoli, Marco, et al. The phenolic compounds of olive oil: structure, biological activity.<br/>
      [16] Xu W , Yang C , Xia Y , et al. High-Level Production of Tyrosol with Non-Induced Recombinant Escherichia coli
      by Metabolic Engineering[J]. Journal of Agricultural and Food Chemistry, 2020, XXXX(XXX).<br/>
      [17]Haiquan, Yang, Yuxiang, et al. Modular Engineering of Tyrosol Production in Escherichia coli.[J]. Journal of
      agricultural and food chemistry, 2019.<br/>
      [18] Han X J , Guo N , Zhu M X , et al. Research progress in pharmacological activities and related mechanism of
      salidroside[J]. 中国生化药物杂志, 2015.<br/>
      [19] Zhang Z R , Liao Z H . Advances in studies on biosynthetic pathway and biotechnology of salidroside[J].
      Chinese Traditional and Herbal Drugs, 2010, 41(9):1571-1574.<br/>
      [20]刘威振, 张兴, 陈新建,等. 羟基酪醇药理作用研究进展[J]. 广东药学院学报, 2012, 28(6):5.<br/>
      [21]杨子琪, 龙建纲, 刘健康. 羟基酪醇的生物学活性及其代谢特征[J]. 中国药理学通报, 2016, 32(9):5.<br/>
    </p>
  </Article>
}

export default Background
