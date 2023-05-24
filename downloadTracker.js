var downloadCount = 0;

function trackDownload() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}
