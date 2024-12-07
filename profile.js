class ProfileManager {
    constructor() {
        this.userData = {
            name: '用户名',
            phone: '13888888888',
            avatar: 'images/avatar-placeholder.jpg',
            membershipLevel: '黄金会员',
            points: 2000,
            remainingClasses: 10,
            expireDate: '2024-12-31'
        };
        this.initializeEventListeners();
        this.displayUserInfo();
    }

    initializeEventListeners() {
        const saveButton = document.querySelector('.btn-save');
        if (saveButton) {
            saveButton.addEventListener('click', () => this.saveUserInfo());
        }
    }

    displayUserInfo() {
        // 显示用户基本信息
        document.querySelector('.profile-info h3').textContent = this.userData.name;
        document.querySelector('.profile-info p').textContent = 
            `会员等级：${this.userData.membershipLevel}`;
        
        // 显示会员信息
        document.querySelectorAll('.info-item').forEach(item => {
            const type = item.querySelector('span').textContent;
            const value = item.querySelector('strong');
            switch(type) {
                case '会员积分':
                    value.textContent = this.userData.points;
                    break;
                case '剩余课时':
                    value.textContent = this.userData.remainingClasses;
                    break;
                case '会员有效期':
                    value.textContent = this.userData.expireDate;
                    break;
            }
        });
    }

    saveUserInfo() {
        const newName = document.querySelector('input[type="text"]').value;
        const newPhone = document.querySelector('input[type="tel"]').value;
        
        // 这里应该添加实际的保存逻辑，比如与后端API交互
        this.userData.name = newName;
        this.userData.phone = newPhone;
        
        alert('保存成功！');
        this.displayUserInfo();
    }
}

// 初始化
const profileManager = new ProfileManager(); 