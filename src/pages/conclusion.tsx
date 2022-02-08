import {Article} from "@/widgets"

const Conclusion = () => {
  return <Article>
    <h2> 1.对实验结果的分析</h2>
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

    <h2>2.项目的创新之处</h2>
    <div>
      我们利用人工多细胞体系模块共催化合成酪醇及其衍生物，相比与单细胞生产，将代谢途径拆分装载到不同的菌株中，减小了各个菌株的代谢压力，无论是对应细菌的存活还是生产都有积极意义，因此在生产实验中体现为产量高于单菌生产的产量。
    </div>
    <div>
      不同于简单的共培养，我们的模块化体系中的每一个菌株都进行过提高膜通透性的处理。对于插入的外源基因，我们事先再基因的两端连接了Spy-Tag与Spy-Cather元件，使该蛋白能够环化，从而提高蛋白的热稳定性。因此，对于利用外源基因进行生产的菌株，我们采用适当温度下的加热处理以提高其膜通透性。对于不是使用外源基因的菌株，即作为上游菌的E.coli
      Tyr14B1
      pZEA-空载这个菌株，我们尝试过采用反复冻融的方式提高其膜通透性。但通过实验发现，经过处理的菌株最终的酪醇产量还不如未进行处理的菌株。我们分析原因是该菌株生产的酪氨酸本身穿过膜的能力就比较强，而反复冻融在一定程度上还损伤了菌体本身，所以后期便没有再采用这种方法。
    </div>
    <div>
      当优化好生产酪醇的双菌共催化体系之后，我们便直接在体系中分别加入了生产红景天苷和羟基酪醇的菌株，未进行优化，便得到了所要的红景天苷和羟基酪醇产物。这样的表现体现了模块化“即插即用”的优点，即不需要专门的优化，在原有体系上直接加入新模块便可生产新产物。这是本实验的最大亮点之一。
    </div>
    <h2>3.反思与总结</h2>
    <div>
      尽管我们通过构建和优化多细胞体系，最终实现了酪醇的高效合成，但我们的实验仍存在一些不足。我们在优化酪醇生产途径的过程中，产物产量的提高不是稳步进行的，而是时常存在较大的跨越。我们分析，这是因为我们的菌种保藏效果不好，保藏的菌种中存在活力参差不齐的不同细菌。另外，相比于当前国际上的领先水平还有较大差距，一个是我们的探究还不够，没有采用定向进化等手段进行优化，还有是因为我们实验水平、意识等不够成熟，仍有较大的进步空间。
      总体而言，我们的实验拥有不少的创新之处，充分发扬了合成生物学领域的一些重要思想概念，同时相应的也存在一些不足，但这并没有对实验整体效果造成较大影响，并且这样的不足也会为我们全体实验参与者明确改进的方向，在未来的实验工作中进一步锻炼、增强自己的能力。
    </div>
  </Article>
}

export default Conclusion