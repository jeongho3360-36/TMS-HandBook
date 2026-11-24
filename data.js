/* =====================================================================
   STACK TMS — 내용 데이터 파일
   화면 코드(index.html)는 건드리지 않고, 이 파일만 고치면 내용이 바뀝니다.

   ※ 실제 시험 절차·법적 판정 기준은 임의로 만들지 않았습니다.
     빈 배열 [] 로 남은 칸은 화면에 "자료 입력 예정"으로 표시됩니다.
     실제 자료를 확인한 뒤 채워 넣으세요.

   글자 강조: <b>강조할 글자</b>
   ===================================================================== */
window.TMS_DATA = {

  /* ----------------------------------------------------------------
     1) 준비물 — 시험 종류별
        ready:false 이면 "준비 중"으로 표시
        photo: images 폴더의 사진 파일 (없으면 '사진 자리'로 표시)
     ---------------------------------------------------------------- */
  prep: [
    {
      id: "dust",
      name: "먼지",
      ready: true,
      items: [
        { text: "먼지 여지 8개", sub: "1~5번 샘플용, 6~8번 블랭크용", photo: "images/dust-filter.jpg" },
        { text: "먼지 샘플러 KXD-502", photo: "images/dust-sampler.jpg" },
        { text: "도관", sub: "HCl용과 비교·확인 필요", photo: "images/tube.jpg" },
        { text: "프로브", sub: "굴뚝 내경 파악 후 길이 결정", photo: "images/probe.jpg" },
        { text: "프로브 거치대", photo: "images/probe-stand.jpg" },
        { text: "임핀저 박스", photo: "images/impinger-box.jpg" },
        { text: "먼지 노즐", photo: "images/dust-nozzle.jpg" },
        { text: "보루 가방", photo: "images/bag.jpg" },
        { text: "얼음 · 아이스박스", sub: "배출가스 냉각용", photo: "images/icebox.jpg" }
      ]
    },
    { id: "hcl", name: "염화수소(HCl)", ready: false, items: [] },
    { id: "etc", name: "기타", ready: false, items: [] }
  ],

  /* ----------------------------------------------------------------
     2) 시험방법
        group: 시험 종류(목록에서 묶는 이름)
        favorite:true 이면 홈의 '자주 찾는 시험'에 표시
        아래 8개 칸은 아코디언으로 펼쳐집니다.
     ---------------------------------------------------------------- */
  methods: [
    {
      id: "rata", group: "정도검사·점검", name: "상대정확도시험", favorite: true,
      summary: "기준방법 측정값과 측정기기 값 비교",
      purpose: [], equipment: [], checks: [], steps: [], criteria: [], cautions: [], references: []
    },
    {
      id: "inspection", group: "정도검사·점검", name: "정도검사", favorite: true,
      summary: "측정기기 정도검사",
      purpose: [], equipment: [], checks: [], steps: [], criteria: [], cautions: [], references: []
    },
    {
      id: "zerospan", group: "정도검사·점검", name: "제로·스팬 점검", favorite: true,
      summary: "제로·스팬 가스 주입 점검",
      purpose: [], equipment: [], checks: [], steps: [], criteria: [], cautions: [], references: []
    },
    {
      id: "dust-sampling", group: "시료채취", name: "먼지 시료채취",
      summary: "굴뚝 배출가스 중 먼지 채취",
      purpose: [],
      equipment: ["준비물 페이지의 '먼지' 목록 참고"],
      checks: [
        "여지를 측정 전 <b>105℃에서 2시간 이상</b> 건조한다.",
        "굴뚝 내경을 미리 파악해 프로브 길이를 결정한다.",
        "임핀저 구성 — 1·2번: 물 100g / 3번: 빈 병 / 4번: 실리카겔 200~300g",
        "도관이 HCl용과 맞는지 비교·확인한다."
      ],
      steps: [
        "프로브를 거치대에 고정하고 노즐을 장착한다.",
        "임핀저 박스를 연결하고 샘플러(KXD-502)를 준비한다.",
        "배출가스를 얼음으로 <b>20℃ 이하</b>로 냉각하며 채취한다.",
        "1~5번 여지로 시료를 채취하고, 6~8번 여지는 블랭크로 둔다."
      ],
      criteria: [],
      cautions: [
        "여지는 <b>상대습도 50% 이상</b>인 질량측정실에서 <b>2분 이상 노출 금지</b>.",
        "여지 건조는 <b>105℃·2시간 이상</b> 반드시 지킬 것.",
        "배출가스는 얼음으로 <b>20℃ 이하</b>로 냉각해 채취."
      ],
      references: []
    },
    {
      id: "hcl-sampling", group: "시료채취", name: "염화수소(HCl) 시료채취",
      summary: "자료 입력 예정",
      purpose: [], equipment: [], checks: [], steps: [], criteria: [], cautions: [], references: []
    }
  ],

  /* ----------------------------------------------------------------
     3) 업무자료
        link: 열 주소 (비워 두면 '링크 입력 예정')
     ---------------------------------------------------------------- */
  docs: [
    { id: "std",    name: "대기오염공정시험기준",       icon: "book",   items: [
      { id: "std-1", title: "대기오염공정시험기준 원문", link: "" }
    ]},
    { id: "rule",   name: "굴뚝자동측정기기 관련 규정", icon: "scale",  items: [
      { id: "rule-1", title: "관련 법령·고시", link: "" }
    ]},
    { id: "manual", name: "측정기기별 매뉴얼",         icon: "wrench", items: [
      { id: "manual-1", title: "먼지 샘플러 KXD-502 매뉴얼", link: "" }
    ]},
    { id: "form",   name: "현장 업무 서식",            icon: "file",   items: [] },
    { id: "trouble",name: "장비 오류 및 조치 사례",     icon: "alert",  items: [] }
  ]
};
