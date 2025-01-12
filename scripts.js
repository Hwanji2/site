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

// 프로젝트 항목들 추가 (예시 데이터)
document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');

    const projects = [
        {
            title: '웹 개발 프로젝트',
            description: 'HTML, CSS, JavaScript를 사용하여 웹사이트를 구축했습니다.',
            category: 'web',
            image: 'image1.jpg',
            award: true,
            date: '2023-10-15'
        },
        {
            title: '안드로이드 앱',
            description: 'Kotlin을 사용하여 안드로이드 앱을 개발했습니다.',
            category: 'android',
            image: 'image2.jpg',
            award: false,
            date: '2023-11-20'
        },
        {
            title: '자바 게임 개발',
            description: '자바로 2D 게임을 개발했습니다.',
            category: 'java',
            image: 'image3.jpg',
            award: false,
            date: '2023-08-05'
        },
        {
            title: 'C++ 프로젝트',
            description: 'C++을 사용하여 콘솔 프로그램을 작성했습니다.',
            category: 'cpp',
            image: 'image4.jpg',
            award: true,
            date: '2023-09-10'
        },
        {
            title: 'HTML5 게임 개발',
            description: 'HTML5와 JavaScript를 사용하여 간단한 게임을 개발했습니다.',
            category: 'web',
            image: 'image5.jpg',
            award: false,
            date: '2023-07-21'
        },
        {
            title: '안드로이드 유틸리티 앱',
            description: '안드로이드에서 사용할 수 있는 유틸리티 앱을 개발했습니다.',
            category: 'android',
            image: 'image6.jpg',
            award: false,
            date: '2023-12-12'
        },
        {
            title: '자바 기반 API 개발',
            description: '자바로 RESTful API를 개발했습니다.',
            category: 'java',
            image: 'image7.jpg',
            award: true,
            date: '2023-06-15'
        },
        {
            title: 'C 프로젝트',
            description: 'C 언어로 다양한 알고리즘을 구현했습니다.',
            category: 'c',
            image: 'image8.jpg',
            award: true,
            date: '2023-04-20'
        },
        {
            title: 'C++ 기반 게임 엔진',
            description: 'C++를 사용하여 간단한 게임 엔진을 개발했습니다.',
            category: 'cpp',
            image: 'image9.jpg',
            award: false,
            date: '2023-05-15'
        },
        {
            title: '웹 애플리케이션',
            description: '웹 애플리케이션을 개발하여 실시간 데이터를 처리했습니다.',
            category: 'web',
            image: 'image10.jpg',
            award: true,
            date: '2023-03-30'
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
