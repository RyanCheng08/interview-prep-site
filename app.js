const qaItems = [
  {
    q: "你之前是幼儿园老师，为什么想做国际学校餐厅服务岗位？",
    tags: ["career", "shortcoming"],
    angle: "不要说幼教太累。强调喜欢学校环境，但希望把重心从教学转到服务运营，过往能力可以迁移。",
    answer:
      "我之前主要在幼儿园和早教工作，但这几年我发现自己除了教学以外，更擅长家长沟通、现场协调、活动执行和日常服务类工作。我比较喜欢学校环境，也熟悉学生和家长的沟通方式。这个岗位虽然是餐厅服务运营方向，但同样需要责任心、服务意识、现场执行和秩序维护，这些和我过往经历是有连接的。我也清楚自己需要补餐饮服务和食品安全方面的知识，所以愿意从基础服务、餐前准备、物资盘点和现场配合做起。"
  },
  {
    q: "你没有餐饮服务经验，如何快速上手？",
    tags: ["shortcoming", "service"],
    angle: "先承认短板，再给学习路径：流程、卫生规范、台账盘点。",
    answer:
      "我没有直接餐饮服务经验，这是我的短板。但我过去长期在学校场景做一线服务，习惯按照流程做事，也比较重视安全和卫生。入职后我会先熟悉三个部分：第一是餐厅服务流程，包括餐前准备、分餐、送餐、餐后整理；第二是食品安全和卫生规范，比如餐具摆放、手部卫生、环境清洁；第三是台账、物资盘点和日常对接要求。我会多观察老员工怎么做，先把基础动作做准确，再逐步提高效率。"
  },
  {
    q: "你能接受高峰期一线服务吗？",
    tags: ["service", "career"],
    angle: "直接肯定，不能犹豫。说明高峰期需要支援现场。",
    answer:
      "可以接受。我理解这个岗位不是纯行政岗位，用餐高峰需要到现场支援，包括引导、分餐、送餐、维护秩序和环境整理。我过去在幼儿园也经常面对学生集中活动、上下学接待、家长沟通等高峰场景，所以对节奏快、事情多的现场工作有心理准备。我会服从现场安排，先保证服务流程顺畅。"
  },
  {
    q: "如果学生或家长对餐品/服务不满意，你怎么处理？",
    tags: ["service"],
    angle: "先安抚，再核实，再反馈，再跟进。涉及质量或食品安全不要擅自判断。",
    answer:
      "我会先保持礼貌和耐心，听清楚对方不满意的具体点，比如餐品温度、口味、分量、服务速度还是卫生问题。现场能解决的，比如补充餐具、协助更换、引导排队，我会马上处理；涉及餐品质量或食品安全的，我不会擅自判断，会第一时间反馈给上级或相关负责人，并做好记录。处理过程中我会避免争辩，重点是让对方感受到我们在重视问题。"
  },
  {
    q: "你如何理解食品安全和卫生规范？",
    tags: ["shortcoming", "service"],
    angle: "不要装专家。强调底线意识、按培训和标准执行。",
    answer:
      "我理解食品安全和卫生规范是学校餐厅的底线，不只是把环境打扫干净，还包括餐具清洁、食物存放、人员操作、台面地面卫生、垃圾处理、学生取餐秩序等细节。虽然我不是餐饮专业出身，但我过去在幼儿园工作，对学生安全和卫生要求比较敏感。入职后我会严格按照公司培训和监管要求执行，不凭经验随意处理。"
  },
  {
    q: "你做过排班、台账、物资盘点相关工作吗？",
    tags: ["shortcoming", "service"],
    angle: "不要硬说做过餐厅排班。区分做过类似事务。",
    answer:
      "我没有做过餐厅排班，但做过类似的班级事务协助和物资管理。比如班级物品、活动物料的登记、领用、整理、盘点和补充，原来工作中也会做资料记录和流程跟进。排班方面我可以配合上级完成基础记录和人员安排确认。我比较细心，能接受重复性台账工作，也知道这类工作最重要的是准确、及时、可追溯。"
  },
  {
    q: "你如何证明自己有管理或协调能力？",
    tags: ["shortcoming", "service"],
    angle: "强调协助管理，不要把自己包装成成熟餐厅管理者。",
    answer:
      "我的管理能力主要体现在现场协调和基础事务跟进上。比如幼儿园活动中，需要提前准备物料、安排现场流程、配合同事分工、维护学生秩序，还要处理家长临时问题。日常班级管理也需要把学生安全、家长沟通、物资管理和环境维护同时做好。我不把自己定位成成熟管理者，但我有比较好的现场协调、执行跟进和责任意识，适合做运营助理或领班助理类型的工作。"
  },
  {
    q: "你能否接受基础服务员工作，而不是教师岗位？",
    tags: ["career", "service"],
    angle: "必须明确接受。说明已经了解岗位内容。",
    answer:
      "可以接受。我投递这个岗位前已经了解过岗位内容，包括餐前准备、摆放桌椅餐具、现场接待、分餐送餐、卫生维护等。我不会把自己放在教师岗位的思维里，而是愿意从服务岗位的基础标准开始学习。我认为基础服务做扎实，后面才有机会承担更多运营协助和现场协调工作。"
  },
  {
    q: "你的英语口语水平如何？如果遇到外籍家长或老师怎么办？",
    tags: ["english", "shortcoming"],
    angle: "不要夸大。准备常用服务英语，复杂问题及时请上级协助。",
    answer:
      "我的英语不是流利商务沟通水平，目前更适合基础服务场景。我可以提前准备餐厅常用英语，比如引导排队、说明餐具位置、询问需求、表达稍等、请上级协助等。如果遇到复杂问题，我会先用简单英语确认需求，例如 “Please wait a moment, I will ask my supervisor for help.” 然后及时找同事或上级协助，避免误解。我也愿意持续练习口语，适应国际学校环境。"
  },
  {
    q: "遇到同事配合不好，你怎么处理？",
    tags: ["service"],
    angle: "不抱怨，先补位，再沟通，必要时客观反馈。",
    answer:
      "现场工作最重要的是先保障服务不中断。如果用餐高峰同事暂时配合不到位，我会先把眼前紧急工作补上，比如引导、分餐、整理餐具。忙完后再私下沟通具体问题，看是分工不清、节奏不同，还是对流程不熟。如果涉及影响服务质量，我会客观向上级反馈，不在现场争执。"
  },
  {
    q: "用餐高峰突然人手不足，你会怎么做？",
    tags: ["service"],
    angle: "体现优先级意识：秩序、分发、餐具、通道、安全、卫生。",
    answer:
      "我会先听从现场负责人安排。如果需要我判断，我会优先保障几个关键环节：学生取餐秩序、餐品分发、餐具补充、通道安全和现场卫生。能合并的工作先合并，非紧急事项比如部分整理工作可以延后。遇到无法处理的情况，会及时向上级反馈，请求调配人员，而不是自己硬撑导致现场混乱。"
  },
  {
    q: "你如何保证餐前准备不出错？",
    tags: ["service"],
    angle: "清单化、复核、提前量。",
    answer:
      "我会用清单思维来做餐前准备。比如桌椅是否摆放到位、餐具数量是否足够、纸巾和消耗品是否补齐、地面和台面是否干净、动线是否通畅。准备完成后自己先检查一遍，再根据岗位要求和同事做交叉确认。餐前准备最怕临时发现缺东西，所以我会尽量提前完成，不把问题留到高峰期。"
  },
  {
    q: "你过去处理过哪些突发问题？",
    tags: ["service"],
    angle: "用幼教场景，但转化为服务现场能力。",
    answer:
      "过去在幼儿园会遇到学生情绪失控、家长临时投诉、活动现场流程变化、物资临时不足等情况。我的处理方式一般是先稳定现场，比如安抚学生或家长情绪，再判断问题严重程度，能当场解决的马上解决，不能解决的及时反馈园区负责人，并跟进结果。这个经验让我比较习惯在现场保持冷静，不把问题扩大。"
  },
  {
    q: "你为什么适合国际学校环境？",
    tags: ["career", "english"],
    angle: "学校场景经验 + 服务意识 + 规范意识。",
    answer:
      "我过去一直在幼儿园和早教环境工作，熟悉学生、家长和学校内部协作方式。国际学校对服务细节、环境卫生、沟通礼仪和规范执行要求更高，这一点和我过往工作中重视安全、秩序、家长体验是匹配的。我也愿意提升基础英语服务表达，更好地适应外籍老师和家长的沟通场景。"
  },
  {
    q: "你未来的职业规划是什么？",
    tags: ["career"],
    angle: "不要说想马上转管理。表达稳定发展。",
    answer:
      "短期我希望先把餐厅服务流程、食品安全规范、物资盘点和现场接待做好，尽快成为能独立上手的一线服务人员。中期希望在熟悉业务后，承担更多运营协助工作，比如台账、排班协助、现场协调和新人带教。长期我希望在学校服务运营方向稳定发展，成为对现场、流程和服务质量都比较熟悉的人。"
  },
  {
    q: "如果上级临时安排你做清洁、搬物资，你能接受吗？",
    tags: ["career", "service"],
    angle: "回答要短且明确，体现不挑活。",
    answer:
      "可以接受。餐厅服务岗位本身就包括环境维护、物品整理和现场支持。我不会只挑沟通类或行政类工作做，只要是岗位需要、符合工作安排，我都会配合完成。"
  },
  {
    q: "如果学生不排队、现场比较吵，你怎么处理？",
    tags: ["service"],
    angle: "温和但明确，必要时请老师或负责人协助。",
    answer:
      "我会先用温和但明确的方式引导，比如提醒学生排队、保持通道畅通、注意安全。如果个别学生不配合，我会避免大声指责，而是靠近提醒，并根据学校规则请老师或负责人协助。重点是维持秩序和安全，不让现场变得更混乱。"
  },
  {
    q: "你认为餐厅服务最重要的是什么？",
    tags: ["service"],
    angle: "安全、效率和体验三点回答。",
    answer:
      "我认为最重要的是安全、效率和体验。安全包括食品安全、环境卫生和学生用餐安全；效率是高峰期出餐、分餐、餐具补充要顺畅；体验是学生、老师和家长能感受到服务及时、态度友好、环境整洁。"
  }
];

