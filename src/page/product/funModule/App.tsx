import * as React from 'react';
import { Tabs } from 'antd';
import './funModule.less';
const TabPane = Tabs.TabPane;
function callback(key: any) {
    console.log(key);
}
class FunModule extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            con1: {
                conList1: [
                    {tabName: '磁源力', title: '威尔斯利普四大功能之二仿古地磁长“磁源力”', details: <p className="TabDetails">人类的日常生活与健康长寿与我们人类所在的磁场息息相关，人体自身就存在着磁场，除此之外，人类磁场还受着太阳磁场以及地球磁场的双重影响，太阳磁场＋地球磁场＋人体磁场，三合一构建成为人类生命不可或缺的磁场。<br/><br/><img src={require('../../../assets/product/txt/cyl-1.png')}/><br/><br/>地球的两极源源不断地散发着磁场，人体内本不会缺少地球磁场，但随着世界城市化的进程加快，越来越多的土地被柏油路覆盖，一栋栋钢筋水泥土建筑，地球磁场被现代化的建筑所覆盖，被一段段的切割，人们已经不能够从“接地气”中得到充足的地球磁场，也就导致了人体疾病的产生，所以现代人们的养生与地球磁场息息相关，也就是我们所说的“磁源力”。<br/><br/>雷达站其中的超高磁源力就会对人体产生辐射危害，但磁力过小又不能够有效穿透人体，所以人体健康真正需要的是能够1:1模仿地球磁场的“低磁场强度，高穿透力”有效磁场。<br/><br/>威尔斯利普热疗亚磁生态养生床垫能够为人体补充有效磁源力，有效保持“地球磁场＋太阳磁场＋人体磁场”三角稳定结构，其中的磁场发生模块技术，产生了一个能够99.9%还原地球磁场的仿地球生物磁场，在人体处在床垫之上时，能够360°全面地接触人体全身，使人们在睡眠时周身形成了一个稳定的磁场结构，全面提高睡眠质量，养护身心健康。<br/><br/><img src={require('../../../assets/product/txt/cyl-2.png')}/><br/><br/>中国自古传下的理论讲究床的摆放要南北走向，为的就是是身体平行于地球磁场方向有助身体健康，但是只要有了威尔斯利普热疗亚磁生态养生床垫，您就不必再纠结床的摆放方向，何种方向您都可以享受到地球磁场为您身体带来的健康养护。<br/><br/><img src={require('../../../assets/product/txt/cyl-3.png')}/><br/><br/>所以说选择威尔斯利普热疗亚磁生态养生床垫，就是居住在楼房里的老百姓不可缺少的磁源力养生。</p>},
                    {tabName: '远红外', title: '威尔斯利普四大功能之四构建身体“生命之光”远红外睡眠系统', details: <p className="TabDetails">远红外线是一种肉眼看不到的光线，但是对于现代医学应用和民用健康保健产品技术的应用已经是很普及的一种科学技术，其针对于中老年人身体的各种疾病与体质增强有很好的效果；同时对于改善中老年群体常患多种慢性疾病也可以起到很多积极作用，被广泛地应用在医疗保健上，称之“远红外线疗法”。那么远红外技术对人身体有哪些实际的疾病应用呢？<br/><br/>1、远红外线可以改善血液循环<br/><br/>扩张微血管、促进血液循环，帮助改善动脉粥样硬化、促进血管内毒素排出体内，直接针对于中老年人常发的高血压和动脉栓塞，对心脑血管疾病有改善作用。<br/><br/><img src={require('../../../assets/product/txt/yhw-1.png')}/><br/><br/>2、远红外线可以改善关节疼痛<br/><br/>远红外线深透力可达肌肉关节深处，排除积存体内的疲劳物质和乳酸等老化废物对消除内肿，缓和酸痛之效果卓越。特别针对于中老年人经常出现的腰腿疼痛、肩背疼痛和颈椎问题，对于年轻时攒下的老毛病，远红外线一网打尽。<br/><br/>3、远红外线可以护肤美容<br/><br/>远红外线能将引起疲劳及老化的物质，不经肾脏直接从皮肤代谢。因此，能使肌肤光滑柔嫩，还能通过脂肪组织代谢帮助减肥。<br/><br/>4、远红外线可以改善循环系统<br/><br/>微循环直接关联肝病问题<br/><br/>5、增强新陈代谢<br/><br/>电解质代谢紊乱——危及生命；糖代谢紊乱——糖尿病；脂代谢紊乱——心血管疾病、肥胖症；蛋白质代谢紊乱——痛风。远红外的热效应，可以增加细胞的活力，调节神经体液机制，加强新陈代谢。<br/><br/><img src={require('../../../assets/product/txt/yhw-2.png')}/><br/><br/>6、提高免疫功能<br/><br/>经临床观察，远红外确能提高巨噬细胞的吞噬功能，调节人体细胞免疫和体液免疫功能，有利于人体的健康。<br/><br/>7、消炎作用<br/><br/>远红外的热效应，能够加快有毒物质的代谢产物的排出，加速渗出物的吸收，导致炎症水肿的消退。<br/><br/>8、镇痛作用<br/><br/>红外的热效应，降低了神经末梢的兴奋性；血液循环的改善，水肿的消退，减轻了神经末梢的的刺激，也就是疼痛。<br/><br/><img src={require('../../../assets/product/txt/yhw-3.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫进口碳纤维远红外模块，它不同于一般电热毯的金属导电导热，坚持只导热不导电的原则，绝对不会出现漏电等危险情况出现，绝对适合中老年朋友的选择。</p>},
                    {tabName: '负离子', title: '威尔斯利普四大功能之三负离子生态睡眠系统', details: <p className="TabDetails">“戴活”就是说一个人戴上一块自己非常喜欢的玉件，终年累月不离其身，这块玉石就会产生“灵气”，可以和主人同呼吸共命运，因为你已经把这块玉石给“戴活”了。在一些戴玉人的身上也确实出现过不少类似的独特现象。所谓人养玉、玉养人就是这个道理。<br/><br/><img src={require('../../../assets/product/txt/flz-1.png')}/><br/><br/>健康的生命源泉——负离子，负离子又叫“空气维生素”公园，郊区，湖泊，瀑布附近和森林中含量最多。现代人类的居住环境以及日常生活，基本都在高楼大厦里完成，能够吸收到负离子的场合少之又少，尤其是在夏季的空调房里，因空气中负离子经过一系列空调净化处理和漫长通风管道几乎全部消失，人们在其中长期停留会感到胸闷，头晕，乏力，工作效率低和健康状况下降，被称之为“空调综合症”。<br/><br/><img src={require('../../../assets/product/txt/flz-2.png')}/><br/><br/>玉石在与空气里面的水分子接触后，能够释放出净化空气的负离子，但是玉石在普通情况下能够释放的负离子是十分微弱的，威尔斯利普热疗亚磁生态养生床垫采用特殊专利技术加热玉石层，使之散发负离子的浓度是未加热时的数百倍。而且其中玉石层中所采用的天然玉石，经研发部全国范围的精心选材、测量、切割等27道工序，不计成本极限制取材，并按照人体背部经络穴位有序排列，有效针对人体保健，加之气站连浴室的胶水均采用无甲醛、环保材料，更让威尔斯利普热疗亚磁生态养生床垫在养生床垫界立于不败之地位。<br/><br/><img src={require('../../../assets/product/txt/flz-3.png')}/></p>},
                    {tabName: '超长波', title: '威尔斯利普四大功能之一超长波', details: <p className="TabDetails">威尔斯利普四大功能之一超长波超长波在临床医学界是通过进入人体深层，帮助身体能够帮助促进血液循环、舒展肌肉，对各种疼痛拥有有效的缓解作用；超长波能够调节身体机能，对肠胃炎，慢性头痛，失眠等慢性疾病有明显缓解和治疗作用。<br/><br/><img src={require('../../../assets/product/txt/ccb-1.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫的超长波发生器：玉石层＋进口碳纤维远红外模块。<br/><br/>天然玉石层中所发出的超长波可以与人体细胞产生共振，使人体细胞更具活力，从而达到促进血液循环，增强新陈代谢、及时排出体内废物的目的。天然玉石含有人体所必须的多种微量元素，人体可以通过皮肤对玉石释放的微量元素进行吸收，同时玉石也可以吸出人体沉积多年的微量元素。从而保持人体微量元素的平衡。玉石的储热能力较强，加热后作用于人体的经络，能够形成深层温灸效应。 <br/><br/><img src={require('../../../assets/product/txt/ccb-2.png')}/><br/><br/>碳纤维远红外线中超长波能产生5.6-14微米波长渗透到人体细胞中，改善人体的微循环，提高人体的免疫功能。还能有效地调整人体睡眼时的阴阳方位。并使超长波磁力线直接通透人体深处的脊髓神经，激活脑细胞，提高智商。威尔斯利普热疗亚磁生态养生床垫健康舒适，对于治疗和辅助治疗的范围是非常广泛的，尤其是对于一些慢性疑难病症，效果极佳，对未来人类生活保健将会产生重大影响！是最适合中年、老年人保健睡眠系统的产品之一。</p>},
                ],
                conList2: [
                    {tabName: '玉石层', title: '玉石是个宝，用得好胜过冬虫夏草', details: <p className="TabDetails">古人吮含玉石，借助唾液与其协同作用，可生津止渴，除胃中之热，平烦懑之所，滋心肺，润声喉，养毛发。慈禧太后每日用玉搓面，容颜不衰、玉屑面脂、润肤生肌。<br/><br/>玉镯戴左手能够起到降低血压、稳定心跳速度，减轻急躁、紧张，缓解压力、提神恢复记忆的功效。<br/><br/>中国几位高寿皇帝如武则天，乾隆、康熙、慈禧太后等终生以玉为枕。《唐本草》、《神农本草》、《本草纲目》等对玉枕都有独特的医疗健身功效有详尽的记载。<br/><br/><img src={require('../../../assets/product/txt/ysc-1.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫玉石层——玉疗养生<br/><br/>1、其分布排列按照人体背部穴位脉络图分布，躺在床垫上能够针对性的对人体背部穴位进行按摩<br/><br/>2、玉石层中的锌、镁、铁、铜、铬、锰、钴等通过加热能够进入到人体内部，补充人体所需微量元素。<br/><br/><img src={require('../../../assets/product/txt/ysc-2.png')}/><br/><br/>3、同时加热时散发出的远红外光线能够与人体细胞能够产生共鸣吸收，使得人体微血管扩张，促进酵素产生，帮助活化身体里的组织细胞，起到镇静安神的作用，特别针对的就是睡眠不好的中老年人群，对于患有高血压、糖尿病、中风、胃肠道疾病的老年人也有明显的缓解作用。<br/><br/><img src={require('../../../assets/product/txt/ysc-3.png')}/><br/><br/>威尔士斯利普玉石层的表层采用的是天然岫岩玉玉石原切片，根据尺寸的不同双人床共有280——304片岫岩玉原石玉片组成，其在床面的分布是根据身体经络和穴位而分布排列，物理按摩身体穴位，同时玉石含有矿物等人体所需微量元素，释放负离子，长期吸收，增强体质，发出的远红外光线与人体细胞发生共鸣吸收，活化细胞，促进微循环，增强新陈代谢，达到镇静安神，百脉调和，改善睡眠的作用。</p>},
                    {tabName: '裥棉层', title: '威尔斯利普热疗亚磁生态养生床垫——纯天然绿色裥棉层', details: <p className="TabDetails">该产品材质我们采取的亚麻是植物的皮层纤维，传统医学认为是最近似人的皮肤，亚麻以其特有的斜面孔，可以调节皮肤表层的温度环境，增强表面的透气性，保持干爽，保持皮肤水分，减少静电，安神静心的作用。配合环保加密棉的使用，回弹性更好，干爽的环境温度环境，改变了螨虫等细菌的生存环境，达到杀虫抑菌的作用<br/><br/><img src={require('../../../assets/product/txt/ccb-1.png')}/><br/><br/>该款床垫裥棉层中的亚麻不仅能够吸湿排汗，还能够除菌除螨。亚麻天然的纺锤形结构和独特的果胶质斜扁孔，产生了优良的透气性，吸湿性，清爽性，排湿性。这样的结构能更好的抑制细菌生长和繁殖，达到除菌除螨的效果，同时能够帮助人体调节温度，起到冬暖夏凉的作用。<br/><br/><img src={require('../../../assets/product/txt/ccb-1.png')}/><br/><br/>另外床垫还添加了独有的环保加密棉材料，拉力强、气孔均、密度高、回弹性强、经久耐用；绝对不含PDI化学物质，长期睡眠使用可以使身体皮肤逐渐变的清爽细嫩。<br/><br/><img src={require('../../../assets/product/txt/ccb-1.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫裥棉层，不仅能够抗甲醛抗细菌，更是一个排毒养颜的养生床垫。有了这款床垫，您绝不会因甲醛超标而发愁担忧。<br/><br/></p>},
                    {tabName: '进口碳纤维远红外模块', title: '进口碳纤维远红外模块层真正的高科技含量', details: <p className="TabDetails">进口碳纤维模块层所采用的原材料为进口的高新科技绿色环保产品，不但恰到好处的通透性，减压性，支撑性，服帖性还同时中老年人大部分有神经衰弱等症状，处于浅睡眠状态，会因声音或震动等影响睡眠，高密可塑力学支撑体就可以减少震动产的影响，增强睡眠质量<br/><br/>进口碳纤维远红外模块——导热不导电，从根本上杜绝燃火的发生！<br/><br/><img src={require('../../../assets/product/txt/txw-1.png')}/><br/><br/>南方的冬季、北方的春季都离不开电热毯，但是它的危险性却让很多人对它爱不起来！电热毯属于金属导电容易着火、自燃。中风病人，特别是高龄老人，由于他们的皮肤对冷热感觉比较迟钝，电热毯过热，容易对身体造成危害。但是碳纤维只导热、不导电，不导电就不会漏电，不漏电就不会自燃，绝对的安全性让深受消费者的信赖。<br/><br/><img src={require('../../../assets/product/txt/txw-2.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫进口碳纤维模块采用的是国外先进技术多年的研究成果——恒温发热，在发热的同时源源不断地散发着可以促进人体微循环畅通的远红外线，远红外线是一种对人体有益的光，是生命之光，能够做到确保深入到人体内部使其升温，达到体内深层排毒的效果，有效防止由于微循环不畅所导致的关节疼痛发炎、皮肤老化晦暗、血糖不稳、血压升高等状况发生。<br/><br/><img src={require('../../../assets/product/txt/txw-3.png')}/><br/><br/>该款床垫还实现了一张床垫上呈现两种温度的超人性化“双温双控”设计，满足了夫妻俩对睡眠温度的不同需求，真正实现智能养生。</p>},
                    {tabName: '高密可塑力学支撑体', title: '高密度力学支撑体', details: <p className="TabDetails">威尔斯利普高密力学支撑体属于高新科技绿色环保产品，拥有恰到好处的通透性，减压性，支撑性，服帖性。专门针对中老年人常见的神经衰弱等症状；如果经常处于浅睡眠状态，还会因声音或震动影响到睡眠，高密可塑力学支撑体就可以帮助减少震动产的影响，增强睡眠质量。<br/><br/><img src={require('../../../assets/product/txt/gmd-1.png')}/><br/><br/>人体正常脊椎生理结构从侧面看呈一个S形的生理弯曲，医生说的建议睡硬板床并不是说直接睡硬板上，而是在床板上要垫上能贴合人体脊椎的软垫。<br/><br/>高密度力学支撑体——回弹性佳、完全贴合人体脊柱曲线<br/><br/>回弹性通俗解释就是人体接触床垫表面能够完全贴合的越紧实，回弹力就越高，对人体脊柱健康越有好处。<br/><br/><img src={require('../../../assets/product/txt/gmd-1.png')}/><br/><br/>高密度力学支撑体——优势有哪些？<br/><br/>1、弹簧床垫受力不均，在现实生活中被证实容易变形长久睡眠对身体的睡眠姿势和健康有很大的影响；<br/><br/>2、乳胶床垫接触紫外线之后非常容易氧化，使用寿命降低。<br/><br/>3、普通家庭中老年喜欢睡硬板床，由于床板过硬对人体受力严重不均造成睡眠时脊柱成凹凸不规则形状，长期下去对身体健康影响较大；<br/><br/><img src={require('../../../assets/product/txt/gmd-1.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫高密力学支撑体，根据人体工程学原理设计，完全贴合人体生理弯曲度，使脊柱受力均匀。创新的工艺手法，恰到好处的通透性、减压性、支撑度、服帖性，能够为您带来均衡的睡眠温度和睡眠湿度，还能够减少因伴侣辗转反侧而产生的震动，延长您顶级的睡眠感受。</p>},
                    {tabName: '地球磁力发生模块', title: '仿地球磁力发生模块', details: <p className="TabDetails">巴马长寿村，地处桂西北山区的巴马瑶族自治县，自古以来就有生命超过百岁的老人存在。老大爷90还能下菜地，老奶奶100还耳聪目明下地做饭，反观我们生活的周边，为何百岁老人几乎没有？<br/><br/><img src={require('../../../assets/product/txt/cl-1.png')}/><br/><br/>众所周知，地球本身是一个巨大的磁场，人类生活，环境变化都离不开磁场的作用，威尔斯利普的地球磁力发生模块模拟人体所需要的磁场空间，利用磁的低频高穿透，切割性，平衡性，改善体内细胞活性，加快新陈代谢，加速血液循环，切割血管内壁的堵塞物质等有害物，通过循环系统排出体外。<br/><br/><img src={require('../../../assets/product/txt/cl-2.png')}/><br/><br/>威尔斯利普亚磁热疗床垫其中最关键的问题是弥补地球磁力的缺失的情况下，在睡眠空间构建一个人体需要的磁力生态系统，让人在睡眠中无时无刻补充来自磁场空间的磁。磁场与人体健康息息相关。但是由于人类对于自然环境的过度开发，高楼林立、信号错综，将地球磁场人为地进行割断，人类无法正常吸收地球磁场，威尔斯利普热疗亚磁生态养生床垫“地球磁力发生模块”正弥补此空缺。<br/><br/><img src={require('../../../assets/product/txt/cl-3.png')}/><br/><br/>威尔斯利普热疗亚磁生态养生床垫——地球磁力发生模块<br/><br/>该模块能够模拟人体所需的磁场空间，通过磁场发生模块技术，产生一个强度适中的仿地球生物磁场，能够抑制人体自由基的产生，并且起到给身体补磁、给细胞充电、促进细胞新陈代谢的作用。<br/><br/><img src={require('../../../assets/product/txt/cl-4.png')}/><br/><br/>同时能够防止衰老、美容养颜、改善血脂代谢、降低胆固醇、调整血压、改善体内微循环、改善再生障碍性贫血，全方位呵护人体健康，帮助人类向百岁迈进。</p>}
                ]
            },
            con2: {
                conList1: [
                    {tabName: '产品功效', title: '产品功效', details: <p className="TabDetails">1、疲劳恢复<br/><br/>受益人群：睡眠不好、疲劳过度、头回脑胀、腰膝酸软等不适症状群体<br/><br/>产品特性：针对颈部、肩部、背部等重点按摩，多种模式相互交替按摩<br/><br/>2、酸痛改善<br/><br/>受益人群：关节酸痛、背部肌肉紧张、颈部和肩部酸痛不适等症状<br/><br/>产品特性：针对关节酸痛、背部、腰部等部位用捶打、揉捏、3D气压等模式进行按摩缓解疼痛<br/><br/>3、脊柱推拿（spa）<br/><br/>受益人群：背部肌肉僵硬、背部酸痛、颈部酸痛等症状群体<br/><br/>产品特性：针对肌肉、脊柱、谷歌等部位采取双排三指拿捏、重力（力度可调整）捶打、双排挤压、侧击等模式进行按摩缓解<br/><br/>4、舒经活络、穴位按摩<br/><br/>受益人群：头部、腹部或四肢发凉、皮肤干燥、四肢麻木、气血不通等症状群体<br/><br/>产品特性：针对12大经脉络、背部、颈肩、四肢穴位采取，3D双挤压、气囊重复鼓挤、揉捏等多种模式舒经活血及穴位按摩</p>}
                ],
                conList2: [
                    {tabName: '产品特点', title: '产品特点', details: <p className="TabDetails">1、气囊多方位包裹挤压按摩<br/><br/><img src={require('../../../assets/product/txt/amy-1.png')}/><br/><br/>2、3D机械手<br/><br/><img src={require('../../../assets/product/txt/amy-2.png')}/><br/><br/><img src={require('../../../assets/product/txt/amy-3.png')}/><br/><br/>3、腰部大面积热敷<br/><br/><img src={require('../../../assets/product/txt/amy-4.png')}/><br/><br/>4、颈部正反转按摩<br/><br/><img src={require('../../../assets/product/txt/amy-5.png')}/><br/><br/></p>}
                ]
            }
        };
    }
    render() {
        const Id = this.props.id; // 功能特点切换ID
        const tabId = this.props.tabId; // 产品切换ID
        let con = (tabId === 0 ? this.state.con1 : this.state.con2) ;
        let conList = (Id === 0 ? con.conList1 : con.conList2) ;
        let TabPaneList = conList.map((el: any, index: number) => {
            return <TabPane tab={conList[index].tabName} key={index}><h2 className="TabTitle">{conList[index].title}</h2>{conList[index].details}</TabPane>;
        });
        return (
            <Tabs defaultActiveKey="0" onChange={callback}>
            {TabPaneList}
            </Tabs>
        );
    }
}
export default FunModule;