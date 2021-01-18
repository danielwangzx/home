export function copyToClipboard(id) {
	const text = document.getElementById(id);
	const selection = window.getSelection();
	const range = document.createRange();
	range.selectNodeContents(text);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
}