const intros = [
  {
    title: "30 秒版本",
    meta: "适合第一轮快速开场",
    text:
      "您好，我叫陈小怡，本科学历，之前主要在早教中心和幼儿园工作，长期负责学生日常服务、家长沟通、活动执行、物资管理和现场秩序维护。我比较熟悉学校环境，服务意识和责任心较强，也能接受一线服务工作。虽然我没有直接餐饮经验，但我愿意从餐前准备、分餐送餐、卫生维护、物资盘点和现场接待做起，按照学校和公司的标准认真学习执行。"
  },
  {
    title: "1 分钟版本",
    meta: "适合常规面试开场",
    text:
      "您好，我叫陈小怡，本科学历，之前有多年早教和幼儿园工作经历，做过亲子指导师和幼儿园专任教师。我的过往工作除了教学，也包含大量一线服务和运营协助内容，比如家长接待、学生秩序维护、活动现场执行、物资盘点、环境整理以及突发问题处理。\n\n我这次应聘国际学校餐厅服务/运营助理岗位，是因为我比较熟悉学校环境，也喜欢服务类和现场协调类工作。这个岗位需要细心、责任心、服务意识、卫生安全意识和团队配合，我觉得这些和我的过往经验是匹配的。当然，我也清楚自己没有直接餐饮背景，所以我愿意从基础工作开始，认真学习餐厅服务流程、食品安全要求和现场标准，踏实稳定地做好这个岗位。"
  },
  {
    title: "2 分钟版本",
    meta: "适合要求详细介绍时使用",
    text:
      "您好，我叫陈小怡，本科学历，之前主要在早教中心和幼儿园工作，曾担任亲子指导师和幼儿园专任教师。我的工作对象长期是学生和家长，所以在一线服务、沟通接待、情绪安抚、现场秩序维护方面积累了比较多经验。\n\n过去工作中，我不仅负责教学，也经常参与班级日常运营和园区活动执行。例如活动前的物料准备、现场布置、人员配合、活动流程推进，以及活动后的整理复盘。日常也会负责班级物资管理、资料记录、家长沟通和突发问题处理。原来的工作环境对安全、卫生、责任心要求比较高，所以我也比较习惯按照流程和规范做事。\n\n这次想转到国际学校餐厅服务/运营助理方向，是因为我希望继续在学校环境中发展，但工作重心从教学转向服务运营。我了解这个岗位需要做餐前准备、餐具整理、分餐送餐、现场接待、卫生维护、物资盘点和行政协助，也需要在高峰期支援一线服务。我能接受这些基础工作，也愿意从标准流程开始学习。我的优势是亲和力、责任心、执行力、学校场景经验和家长沟通能力。我的不足是没有直接餐饮经验和英语口语还需要提升，但我会提前学习食品安全规范和常用服务英语，尽快适应岗位要求。"
  }
];

