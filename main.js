// 导航栏滚动效果增强版
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
        // 改变logo颜色
        document.querySelector('.logo h1').style.color = '#ff9029';
        // 改变导航链接颜色
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.style.color = '#333';
        });
    } else {
        navbar.classList.remove('navbar-scrolled');
        // 恢复原始颜色
        document.querySelector('.logo h1').style.color = '#ff9029';
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.style.color = '#fff';
        });
    }
});

// 课程筛选功能
const filterButtons = document.querySelectorAll('.schedule-filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除其他按钮的active类
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前按钮的active类
        button.classList.add('active');
        // 这里添加筛选课程的逻辑
        filterCourses(button.textContent);
    });
});

// 课程数据和筛选功能
const courseData = {
    all: [
        { name: '瑜伽课', time: '09:00', trainer: '张教练', type: '团操课' },
        { name: '力量训练', time: '10:30', trainer: '李教练', type: '私教课' },
        { name: '有氧运动', time: '14:00', trainer: '王教练', type: '团操课' }
    ]
};

function filterCourses(type) {
    const filteredCourses = type === '全部' 
        ? courseData.all 
        : courseData.all.filter(course => course.type === type);
    
    displayCourses(filteredCourses);
}

function displayCourses(courses) {
    const scheduleDisplay = document.querySelector('.schedule-display');
    scheduleDisplay.innerHTML = ''; // 清空现有内容
    
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-item', 'fade-in');
        courseElement.innerHTML = `
            <div class="course-info">
                <h4 class="course-name">${course.name}</h4>
                <p class="course-time">${course.time}</p>
                <p class="course-trainer">${course.trainer}</p>
                <p class="course-type">${course.type}</p>
            </div>
            <button class="btn-book" onclick="bookCourse('${course.name}')">
                立即预约
            </button>
        `;
        scheduleDisplay.appendChild(courseElement);
    });
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    // 添加页面加载动画
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
});

// 个性化推荐系统
class RecommendationSystem {
    constructor(userData) {
        this.userData = userData;
        this.recommendations = [];
    }

    generateRecommendations() {
        // 基于用户级别推荐课程
        if (this.userData.level === 'beginner') {
            this.recommendations.push({
                type: '课程',
                name: '基础健身入门',
                reason: '适合初学者的基础训练课程'
            });
        }

        // 基于用户目标推荐
        if (this.userData.goal === 'weight_loss') {
            this.recommendations.push({
                type: '课程',
                name: 'HIIT高强度训练',
                reason: '有效促进脂肪燃烧'
            });
        }

        this.displayRecommendations();
    }

    displayRecommendations() {
        const container = document.querySelector('.recommendations');
        if (!container) return;

        container.innerHTML = this.recommendations
            .map(rec => `
                <div class="recommendation-card fade-in">
                    <h4>${rec.type}: ${rec.name}</h4>
                    <p>${rec.reason}</p>
                    <button class="btn-action">查看详情</button>
                </div>
            `)
            .join('');
    }
}

// 训练记录系统
class TrainingRecord {
    constructor() {
        this.records = JSON.parse(localStorage.getItem('trainingRecords')) || [];
    }

    addRecord(data) {
        const record = {
            id: Date.now(),
            date: new Date().toISOString(),
            ...data
        };
        this.records.push(record);
        this.saveRecords();
        this.updateUI();
    }

    saveRecords() {
        localStorage.setItem('trainingRecords', JSON.stringify(this.records));
    }

    updateUI() {
        const recordsList = document.querySelector('.training-records');
        if (!recordsList) return;

        recordsList.innerHTML = this.records
            .map(record => `
                <div class="record-item">
                    <div class="record-date">${new Date(record.date).toLocaleDateString()}</div>
                    <div class="record-details">
                        <p>项目: ${record.exercise}</p>
                        <p>重量: ${record.weight}kg</p>
                        <p>组数: ${record.sets}</p>
                    </div>
                </div>
            `)
            .join('');
    }
}

const trainingRecord = new TrainingRecord(); 