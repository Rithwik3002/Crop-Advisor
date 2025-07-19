function goToPage(pageId) {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('working-page').classList.add('hidden');
    document.getElementById('image-page').classList.add('hidden');

    document.getElementById(pageId).classList.remove('hidden');
}