const transitions = [
  {
    title: "为什么从幼教转到服务运营类岗位？",
    text:
      "我不是完全脱离过去经验，而是把过去在学校场景中积累的服务、沟通、现场协调和物资管理能力，转到更偏运营服务的岗位上。幼教工作让我形成了较强的责任心、耐心和安全意识，也让我习惯面对学生、家长和突发情况。现在我希望把工作重心从教学转向服务运营，所以选择学校餐厅这个方向。"
  },
  {
    title: "为什么不是继续做老师？",
    text:
      "我很认可之前幼教经历带给我的成长，但我也发现自己更适合沟通接待、现场执行、活动组织、物资管理和服务协调这类工作。相比继续做教学岗位，我更希望进入学校服务运营体系，从一线服务和基础运营做起，形成更稳定、清晰的职业发展方向。"
  },
  {
    title: "为什么选择国际学校？",
    text:
      "我过去一直在教育和学校相关环境工作，对学生、家长沟通比较熟悉。国际学校通常更重视服务标准、环境细节、流程规范和沟通体验，这些要求和我的性格、工作习惯比较匹配。我也希望在更规范的学校服务体系中提升自己，包括服务流程、英语沟通和运营协作能力。"
  },
  {
    title: "为什么这个岗位适合你？",
    text:
      "这个岗位需要一线服务、现场协调、物资盘点、卫生安全意识、行政配合和团队协作。我过去虽然不是餐饮岗位，但长期在幼儿园和早教中心做学生服务、家长沟通、活动执行、物资管理和突发问题处理，这些能力可以迁移。我也能接受基础服务工作，愿意按标准学习餐饮服务和食品安全规范，所以我认为自己适合从这个岗位切入。"
  }
];

