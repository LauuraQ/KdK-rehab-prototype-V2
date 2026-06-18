document.addEventListener('DOMContentLoaded', () => {
    function toggleFaq(el) {
        const item = el.closest('.faq-item');
        const allItems = document.querySelectorAll('.faq-item');
        allItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
        item.classList.toggle('open');
    }

    let score = 0;
    let answered = 0;
    function answerQ(btn, val) {
        const q = btn.closest('.test-q');
        q.querySelectorAll('.test-q-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        score += val;
        answered++;
        const total = document.querySelectorAll('.test-q').length;
        document.getElementById('progressBar').style.width = (answered / total * 100) + '%';
    }

    function showResult() {
        document.getElementById('testBlock').style.display = 'none';
        const result = document.getElementById('testResult');
        result.classList.add('active');
        const title = document.getElementById('resultTitle');
        const text = document.getElementById('resultText');
        if (score <= 2) {
            title.textContent = 'Низкий уровень риска';
            text.textContent = 'Признаки зависимости не выражены. Если вас всё же беспокоит ситуация — бесплатная консультация поможет расставить всё по местам.';
        } else if (score <= 5) {
            title.textContent = 'Средний уровень риска';
            text.textContent = 'Некоторые признаки зависимости присутствуют. Рекомендуем проконсультироваться со специалистом — на ранней стадии помочь значительно проще.';
        } else {
            title.textContent = 'Высокий уровень риска';
            text.textContent = 'Ответы указывают на серьёзные признаки зависимости. Важно обратиться к специалисту как можно скорее. Консультация бесплатна и анонимна.';
        }
    }

    function showTest(type) {
        document.querySelectorAll('.test-option').forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        score = 0; answered = 0;
        document.getElementById('progressBar').style.width = '0%';
        document.querySelectorAll('.test-q-btn').forEach(b => b.classList.remove('selected'));
        document.getElementById('testBlock').style.display = 'block';
        document.getElementById('testResult').classList.remove('active');
    }




    // Простая фильтрация блоков (табы)
    function filterReviews(type) {
        document.querySelectorAll('.reviews-tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        const groups = document.querySelectorAll('.review-group-wrapper');
        groups.forEach(group => {
            if (type === 'all' || group.getAttribute('data-type') === type) {
                group.style.display = 'block';
            } else {
                group.style.display = 'none';
            }
        });
    }

    function openVideoModal(url) {
        const modal = document.getElementById('videoModal');
        const iframe = document.getElementById('modalIframe');
        iframe.src = url;
        modal.classList.add('active');
    }

    function closeVideoModal() {
        const modal = document.getElementById('videoModal');
        const iframe = document.getElementById('modalIframe');
        iframe.src = '';
        modal.classList.remove('active');
    }

    function handleReviewSubmit(e) {
        e.preventDefault();
        alert('Благодарим за ваш отзыв! Он отправлен на проверку модератором сайта.');
        document.getElementById('customReviewForm').reset();
    }
});