var downloadCount = 7;

function trackDownload() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}