const plan = [
  {
    day: "第一天：熟悉岗位与简历",
    goal: "把幼教经历讲成服务运营经历。",
    items: [
      ["圈出 JD 关键词", "一线服务、餐前准备、卫生安全、物资盘点、台账、行政对接、用餐高峰、英语沟通。"],
      ["准备 5 个真实案例", "家长诉求、活动现场、物资盘点、突发问题、团队协作。"],
      ["重写自我介绍", "减少教学表达，强化家长接待、现场协调、活动执行、物资管理和安全卫生。"],
      ["补餐厅服务常识", "餐前准备、分餐、送餐、餐后清洁、餐具摆放、食品安全基本要求。"]
    ]
  },
  {
    day: "第二天：练习面试问答",
    goal: "把面试官最担心的问题提前讲顺。",
    items: [
      ["练 8 个重点问题", "转行原因、无餐饮经验、基础服务、高峰期、投诉、物资盘点、英语、职业规划。"],
      ["每题先 30 秒回答", "先说结论，再给一两个具体动作。"],
      ["再用 1 分钟补充案例", "避免背稿感，用过去真实经历支撑。"],
      ["删除过度包装", "不要说精通餐厅管理、非常熟悉食品安全体系。"]
    ]
  },
  {
    day: "第三天：模拟面试与仪容准备",
    goal: "让形象和表达都像服务岗位候选人。",
    items: [
      ["完整模拟 15-20 分钟", "顺序：自我介绍、转行原因、经验匹配、短板解释、反问面试官。"],
      ["准备面试穿着", "简洁、干净、亲和；浅色衬衫、深色裤装、整洁发型。"],
      ["准备材料", "简历 2 份、学历信息、工作时间线、个人案例关键词。"],
      ["背基础英语服务句", "Please wait a moment. / How can I help you? / This way, please. / I will check it for you."]
    ]
  }
];

