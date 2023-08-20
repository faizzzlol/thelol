var downloadCount = 5;

function trackDownload() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}
