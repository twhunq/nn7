// Dữ liệu câu hỏi
const questions = [
    {
        words: ["goods", "can produce", "efficiently.", "machinery", "so", "uses", "and workers", "it", "The manufacturing process"],
        correctAnswer: "The manufacturing process uses machinery and workers so it can produce goods efficiently."
    },
    {
        words: ["by layer.", "The ALM", "layer", "objects", "builds", "process"],
        correctAnswer: "The ALM process builds objects layer by layer."
    },
    {
        words: ["process starts,", "tools properly", "to avoid accidents.", "workers", "safety rules", "When the manufacturing", "and use", "must follow"],
        correctAnswer: "When the manufacturing process starts, workers must follow safety rules and use tools properly to avoid accidents."
    },
    {
        words: ["the economy.", "because it", "Although", "and supports", "provides jobs", "takes time,", "the manufacturing process", "it is necessary"],
        correctAnswer: "Although the manufacturing process takes time, it is necessary because it provides jobs and supports the economy"
    },
    {
        words: ["Manufacturing", "every day.", "products", "an important process", "for people", "creates", "is", "because it"],
        correctAnswer: "Manufacturing is an important process because it creates products for people every day."
    },
    {
        words: ["the manufacturing process,", "want to improve", "you should add", "and train workers", "new technology", "carefully.", "If you"],
        correctAnswer: "If you want to improve the manufacturing process, you should add new technology and train workers carefully."
    }
];

// Biến toàn cục
let currentQuestion = 0;
let score = 0;
let draggedElement = null;

// DOM elements
const wordsContainer = document.getElementById('wordsContainer');
const dropZone = document.getElementById('dropZone');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const nextBtn = document.getElementById('nextBtn');
const result = document.getElementById('result');
const questionNumber = document.getElementById('questionNumber');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progressText');
const scoreBoard = document.getElementById('scoreBoard');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

// Khởi tạo trò chơi
function initGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
    updateProgress();
    scoreBoard.style.display = 'none';
}

// Hiển thị câu hỏi hiện tại
function showQuestion() {
    const question = questions[currentQuestion];
    
    // Cập nhật số câu hỏi
    questionNumber.textContent = `Câu ${currentQuestion + 1}`;
    
    // Xóa nội dung cũ
    wordsContainer.innerHTML = '';
    dropZone.innerHTML = '<p class="placeholder">Kéo các từ vào đây để tạo câu</p>';
    
    // Tạo các từ có thể kéo
    const shuffledWords = [...question.words].sort(() => Math.random() - 0.5);
    
    shuffledWords.forEach(word => {
        const wordElement = createWordElement(word);
        wordsContainer.appendChild(wordElement);
    });
    
    // Ẩn kết quả và nút next
    result.style.display = 'none';
    nextBtn.style.display = 'none';
    checkBtn.style.display = 'inline-block';
    
    // Cập nhật progress bar
    updateProgress();
}

// Tạo element từ có thể kéo và click
function createWordElement(word) {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word-item';
    wordDiv.textContent = word;
    wordDiv.draggable = true;
    wordDiv.tabIndex = 0; // Cho phép focus bằng keyboard
    
    // Thêm event listeners cho drag
    wordDiv.addEventListener('dragstart', handleDragStart);
    wordDiv.addEventListener('dragend', handleDragEnd);
    
    // Thêm event listener cho click
    wordDiv.addEventListener('click', () => {
        moveWordToAnswer(wordDiv);
    });
    
    // Thêm event listener cho keyboard (Enter và Space)
    wordDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            moveWordToAnswer(wordDiv);
        }
    });
    
    return wordDiv;
}

// Xử lý bắt đầu kéo
function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
}

// Xử lý kết thúc kéo
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
}

// Thêm event listeners cho drop zone
dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('drop', handleDrop);
dropZone.addEventListener('dragenter', handleDragEnter);
dropZone.addEventListener('dragleave', handleDragLeave);

// Xử lý kéo qua drop zone
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

// Xử lý kéo vào drop zone
function handleDragEnter(e) {
    e.preventDefault();
    dropZone.classList.add('drag-over');
}

// Xử lý kéo ra khỏi drop zone
function handleDragLeave(e) {
    if (!dropZone.contains(e.relatedTarget)) {
        dropZone.classList.remove('drag-over');
    }
}