const reverseQuestions = [
  "这个岗位日常工作中，一线服务和行政协助大概各占多少比例？",
  "入职后是否会有食品安全、餐厅服务流程或岗位标准方面的培训？",
  "用餐高峰期通常是哪些时间段？岗位人员是如何分工的？",
  "这个岗位需要负责哪些台账或物资盘点工作？有没有固定模板？",
  "餐厅服务对象主要是学生、老师，还是也会接待家长和外籍员工？",
  "对新人来说，前三个月最希望我先做好哪些事情？",
  "如果后续表现稳定，是否有机会往领班助理、现场协调或运营支持方向发展？",
  "这个团队目前最需要新同事补足的是执行力、沟通服务，还是现场协调能力？"
];

const keywords = [
  "一线服务",
  "客户接待",
  "家长沟通",
  "现场协调",
  "餐前准备",
  "物资盘点",
  "台账记录",
  "库存管理",
  "卫生安全",
  "环境维护",
  "流程执行",
  "学生秩序维护",
  "突发问题处理",
  "团队协作",
  "行政对接",
  "学校场景",
  "服务意识",
  "执行力",
  "基础英语沟通"
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  filter: "all",
  mastered: new Set(JSON.parse(localStorage.getItem("masteredQas") || "[]")),
  checks: new Set(JSON.parse(localStorage.getItem("prepChecks") || "[]"))
};

function saveState() {
  localStorage.setItem("masteredQas", JSON.stringify([...state.mastered]));
  localStorage.setItem("prepChecks", JSON.stringify([...state.checks]));
}

function textToParagraphs(text) {
  return text
    .split("\n")
    .filter(Boolean)
    .map((item) => `<p>${item}</p>`)
    .join("");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制到剪贴板");
  } catch {
    showToast("复制失败，请手动选择文本");
  }
}

function renderQa() {
  const container = $("#qaList");
  container.innerHTML = qaItems
    .map((item, index) => {
      const id = `qa-${index}`;
      const isDone = state.mastered.has(id);
      return `
        <details class="panel qa-card searchable" data-tags="${item.tags.join(" ")}" data-search="${item.q} ${item.angle} ${item.answer}">
          <summary>
            <div class="qa-summary">
              <span class="qa-index">${index + 1}</span>
              <h3>${item.q}</h3>
              <button class="master ${isDone ? "is-done" : ""}" type="button" data-master="${id}">
                ${isDone ? "已掌握" : "标记"}
              </button>
            </div>
            <div class="tag-row">${item.tags.map((tag) => `<span>${tagLabel(tag)}</span>`).join("")}</div>
          </summary>
          <div class="qa-body">
            <span class="answer-label">回答思路</span>
            <p>${item.angle}</p>
            <span class="answer-label">高分示例</span>
            <p>${item.answer}</p>
            <button class="copy" type="button" data-copy="${escapeAttribute(item.answer)}">复制答案</button>
          </div>
        </details>
      `;
    })
    .join("");
}

