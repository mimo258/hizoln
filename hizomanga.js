class HizoManga {
    constructor() {
        this.id = 'hizomanga-novels';
        this.name = 'Hizo Manga (Novels)';
        this.icon = 'https://hizomanga.net/favicon.ico';
        this.baseUrl = 'https://hizomanga.net';
    }

    async searchNovels(searchTerm) {
        const res = await fetch(`${this.baseUrl}/?s=${encodeURIComponent(searchTerm)}&post_type=wp-manga`);
        const html = await res.text();
        return [];
    }

    async parseNovel(novelUrl) {
        return {
            url: novelUrl,
            name: '',
            cover: '',
            summary: '',
            chapters: []
        };
    }

    async parseChapter(chapterUrl) {
        const res = await fetch(chapterUrl);
        const html = await res.text();
        return '';
    }
}