// Xử lý thả vào drop zone
function handleDrop(e) {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    
    if (draggedElement) {
        // Xóa placeholder nếu có
        const placeholder = dropZone.querySelector('.placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        
        // Tạo element mới trong drop zone
        const newElement = createAnswerWord(draggedElement.textContent);
        dropZone.appendChild(newElement);
        
        // Xóa element cũ
        draggedElement.remove();
    }
}

// Tạo element từ trong khu vực trả lời
function createAnswerWord(word) {
    const wordDiv = document.createElement('div');
    wordDiv.className = 'answer-word';
    wordDiv.textContent = word;
    wordDiv.tabIndex = 0; // Cho phép focus bằng keyboard
    
    // Thêm event listener để có thể click để chuyển trở lại
    wordDiv.addEventListener('click', () => {
        moveWordToWordsContainer(wordDiv);
    });
    
    // Thêm event listener cho keyboard (Enter và Space)
    wordDiv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            moveWordToWordsContainer(wordDiv);
        }
    });
    
    return wordDiv;
}

// Di chuyển từ từ khu vực gốc sang khu vực trả lời
function moveWordToAnswer(wordElement) {
    const word = wordElement.textContent;
    
    // Xóa placeholder nếu có
    const placeholder = dropZone.querySelector('.placeholder');
    if (placeholder) {
        placeholder.remove();
    }
    
    // Tạo element mới trong drop zone
    const newElement = createAnswerWord(word);
    dropZone.appendChild(newElement);
    
    // Xóa element cũ
    wordElement.remove();
}

// Di chuyển từ từ khu vực trả lời về khu vực gốc
function moveWordToWordsContainer(wordElement) {
    const word = wordElement.textContent;
    
    // Tạo lại element trong words container
    const newWordElement = createWordElement(word);
    wordsContainer.appendChild(newWordElement);
    
    // Xóa element khỏi drop zone
    wordElement.remove();
    
    // Thêm placeholder nếu drop zone trống
    if (dropZone.children.length === 0) {
        const placeholder = document.createElement('p');
        placeholder.className = 'placeholder';
        placeholder.textContent = 'Kéo các từ vào đây để tạo câu';
        dropZone.appendChild(placeholder);
    }
}

// Kiểm tra đáp án
function checkAnswer() {
    const answerWords = Array.from(dropZone.querySelectorAll('.answer-word'));
    const userAnswer = answerWords.map(word => word.textContent).join(' ');
    const correctAnswer = questions[currentQuestion].correctAnswer;
    
    result.style.display = 'block';
    
    if (userAnswer === correctAnswer) {
        result.className = 'result correct';
        result.textContent = '🎉 Chính xác! Câu trả lời của bạn đúng!';
        score++;
    } else {
        result.className = 'result incorrect';
        result.innerHTML = `❌ Chưa đúng. Đáp án đúng là:<br><strong>"${correctAnswer}"</strong>`;
    }
    
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    updateProgress();
}

// Làm lại câu hiện tại
function resetQuestion() {
    showQuestion();
}

// Chuyển sang câu tiếp theo
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // Hiển thị bảng điểm
        showScoreBoard();
    }
}

// Hiển thị bảng điểm
function showScoreBoard() {
    document.querySelector('.question-container').style.display = 'none';
    scoreBoard.style.display = 'block';
    finalScore.textContent = score;
}

// Cập nhật thanh tiến trình
function updateProgress() {
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;
    progressText.textContent = `Câu ${currentQuestion + 1} / ${questions.length}`;
}

// Event listeners
checkBtn.addEventListener('click', checkAnswer);
resetBtn.addEventListener('click', resetQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', () => {
    document.querySelector('.question-container').style.display = 'block';
    initGame();
});

// Khởi tạo trò chơi khi trang load
document.addEventListener('DOMContentLoaded', initGame);

// Thêm hiệu ứng hover cho các từ
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('word-item')) {
        e.target.style.transform = 'translateY(-2px) scale(1.05)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('word-item')) {
        e.target.style.transform = 'translateY(0) scale(1)';
    }
});

// Thêm hiệu ứng click cho các từ trong khu vực trả lời
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('answer-word')) {
        e.target.style.transform = 'translateY(-1px) scale(1.05)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('answer-word')) {
        e.target.style.transform = 'translateY(0) scale(1)';
    }
});
