var downloadCount = 4;

function trackDownload() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}
