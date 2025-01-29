
// 프로젝트 항목을 정렬할 함수
function searchProjects() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const title = item.querySelector('.project-title').innerText.toLowerCase();
        const description = item.querySelector('.project-description').innerText.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 프로젝트 항목들 추가 (실제 데이터)
document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');

    const projects = [
        {
            title: 'C 프로그래밍_<br>영화관 관리 시스템',
            description: '영화관 좌석 예약 및 관리를 위한 시스템을 구현했습니다.',
            category: 'c',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/MovieTheaterResevationSystem'
        },
        {
            title: '건국대학교 혁신<br>아이디어톤<br>_강의실 대여 및<br>열람 시스템',
            description: '강의실의 빈 시간표를 확인하고<br> 대여할 수 있는 시스템을<br>개발했습니다.',
            category: 'konkuk',
            award: true,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/FindVoid'
        },
        {
            title: '객체지향<br>프로그래밍<br>_자판기 관리<br>시스템',
            description: 'C++로 자판기 관리 시스템을<br>구현했습니다.',
            category: 'cpp',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/BeverageVendingMachine'
        },
        {
            title: '부트사차원<br>_공유 킥보드 분산 주차 할인 시스템',
            description: 'Flutter와 Arduino를 사용하여<br> 공유 킥보드 주차 할인 시스템을<br> 개발했습니다.',
            category: 'flutter',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/OnTrack_FE'
        },
        {
            title: 'EDGE<br>개발경진대회<br>_2D 플랫포머 게임',
            description: 'C, C++, Unity 및 C#을 사용하여 타이머를 적극 활용한 2D 플랫포머 게임을 개발했습니다.',
            category: 'game',
            award: true,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/RUNNING-TIME'
        },
        {
            title: 'EDGE<br>개발경진대회<br>_3D FPS 게임',
            description: 'Unity와 C#으로 데시벨 감지를<br> 적극 활용한 3D FPS 게임을 개발했습니다.',
            category: 'game',
            award: true,
            date: '2024-2',
            link: 'https://github.com/Hwanji2/Manhole-Remake'
        },
        {
            title: 'JAVA 프로그래밍<br>_단어장 GUI<br>구현',
            description: 'Java Swing으로 단어장 및<br> 퀴즈 프로그램을 개발했습니다.',
            category: 'java',
            award: false,
            date: '2024-2',
            link: 'https://github.com/Hwanji2/Voca-Quiz-and-Flashcard-Program'
        },
        {
            title: 'KUIT 해커톤<br>_휴라스틱을<br> 극복한<br> 글쓰기 커뮤니티',
            description: '텀을 활용해 글쓰기<br> 커뮤니티를 개발했습니다.',
            category: 'ts',
            award: true,
            date: '2025-01',
            link: 'https://github.com/2025-CodeNova-3/T-mm_FrontEnd'
        },
        {
            title: '컴퓨터 프로그래밍 _건국대학교 캠퍼스 공간에 메모를 남기는 어플',
            description: 'Flutter와 Dart로 캠퍼스 공간에<br> 메모를 남길 수 있는 어플을<br> 개발했습니다.',
            category: 'konkuk',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/PinKonkuk'
        },
        {
            title: 'BLE 통신 활용<br> 어플',
            description: '로컬 통신을<br> 적극 활용한<br> 프로젝트입니다.',
            category: 'flutter',
            award: false,
            date: '진행 중',
            link: ','
        },
        {
            title: '우선 순위 기반<br> 할 일 관리 어플',
            description: '목표에 따라<br> 할 일을 정렬하는<br> 어플입니다.',
            category: 'flutter',
            award: false,
            date: '진행 중',
            link: 'https://github.com/Hwanji2/To-do-Sorted-list'
        },
        {
            title: 'KUIT 데모데이_<br> 약속의 중심<br> BARO 서비스',
            description: '모임에 최적화된<br> 서비스를 개발 중입니다.',
            category: 'web',
            award: false,
            date: '진행 중',
            link: 'https://github.com/orgs/KUIT-BARO/repositories'
        },
        {
            title: '메타몽_AI 힐링<br> 메타버스',
            description: 'NPC들과 음성 대화를 하며 힐링할 수 있는 메타버스를 개발했습니다.',
            category: 'external',
            award: false,
            date: '2024-1',
            link: 'https://github.com/jaewonjung6446/metaverse2024'
        },
        {
            title: '멀티<br> 서바이벌<br> 게임',
            description: '데디케이트 서버를 활용한<br> 언리얼 기반<br> 멀티게임 프로젝트입니다.',
            category: 'game',
            award: false,
            date: '진행 중',
            link: ''
        },
        {
            title: 'EDGE_심리 기반<br> 비주얼 게임',
            description: '파일 입출력을 적극 활용한<br> 프로젝트입니다.',
            category: 'game',
            award: false,
            date: '진행 중',
            link: 'https://github.com/EDGE-Beaver/MainLogic'
        }
    ];

    // 슬라이드 배경에 사용할 이미지 경로 배열
const slideImages = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    'path/to/image4.jpg',
    'path/to/image5.jpg'
];

// 슬라이드 배경을 설정할 컨테이너
const slideContainer = document.createElement('div');
slideContainer.classList.add('slide-container');
document.body.appendChild(slideContainer);

// CSS 스타일 추가
const style = document.createElement('style');
style.innerHTML = `
    .slide-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1; /* 배경에 위치하도록 설정 */
    }
    
    .slide-container img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3; /* 반투명 효과 */
        animation: slideAnimation 20s infinite;
    }

    @keyframes slideAnimation {
        0% { opacity: 0; transform: translateX(100%); }
        20% { opacity: 1; transform: translateX(0); }
        80% { opacity: 1; transform: translateX(0); }
        100% { opacity: 0; transform: translateX(-100%); }
    }
`;
document.head.appendChild(style);

// 슬라이드 이미지 설정 함수
function startImageSlideshow() {
    let index = 0;

    setInterval(() => {
        slideContainer.innerHTML = ''; // 이전 이미지를 제거

        const imgElement = document.createElement('img');
        imgElement.src = slideImages[index];
        slideContainer.appendChild(imgElement);

        index = (index + 1) % slideImages.length; // 이미지 인덱스 순환
    }, 5000); // 5초 간격으로 이미지 변경
}

// DOM 로드 후 슬라이드 시작
document.addEventListener('DOMContentLoaded', startImageSlideshow);


    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        // 트로피 아이콘을 프로젝트 항목에 추가 (수상 받은 프로젝트만)
        const awardIcon = project.award ? '<div class="award-icon">🏆</div>' : '';

        const categoryClass = `category-${project.category.toLowerCase()}`;

        portfolioItem.innerHTML = `
            ${awardIcon}
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                <div class="project-banner ${categoryClass}">
                    <p class="project-title">${project.title}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-date">${project.date}</div>
                </div>
            </a>
        `;

        portfolioContainer.appendChild(portfolioItem);
    });
});
