class TrainingManager {
    constructor() {
        // 从localStorage获取历史记录，如果没有则初始化为空数组
        this.records = JSON.parse(localStorage.getItem('trainingRecords')) || [];
        this.initializeEventListeners();
        this.displayRecords(); // 页面加载时显示历史记录
    }

    initializeEventListeners() {
        const form = document.querySelector('.record-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addRecord(e.target);
            });
        }
    }

    addRecord(form) {
        // 获取表单数据
        const exercise = form.exercise.value;
        const weight = form.weight.value;
        const sets = form.sets.value;

        // 验证数据
        if (!exercise || !weight || !sets) {
            alert('请填写完整的训练信息！');
            return;
        }

        // 创建新记录
        const newRecord = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            exercise: exercise,
            weight: weight,
            sets: sets
        };

        // 添加到记录数组
        this.records.unshift(newRecord); // 新记录添加到开头
        
        // 保存到localStorage
        localStorage.setItem('trainingRecords', JSON.stringify(this.records));
        
        // 更新显示
        this.displayRecords();
        
        // 重置表单
        form.reset();

        // 显示成功提示
        this.showNotification('训练记录已保存！');
    }

    displayRecords() {
        const container = document.querySelector('.training-section');
        
        // 如果还没有历史记录容器，创建一个
        let historyContainer = container.querySelector('.training-history');
        if (!historyContainer) {
            historyContainer = document.createElement('div');
            historyContainer.className = 'training-history';
            container.querySelector('.container').appendChild(historyContainer);
        }

        // 如果有记录，显示记录
        if (this.records.length > 0) {
            historyContainer.innerHTML = `
                <h3 class="history-title">训练历史</h3>
                <div class="records-container">
                    ${this.records.map(record => `
                        <div class="record-item fade-in">
                            <div class="record-header">
                                <span class="record-date">${record.date}</span>
                                <button onclick="trainingManager.deleteRecord(${record.id})" class="btn-delete">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                            <div class="record-details">
                                <p><strong>训练项目:</strong> ${record.exercise}</p>
                                <p><strong>重量:</strong> ${record.weight}kg</p>
                                <p><strong>组数:</strong> ${record.sets}组</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            historyContainer.innerHTML = `
                <div class="no-records">
                    <p>还没有训练记录，开始记录你的第一次训练吧！</p>
                </div>
            `;
        }
    }

    deleteRecord(id) {
        if (confirm('确定要删除这条记录吗？')) {
            this.records = this.records.filter(record => record.id !== id);
            localStorage.setItem('trainingRecords', JSON.stringify(this.records));
            this.displayRecords();
            this.showNotification('记录已删除！');
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // 2秒后移除通知
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

// 初始化
const trainingManager = new TrainingManager(); 