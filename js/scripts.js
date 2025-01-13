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
document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        const offset = -100 * currentIndex;
        document.querySelector('.image-slider').style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 1000000); // 
});

// 프로젝트 항목들 추가 (실제 데이터)
document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');

    const projects = [
        {
            title: 'C 프로그래밍_영화관 관리 시스템',
            description: '영화관 좌석 예약 및 관리를 위한 시스템을 구현했습니다.',
            category: 'c',
            image: 'image1.jpg',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/MovieTheaterResevationSystem'
        },
        {
            title: '건국대학교 혁신 아이디어톤 (장려상)_강의실 대여 및 열람 시스템',
            description: '강의실의 빈 시간표를 확인하고 대여할 수 있는 시스템을 개발했습니다.',
            category: 'c-js',
            image: 'image2.jpg',
            award: true,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/FindVoid'
        },
        {
            title: '객체지향프로그래밍_자판기 관리 시스템',
            description: 'C++로 자판기 관리 시스템을 구현했습니다.',
            category: 'cpp',
            image: 'image3.jpg',
            award: false,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/BeverageVendingMachine'
        },
        {
            title: '부트사차원 ICT 공모전_공유 킥보드 분산 주차 할인 시스템',
            description: 'Flutter와 Dart를 사용하여 공유 킥보드 주차 할인 시스템을 개발했습니다.',
            category: 'flutter',
            image: 'image4.jpg',
            award: true,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/OnTrack_FE'
        },
        {
            title: 'EDGE 개발경진대회 (대상)_2D 플랫포머 게임',
            description: 'C, C++, Unity 및 C#을 사용하여 2D 플랫포머 게임을 개발했습니다.',
            category: 'game',
            image: 'image5.jpg',
            award: true,
            date: '2024-1',
            link: 'https://github.com/Hwanji2/RUNNING-TIME'
        },
        {
            title: 'EDGE 개발경진대회 (장려상)_3D FPS 게임',
            description: 'Unity와 C#으로 3D FPS 게임을 개발했습니다.',
            category: 'game',
            image: 'image6.jpg',
            award: true,
            date: '2024-2',
            link: 'https://github.com/Liminal-Studio'
        },
        {
            title: 'JAVA 프로그래밍_단어장 GUI 구현',
            description: 'Java의 swing으로 단어장 및 퀴즈 프로그램을 개발했습니다.',
            category: 'java',
            image: 'image7.jpg',
            award: false,
            date: '2024-2',
            link: 'https://github.com/Hwanji2/Voca-Quiz-and-Flashcard-Program'
        },
        {
            title: 'KUIT 해커톤 (대상)_휴라스틱을 극복한 글쓰기 커뮤니티',
            description: 'TypeScript를 사용하여 커뮤니티 서비스를 개발했습니다.',
            category: 'ts',
            image: 'image8.jpg',
            award: true,
            date: '2025-01',
            link: 'https://github.com/2025-CodeNova-3/T-mm_FrontEnd'
        },
        {
            title: '프로그래밍을 통한 문제해결_자료구조 비교 프로그램 구현',
            description: 'C++로 다양한 자료구조의 성능을 비교하는 프로그램을 개발했습니다.',
            category: 'cpp',
            image: 'image9.jpg',
            award: false,
            date: '2024-02',
            link: 'https://github.com/Hwanji2/AlgoStructer-Helper'
        },
        {
            title: '컴퓨터 프로그래밍 1_건국대학교 캠퍼스 공간에 메모를 남기는 어플',
            description: 'Flutter와 Dart로 캠퍼스 공간에 메모를 남길 수 있는 어플을 개발했습니다.',
            category: 'flutter',
            image: 'image10.jpg',
            award: false,
            date: '2024-05-15',
            link: 'https://github.com/Hwanji2/PinKonkuk'
        },
        {
            title: '오프라인 만남을 돕는 BLE 통신',
            description: 'Flutter와 Dart로 BLE 통신을 이용한 오프라인 만남 지원 서비스를 개발 중입니다.',
            category: 'flutter',
            image: 'image11.jpg',
            award: false,
            date: '진행 중',
            link: 'https://github.com/Hwanji2/Sai'
        },
        {
            title: 'KUIT 데모데이 모임을 최적화한 서비스',
            description: 'KUIT 데모데이 모임을 위한 최적화된 서비스를 개발 중입니다.',
            category: 'web',
            image: 'image12.jpg',
            award: false,
            date: '진행 중',
            link: 'https://github.com/orgs/KUIT-BARO/repositories'
        },
        {
            title: 'AI 메타버스 대회',
            description: 'AI 기술을 활용한 메타버스 프로젝트를 개발 중입니다.',
            category: 'ai',
            image: 'image13.jpg',
            award: false,
            date: '2024-2',
            link: 'https://github.com/jaewonjung6446/metaverse2024'
        }
    ];

    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        // 트로피 아이콘을 프로젝트 항목에 추가 (수상 받은 프로젝트만)
        const awardIcon = project.award ? '<div class="award-icon">🏆</div>' : '';

        const categoryClass = `category-${project.category.toLowerCase()}`;

        portfolioItem.innerHTML = `
            ${awardIcon}
            <a href="https://example.com" target="_blank">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-banner ${categoryClass}">
                    <p class="project-title">${project.title}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-date">${project.date}</div> <!-- 날짜 추가 -->
                </div>
            </a>
        `;

        portfolioContainer.appendChild(portfolioItem);
    });
});