function tagLabel(tag) {
  return {
    shortcoming: "短板",
    service: "现场",
    english: "英语",
    career: "稳定"
  }[tag] || tag;
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function renderScripts() {
  $("#introList").innerHTML = intros
    .map(
      (item) => `
      <article class="panel searchable" data-search="${item.title} ${item.meta} ${item.text}">
        <div class="script-title">
          <h3>${item.title}</h3>
          <span>${item.meta}</span>
        </div>
        ${textToParagraphs(item.text)}
        <button class="copy" type="button" data-copy="${escapeAttribute(item.text)}">复制</button>
      </article>
    `
    )
    .join("");

  $("#transitionList").innerHTML = transitions
    .map(
      (item) => `
      <article class="panel searchable" data-search="${item.title} ${item.text}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button class="copy" type="button" data-copy="${escapeAttribute(item.text)}">复制</button>
      </article>
    `
    )
    .join("");
}

function renderPlan() {
  let counter = 0;
  $("#planList").innerHTML = plan
    .map((day) => {
      const items = day.items
        .map(([title, desc]) => {
          const id = `task-${counter++}`;
          const checked = state.checks.has(id);
          return `
            <label class="check-item">
              <input type="checkbox" data-check="${id}" ${checked ? "checked" : ""} />
              <span><strong>${title}</strong><span>${desc}</span></span>
            </label>
          `;
        })
        .join("");
      return `
        <article class="panel day searchable" data-search="${day.day} ${day.goal} ${day.items.flat().join(" ")}">
          <h3>${day.day}</h3>
          <p><strong>目标：</strong>${day.goal}</p>
          ${items}
        </article>
      `;
    })
    .join("");
}

function renderReverseQuestions() {
  $("#reverseQuestions").innerHTML = reverseQuestions.map((item) => `<li>${item}</li>`).join("");
}

function renderKeywords() {
  $("#keywordCloud").innerHTML = keywords.map((item) => `<span>${item}</span>`).join("");
}

function updateProgress() {
  const total = qaItems.length + plan.reduce((sum, day) => sum + day.items.length, 0);
  const done = state.mastered.size + state.checks.size;
  const value = Math.round((done / total) * 100);
  $("#progressValue").textContent = `${value}%`;
  $("#progressBar").style.width = `${value}%`;
}

function applyFilters() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const activeView = $(".view.is-active");
  const searchable = $$(".searchable", activeView);
  let visibleCount = 0;

  searchable.forEach((node) => {
    const haystack = (node.dataset.search || "").toLowerCase();
    const tagMatch =
      activeView.id !== "qa" || state.filter === "all" || (node.dataset.tags || "").includes(state.filter);
    const searchMatch = !search || haystack.includes(search);
    const visible = tagMatch && searchMatch;
    node.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  let empty = $(".empty", activeView);
  if (!empty) {
    empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "没有匹配内容，换个关键词试试。";
    activeView.appendChild(empty);
  }
  empty.style.display = visibleCount === 0 ? "block" : "none";
}

function bindEvents() {
  $(".tabs").addEventListener("click", (event) => {
    const button = event.target.closest(".tab");
    if (!button) return;
    $$(".tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
    $$("[data-view]").forEach((view) => view.classList.toggle("is-active", view.id === button.dataset.tab));
    applyFilters();
  });

  $(".filters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;
    state.filter = button.dataset.filter;
    $$(".filter").forEach((filter) => filter.classList.toggle("is-active", filter === button));
    applyFilters();
  });

  document.addEventListener("click", (event) => {
    const copy = event.target.closest("[data-copy]");
    if (copy) {
      copyText(copy.dataset.copy);
      return;
    }

    const master = event.target.closest("[data-master]");
    if (master) {
      const id = master.dataset.master;
      if (state.mastered.has(id)) {
        state.mastered.delete(id);
      } else {
        state.mastered.add(id);
      }
      master.classList.toggle("is-done", state.mastered.has(id));
      master.textContent = state.mastered.has(id) ? "已掌握" : "标记";
      saveState();
      updateProgress();
    }
  });

  document.addEventListener("change", (event) => {
    const check = event.target.closest("[data-check]");
    if (!check) return;
    if (check.checked) {
      state.checks.add(check.dataset.check);
    } else {
      state.checks.delete(check.dataset.check);
    }
    saveState();
    updateProgress();
  });

  $("#searchInput").addEventListener("input", applyFilters);
}

renderQa();
renderScripts();
renderPlan();
renderReverseQuestions();
renderKeywords();
bindEvents();
updateProgress();
applyFilters();
