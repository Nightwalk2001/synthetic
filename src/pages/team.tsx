import M1 from "@/images/member1.png"
import M10 from "@/images/member10.png"
import M11 from "@/images/member11.png"
import M12 from "@/images/member12.png"
import M13 from "@/images/member13.png"
import M14 from "@/images/member14.webp"
import M2 from "@/images/member2.png"
import M3 from "@/images/member3.png"
import M4 from "@/images/member4.png"
import M5 from "@/images/member5.png"
import M6 from "@/images/member6.png"
import M7 from "@/images/member7.png"
import M8 from "@/images/member8.png"
import M9 from "@/images/member9.png"
import {Article, Member} from "@/widgets"

const Team = () => {
  return <Article>
    <h2 className={"w-full pl-4 py-2.5 bg-gray-100 rounded-sm shadow-sm"}>#[ PI ]：</h2>
    <Member
      avatar={M1}
      name={"刘建忠"}
      description={"中山大学生命科学学院教授，中山大学合成生物学研究所所长，生物医药中心副主任。是国内较早研究合成生物学的学者之一，其团队早在2006年就尝试将外源的基因簇引入大肠杆菌，并生成了辅酶Q10、番茄红素、β-胡萝卜素、玉米黄素、虾青素等物质。目前研究方向是高价值天然产物，一类是具有强抗氧化、抗菌等活性的芳香化合物，另一类是类胡萝卜素。"}
      mail={"lssljz@mail.sysu.edu.cn"}
    />
    <h2 className={"w-full pl-4 py-2.5 bg-gray-100 rounded-sm shadow-sm"}>#[ 学生领队 ]：</h2>
    <div className={"grid grid-cols-2 space-y-10"}>
      <Member
        avatar={M2}
        name={"王佑琪 生命科学学院18级"}
        description={"在本次比赛中担任学生领队，负责实验设计和建模指导"}
        mail={"wangyq265@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M3}
        name={"孙华为 生命科学学院19级"}
        description={"担任学生领队，负责统筹队员分工和wiki文案的书写"}
        mail={"sunhuawei2001@163.com"}
      />
      <Member
        avatar={M4}
        name={"叶迪凯 生命科学学院20级"}
        description={"在本次比赛中担任学生领队，负责指导湿实验工作"}
        mail={"1989859079@qq.com"}
      />

    </div>
    <h2 className={"w-full pl-4 py-2.5 bg-gray-100 rounded-sm shadow-sm"}>#[ 学生队员 ]：</h2>
    <div className={"grid grid-cols-2 space-y-10"}>
      <Member
        avatar={M5}
        name={"宋京航 生命科学院19级"}
        description={"负责菌体的培养和实验数据的记录。希望我们所构建的模块共催化体系能在合成生物学领域发挥其价值。"}
        mail={"1609955761@qq.com"}
      />
      <Member
        avatar={M6}
        name={"田嘉源 生命科学学院21级"}
        description={"负责实验材料的准备，和实验数据的收集"}
        mail={"tianjy27@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M7}
        name={"黄曼青 生命科学学院21级"}
        description={"来自湖北。负责模块菌种的接种和实验报告的书写"}
        mail={"381207330@qq.com"}
      />
      <Member
        avatar={M8}
        name={"胡姝羽 生命科学学院21级"}
        description={"负责将模块菌重悬至催化体系中，以及样品的收集"}
        mail={"hushy8@mail2.edu.cn"}
      />
      <Member
        avatar={M9}
        name={"马子柔 传播与设计学院17级"}
        description={"UI/UX设计师 | 插画 | 平面设计"}
        mail={"mazr@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M10}
        name={"马芷彤 传播与设计学院20级"}
        description={"爱好平面设计，在本次比赛中负责美工设计"}
        mail={"1625619974@qq.com"}
      />
      <Member
        avatar={M11}
        name={"刘鼎瑞 水生生物学21级研究生"}
        description={"热爱水生生物学与合成生物学，负责制作项目展示"}
        mail={"liudr5@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M12}
        name={"付子豪 生命科学学院19级"}
        description={"热爱合成生物学与免疫学，负责实验数据的整理和做图。"}
        mail={"fuzh26@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M13}
        name={"梁程 生命科学学院19级"}
        description={"负责实验数据的整理和做图。希望在比赛中结交朋友，提升自己。"}
        mail={"liangch67@mail2.sysu.edu.cn"}
      />
      <Member
        avatar={M14}
        name={"王志威 生命科学学院19级"}
        description={"写代码和做设计"}
        mail={"zhiweiwang2001@gmail.com"}
      />
    </div>
  </Article>
}

export default Team
