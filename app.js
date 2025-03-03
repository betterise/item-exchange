// 檢測用戶設備
function detectDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // 檢測是否為 iOS 設備
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  // 檢測是否為 Android 設備
  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // 檢測是否為 Windows 或 macOS 設備
  if (/Win|Mac/i.test(userAgent)) {
    return 'Desktop';
  }

  // 其他設備
  return 'Other';
}

// 根據設備顯示導航欄
const device = detectDevice();
const topNav = document.getElementById('top-nav');
const bottomNav = document.getElementById('bottom-nav');

if (device === 'iOS' || device === 'Android') {
  // 移動設備：顯示底部導航欄
  bottomNav.style.display = 'flex';
} else if (device === 'Desktop') {
  // 桌面設備：顯示頂部導航欄
  topNav.style.display = 'flex';
}

// 表單提交功能
const requestForm = document.getElementById('request-form');
const requestsList = document.getElementById('requests');

requestForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // 獲取表單數據
  const itemName = document.getElementById('item-name').value;
  const itemDescription = document.getElementById('item-description').value;
  const userName = document.getElementById('user-name').value;

  // 創建新的請求項目
  const newRequest = document.createElement('li');
  newRequest.innerHTML = `
    <strong>${itemName}</strong><br>
    <em>${userName}</em><br>
    ${itemDescription}
  `;

  // 添加到請求列表
  requestsList.appendChild(newRequest);

  // 清空表單
  requestForm.reset();
});
