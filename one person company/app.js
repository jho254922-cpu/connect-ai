/* ==========================================================================
   Synap JavaScript — Interactive AI Agent Simulator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scenario Dialogues Configuration
    const scenarios = {
        doggie: [
            { type: 'system', text: 'Initializing Dispatch Protocol: doggie-mystic-kit (강아지 사주)' },
            { type: 'system', text: 'Loading Operator Credentials... [Gemini Connection: ACTIVE, PayPal Module: LOADED]' },
            { agent: 'ceo', name: '🧭 CEO', color: '280, 80%, 60%', text: '우리의 연결은 완벽해야 합니다. [강아지 사주 타로 서비스] 구축 프로젝트를 발주합니다. 현빈, 리서처, 코다리, 디자이너는 즉시 분석을 시작하고, 1차 MVP 설계를 기획하세요.' },
            { agent: 'researcher', name: '🔍 Researcher', color: '120, 80%, 60%', text: '구글 트렌드 분석 완료. 국내 반려동물 인구 1,500만 시대와 사주/타로 키워드가 매년 30% 성장 중입니다. 특히 20-30대 1인 가구가 반려동물의 성향과 건강 상태를 성향분석 형식으로 소비하려는 성향이 뚜렷합니다.' },
            { agent: 'business', name: '💼 현빈', color: '45, 80%, 60%', text: '💼 현빈입니다. 분석 결과, 이 아이디어의 ROI 임계점은 115%입니다. 1회 분석 요금을 $3.99(약 5,000원)로 책정하고, PayPal 간편 결제를 메인으로 둡니다. 첫 런칭 시 1회 무료 체험권을 제공하여 초기 유입 전환율을 45% 이상으로 유도하겠습니다.' },
            { agent: 'designer', name: '🎨 Designer', color: '320, 80%, 60%', text: '디자인 가이드라인 수립. 다크 오닉스 배경에 은은한 골드 스타더스트 테마를 메인으로 삼고, 강아지의 성향 카드를 글래스모피즘 카드로 표현하겠습니다. HSL 테마 컬러를 36(Gold), 220(Midnight Blue)로 설정하여 신비로우면서도 세련된 인상을 극대화하겠습니다.' },
            { agent: 'developer', name: '💻 코다리', color: '190, 80%, 60%', text: '💻 코다리, 로직 구현 대기 중. 컴파일 시작합니다. `doggie-mystic-kit` Boilerplate 주입 완료. `__GEMINI_API_KEY__` 및 `__PAYPAL_CLIENT_ID__` 자격증명 플레이스홀더를 인라인 매칭시켰습니다. Canvas 기반의 강아지 성격 오행 레이아웃과 반응형 결과 창 빌드를 마쳤습니다. 즉시 실행 가능합니다.' },
            { type: 'system', text: '✨ MEETING COMPLETE — Synap OS successfully deployed doggie-mystic-kit.' },
            { type: 'system', text: 'Status: 100% Correct. Ready to deploy to your hosting provider.' }
        ],
        saas: [
            { type: 'system', text: 'Initializing Dispatch Protocol: landing-kit (SaaS 랜딩 페이지)' },
            { type: 'system', text: 'Verifying package config... [Developer Mode: V7 active]' },
            { agent: 'ceo', name: '🧭 CEO', color: '280, 80%, 60%', text: 'Synap의 새로운 연결을 진행합니다. [구독형 AI 서비스 랜딩 페이지] 빌드를 가동합니다. 타깃인 30대 직장인들이 즉시 가치를 느끼고 무료 신청 폼을 남길 수 있는 최고급 전환 페이지를 개발하세요.' },
            { agent: 'researcher', name: '🔍 Researcher', color: '120, 80%, 60%', text: '시장 데이터 확인 결과, SaaS 랜딩 페이지에서는 "3초 후크"가 가입률을 80% 좌우합니다. 30대 직장인의 핵심 키워드인 "업무 자동화", "엑셀 탈출", "칼퇴근"에 포커싱된 직관적인 헤드라인과 통계 그래프 구성이 효과적입니다.' },
            { agent: 'business', name: '💼 현빈', color: '45, 80%, 60%', text: '💼 현빈입니다. 3단계 구독 모델(Starter: Free, Pro: $19/mo, Enterprise: Custom)을 기획합니다. 초기 Pro 요금 가입자에게 "1인 기업 자동화 가이드 e북"을 무료 번들로 매칭하여 구매 가치를 강화하겠습니다.' },
            { agent: 'designer', name: '🎨 Designer', color: '320, 80%, 60%', text: '다크 스페이스 블루(HSL 224, 25%, 6%)에 네온 바이올렛(HSL 262, 83%, 58%) 그라디언트 액센트를 가미한 고품격 IT 스타일 가이드를 적용합니다. 스크롤 위치에 맞춰 혜성이 스쳐가는 듯한 동적 리빌 효과를 버튼과 가격표 카드에 가미하겠습니다.' },
            { agent: 'developer', name: '💻 코다리', color: '190, 80%, 60%', text: '💻 코다리, 컴파일 완료. `landing-kit` 템플릿의 CSS 미세조정 및 HTML 구조를 설계했습니다. 사용자가 메일 주소를 입력 시 자동으로 API 데이터베이스와 동기화되는 비동기 fetch 비즈니스 로직을 삽입했습니다. 크로스플랫폼 브라우저 렌더링 검사 완료.' },
            { type: 'system', text: '✨ MEETING COMPLETE — Landing Page package successfully created.' },
            { type: 'system', text: 'Status: Deployed to local live preview server (npm run dev).' }
        ],
        youtube: [
            { type: 'system', text: 'Initializing Dispatch Protocol: Content Creation (유튜브 콘텐츠 제작)' },
            { type: 'system', text: 'Loading Video Metadata Creator... [Active Mode]' },
            { agent: 'ceo', name: '🧭 CEO', color: '280, 80%, 60%', text: '유튜브 에이전트 레오와 작가 에이전트는 즉시 협력하여 [30대 직장인을 위한 AI 에이전트로 돈 버는 법]을 주제로 대중적이면서도 강렬한 후킹력을 지닌 영상 대본과 썸네일 컨셉을 도출하세요.' },
            { agent: 'youtube', name: '📺 레오', color: '0, 80%, 60%', text: '📺 레오, 트렌드 사냥 시작. 유튜브 유사 카테고리 조회수 폭발 키워드는 "AI 1인 기업", "자동화 수익", "일 안 하고 돈 벌기"입니다. 영상 제목 1안: "하루 10분, 나 대신 일하는 AI 비서 7명 무료로 복사해가세요." 썸네일 컨셉은 다크 매트릭스 코드 앞에 놀란 표정의 개발자 일러스트를 올리고, 형광 텍스트로 "일주일 1억 번 비법"을 박습니다.' },
            { agent: 'writer', name: '✍️ Writer', color: '120, 80%, 60%', text: '영상 스크립트 초안 도출. 도입부 5초 후킹 대사: "아직도 엑셀 치고, 이메일 답장 쓰느라 야근하십니까? 2026년 현재, 나 대신 야근하고 돈까지 벌어다 주는 AI 에이전트 7마리 돌리는 1인 기업이 있습니다. 바로 알려드립니다." 이어서 3가지 핵심 성공 사례와 함께 Synap 솔루션을 단계적으로 어필하는 시나리오 커리큘럼 설계 완료.' },
            { agent: 'designer', name: '🎨 Designer', color: '320, 80%, 60%', text: '유튜브 썸네일과 영상 인트로에 사용될 로고 인트로 디자인 브리프를 완성했습니다. 네온 시냅스가 폭발하며 7개의 빛나는 에이전트 노드로 흩어지는 5초 무빙 모션을 연출하기 위해 에셋 좌표값을 레오에게 넘겨주었습니다.' },
            { type: 'system', text: '✨ MEETING COMPLETE — Video Production Script & Asset Brief ready.' },
            { type: 'system', text: 'Status: Script synced to sessions/2026-05-31-yt-script.md.' }
        ]
    };

    // 2. DOM Elements Selection
    const terminalContent = document.getElementById('terminal-content');
    const scenarioBtns = document.querySelectorAll('.btn-scenario');
    const customPromptInput = document.getElementById('custom-prompt-input');
    const btnRunCustom = document.getElementById('btn-run-custom');
    const monitorItems = document.querySelectorAll('.monitor-item');
    const orbitNodes = document.querySelectorAll('.agent-node');

    let currentTimeout = null;
    let textTimeouts = [];

    // 3. Clear all active timeouts
    function clearSimulationTimeouts() {
        if (currentTimeout) {
            clearTimeout(currentTimeout);
        }
        textTimeouts.forEach(t => clearTimeout(t));
        textTimeouts = [];
    }

    // 4. Render message in terminal with typewriter effect
    function renderTerminalMessage(msg, index, totalMessages, callback) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'term-msg';

        if (msg.type === 'system') {
            msgDiv.innerHTML = `<span class="term-system">[SYSTEM] ${msg.text}</span>`;
            terminalContent.appendChild(msgDiv);
            terminalContent.scrollTop = terminalContent.scrollHeight;
            
            // Set active agent lights to inactive for system messages
            monitorItems.forEach(item => item.classList.remove('active'));
            
            const timeout = setTimeout(() => {
                callback();
            }, 1200);
            textTimeouts.push(timeout);
        } else {
            // Activate the corresponding agent monitor light
            monitorItems.forEach(item => {
                const agent = item.getAttribute('data-agent');
                if (agent === msg.agent) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Focus card in lineup or orbit nodes
            orbitNodes.forEach(node => {
                if (node.getAttribute('data-agent') === msg.agent) {
                    node.style.transform = 'scale(1.3) translate(-50%, -50%)';
                    node.style.boxShadow = `0 0 20px hsl(${msg.color})`;
                } else {
                    node.style.transform = '';
                    node.style.boxShadow = '';
                }
            });

            msgDiv.style.borderColor = `hsl(${msg.color})`;
            msgDiv.innerHTML = `
                <div class="term-tag" style="color: hsl(${msg.color})">
                    <span class="agent-avatar"><i class="fas ${getAgentIcon(msg.agent)}"></i></span>
                    <span>${msg.name}</span>
                </div>
                <div class="term-text"></div>
            `;
            terminalContent.appendChild(msgDiv);

            const textContainer = msgDiv.querySelector('.term-text');
            let charIndex = 0;
            const typingSpeed = 15; // Fast typing speed for professional feel

            function typeCharacter() {
                if (charIndex < msg.text.length) {
                    textContainer.textContent += msg.text.charAt(charIndex);
                    charIndex++;
                    terminalContent.scrollTop = terminalContent.scrollHeight;
                    const charTimeout = setTimeout(typeCharacter, typingSpeed);
                    textTimeouts.push(charTimeout);
                } else {
                    // Message typing finished
                    const delay = 1800; // Let user read message
                    const delayTimeout = setTimeout(() => {
                        callback();
                    }, delay);
                    textTimeouts.push(delayTimeout);
                }
            }
            typeCharacter();
        }
    }

    // Help function to map icons
    function getAgentIcon(agent) {
        switch(agent) {
            case 'ceo': return 'fa-compass';
            case 'developer': return 'fa-code';
            case 'designer': return 'fa-paint-brush';
            case 'business': return 'fa-briefcase';
            case 'youtube': return 'fa-video';
            case 'instagram': return 'fa-camera';
            case 'writer': return 'fa-pen-nib';
            case 'researcher': return 'fa-search';
            default: return 'fa-user';
        }
    }

    // 5. Run simulation loop
    function startSimulation(scenarioName) {
        clearSimulationTimeouts();
        terminalContent.innerHTML = '';
        
        let msgList = [];
        if (scenarios[scenarioName]) {
            msgList = scenarios[scenarioName];
        } else {
            // If custom
            msgList = [
                { type: 'system', text: `Initializing Custom Synap Task: [${scenarioName}]` },
                { type: 'system', text: 'Connecting Brain Nodes to user context...' },
                { agent: 'ceo', name: '🧭 CEO', color: '280, 80%, 60%', text: `비즈니스 아이디어가 입력되었습니다: "${scenarioName}". 현빈, 리서처, 코다리, 디자이너는 즉시 이 아이디어를 분석하여 시너지를 낼 수 있는 1인 기업 자동화 전략을 수립하세요.` },
                { agent: 'researcher', name: '🔍 Researcher', color: '120, 80%, 60%', text: `타깃 분석 가동. 해당 비즈니스 분야의 연관 검색량과 잠재 고객의 이탈 구간을 탐색 중입니다. 주요 타깃인 직장인과 부업 꿈나무층이 가장 클릭하기 쉬운 키워드 팩을 수집했습니다.` },
                { agent: 'business', name: '💼 현빈', color: '45, 80%, 60%', text: '💼 현빈입니다. 분석 결과, 이 아이디어의 ROI 임계점은 130%입니다. 소액 월구독 모델(SaaS)로 가치 구조를 고안하고, 신규 결제 자동화 연동을 통해 초기 이탈률을 최소화하는 비즈니스 퍼널을 구성하겠습니다.' },
                { agent: 'designer', name: '🎨 Designer', color: '320, 80%, 60%', text: '아이디어에 어울리는 최첨단 비주얼 아이덴티티를 제안합니다. 은은하고 미려한 HSL 다크 네온 블루(200, 80%, 55%) 테마를 기준으로, 직관적인 UX 플로우와 시네마틱 반응형 모듈을 스케치하겠습니다.' },
                { agent: 'developer', name: '💻 코다리', color: '190, 80%, 60%', text: '💻 코다리, 준비 완료. 입력된 비즈니스 팩에 맞춘 Vanilla HTML/JS 자동 템플릿 주입 스크립트를 작성 중입니다. 시뮬레이션 코드 빌드가 100% 정상 가동 확인되었습니다.' },
                { type: 'system', text: `✨ MEETING COMPLETE — Custom concept for "${scenarioName}" mapped successfully.` },
                { type: 'system', text: 'Status: Synap OS successfully generated your One-Person Company Asset.' }
            ];
        }

        let currentMsgIndex = 0;

        function runNextMessage() {
            if (currentMsgIndex < msgList.length) {
                renderTerminalMessage(msgList[currentMsgIndex], currentMsgIndex, msgList.length, () => {
                    currentMsgIndex++;
                    runNextMessage();
                });
            } else {
                // Done
                monitorItems.forEach(item => item.classList.remove('active'));
                orbitNodes.forEach(node => {
                    node.style.transform = '';
                    node.style.boxShadow = '';
                });
            }
        }

        runNextMessage();
    }

    // 6. Hook up Scenario Buttons click
    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class
            scenarioBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class
            btn.classList.add('active');
            
            const scenario = btn.getAttribute('data-scenario');
            startSimulation(scenario);
        });
    });

    // 7. Hook up Custom Prompt submit
    btnRunCustom.addEventListener('click', () => {
        const promptText = customPromptInput.value.trim();
        if (promptText) {
            scenarioBtns.forEach(b => b.classList.remove('active'));
            startSimulation(promptText);
        } else {
            customPromptInput.focus();
        }
    });

    // 8. Visual hover connections for Hero elements
    orbitNodes.forEach(node => {
        node.addEventListener('mouseover', () => {
            const agentId = node.getAttribute('data-agent');
            // Find corresponding agent card in Agent grid
            const agentCards = document.querySelectorAll('.agent-card');
            agentCards.forEach(card => {
                const cardBadge = card.querySelector('.agent-badge');
                if (cardBadge.textContent.toLowerCase().includes(agentId)) {
                    card.style.borderColor = 'hsl(var(--secondary))';
                    card.style.transform = 'translateY(-8px) scale(1.02)';
                    card.style.boxShadow = '0 20px 40px hsla(var(--secondary), 0.15)';
                }
            });
        });

        node.addEventListener('mouseout', () => {
            const agentCards = document.querySelectorAll('.agent-card');
            agentCards.forEach(card => {
                card.style.borderColor = '';
                card.style.transform = '';
                card.style.boxShadow = '';
            });
        });
    });

    // 9. Autoplay doggie scenario on initial page load
    startSimulation('doggie');
});
