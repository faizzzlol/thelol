var downloadCount = 6;

function trackDownload() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}
