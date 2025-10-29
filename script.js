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
        correctAnswer: "Although the manufacturing process takes time, it is necessary because it provides jobs and supports the economy."
    },
    {
        words: ["Manufacturing", "every day.", "products", "an important process", "for people", "creates", "is", "because it"],
        correctAnswer: "Manufacturing is an important process because it creates products for people every day."
    },
    {
        words: ["the manufacturing process,", "want to improve", "you should add", "and train workers", "new technology", "carefully.", "If you"],
        correctAnswer: "If you want to improve the manufacturing process, you should add new technology and train workers carefully."
    },
    {
        words: ["materials.", "works", "who", "in", "the lab", "The engineer", "checks the"],
        correctAnswer: "The engineer who works in the lab checks the materials."
    },
    {
        words: ["and quality.", "in manufacturing", "ensures", "safety", "A standard", "processes"],
        correctAnswer: "A standard in manufacturing processes ensures safety and quality."
    },
    {
        words: ["and", "to replace", "maintain.", "are easier", "that", "meet", "Products", "standards"],
        correctAnswer: "Products that meet standards are easier to replace and maintain."
    },
    {
        words: ["Workers", "others.", "who", "strictly follow", "themselves", "safety procedures", "not only", "but also", "protect"],
        correctAnswer: "Workers who strictly follow safety procedures not only protect themselves but also others."
    },
    {
        words: ["The factory", "new technology.", "products", "are made", "where", "uses"],
        correctAnswer: "The factory where products are made uses new technology."
    },
    {
        words: ["meets", "that", "A certification", "required standards.", "a product", "confirms"],
        correctAnswer: "A certification confirms that a product meets required standards."
    },
    {
        words: ["The parachute", "to create", "too", "small", "is", "enough drag."],
        correctAnswer: "The parachute is too small to create enough drag."
    },
    {
        words: ["has", "to rise", "The balloon", "lift", "enough", "into the air."],
        correctAnswer: "The balloon has enough lift to rise into the air."
    },
    {
        words: ["so that", "drag", "The plane's engine", "can fly.", "the plane", "to overcome", "powerful", "must be", "enough"],
        correctAnswer: "The plane's engine must be powerful enough to overcome drag so that the plane can fly."
    },
    {
        words: ["enough", "the ground.", "The", "doesn't", "leave", "thrust", "to", "rocket", "have"],
        correctAnswer: "The rocket doesn't have enough thrust to leave the ground."
    },
    {
        words: ["enough", "strong", "to lift", "The heat", "into the air.", "is not", "the balloon"],
        correctAnswer: "The heat is not strong enough to lift the balloon into the air."
    },
    {
        words: ["The", "engine", "to", "launch", "too", "produces", "the", "satellite.", "little", "thrust"],
        correctAnswer: "The engine produces too little thrust to launch the satellite."
    },
    {
        words: ["learning about", "want to", "because I", "study architecture", "buildings.", "enjoy", "I"],
        correctAnswer: "I want to study architecture because I enjoy learning about buildings."
    },
    {
        words: ["will help", "basic engineering principles.", "The engineering course", "students", "develop", "an understanding of"],
        correctAnswer: "The engineering course will help students develop an understanding of basic engineering principles."
    },
    {
        words: ["James", "special tools", "uses", "to fix", "broken parts", "with production machines.", "or repair problems"],
        correctAnswer: "James uses special tools to fix broken parts or repair problems with production machines."
    },
    {
        words: ["about old machines.", "learnt a lot", "When I", "the engineering museum", "visited", "I", "last summer,"],
        correctAnswer: "When I visited the engineering museum last summer, I learnt a lot about old machines."
    },
    {
        words: ["join practical projects", "students", "or automated equipment.", "During their studies,", "such as smart control systems"],
        correctAnswer: "During their studies, students join practical projects such as smart control systems or automated equipment."
    },
    {
        words: ["their goal", "is", "try to create", "because", "to improve the quality of life", "Engineers", "practical solutions to everyday problems"],
        correctAnswer: "Engineers try to create practical solutions to everyday problems because their goal is to improve the quality of life."
    },
    {
        words: ["meet", "uses", "micrometers", "and calipers", "tolerance standards.", "Tony", "to check if parts"],
        correctAnswer: "Tony uses micrometers and calipers to check if parts meet tolerance standards."
    },
    {
        words: ["There", "with yesterday's batch,", "must", "could be", "carefully.", "a small problem", "so", "we", "check it"],
        correctAnswer: "There could be a small problem with yesterday's batch, so we must check it carefully."
    },
    {
        words: ["the final", "can", "identify", "QC inspectors", "during", "inspection.", "defective products"],
        correctAnswer: "QC inspectors can identify defective products during the final inspection."
    },
    {
        words: ["must", "during", "all safety procedures", "Workers", "production.", "and guidelines", "follow"],
        correctAnswer: "Workers must follow all safety procedures and guidelines during production."
    },
    {
        words: ["we", "to measure", "a wall?", "do", "use", "the length", "of", "Which tool"],
        correctAnswer: "Which tool do we use to measure the length of a wall?"
    },
    {
        words: ["department", "works", "issues", "manufacturing.", "The quality control", "in", "to prevent"],
        correctAnswer: "The quality control department works to prevent issues in manufacturing."
    },
    {
        words: ["The results", "recorded carefully", "were", "by", "the researchers", "after", "testing."],
        correctAnswer: "The results were recorded carefully by the researchers after testing."
    },
    {
        words: ["Steel cables", "are", "tested", "for", "tension", "by", "machines", "every day."],
        correctAnswer: "Steel cables are tested for tension by machines every day."
    },
    {
        words: ["Materials", "are", "checked for", "strain", "by engineers", "regularly."],
        correctAnswer: "Materials are checked for strain by engineers regularly."
    },
    {
        words: ["Concrete", "blocks", "were", "compressed", "under", "high pressure", "in the lab", "last week."],
        correctAnswer: "Concrete blocks were compressed under high pressure in the lab last week."
    },
    {
        words: ["Engineers", "measured", "the strength", "of the material.", "accurately yesterday", "to ensure", "shear", "forces"],
        correctAnswer: "Engineers measured shear forces accurately yesterday to ensure the strength of the material."
    },
    {
        words: ["beams", "measured", "in", "was", "Deflection", "during tests", "yesterday.", "that bent"],
        correctAnswer: "Deflection in beams that bent was measured during tests yesterday."
    },
    {
        words: ["In 2024,", "Samsung", "in Vietnam.", "for", "a", "launched", "smart TVs", "new factory"],
        correctAnswer: "In 2024, Samsung launched a new factory for smart TVs in Vietnam."
    },
    {
        words: ["built", "has recently", "research", "in Ho Chi Minh City.", "a", "The company", "center"],
        correctAnswer: "The company has recently built a research center in Ho Chi Minh City."
    },
    {
        words: ["in Vietnam yesterday.", "introduced", "for", "Nvidia", "chip", "an", "advanced", "AI systems"],
        correctAnswer: "Nvidia introduced an advanced chip for AI systems in Vietnam yesterday."
    },
    {
        words: ["for", "chips", "successfully developed", "FPT company", "advanced", "smart devices", "in 2022."],
        correctAnswer: "FPT company successfully developed advanced chips for smart devices in 2022."
    },
    {
        words: ["Recently,", "for AI devices.", "developed", "has", "Qualcomm", "smart chip solutions"],
        correctAnswer: "Recently, Qualcomm has developed smart chip solutions for AI devices."
    },
    {
        words: ["on", "Since 2022,", "we have", "global partners", "semiconductor projects.", "worked with"],
        correctAnswer: "Since 2022, we have worked with global partners on semiconductor projects."
    },
    {
        words: ["it is", "less", "and easier", "to shape.", "than", "cheaper", "but", "metal", "durable", "Wood", "is"],
        correctAnswer: "Wood is less durable than metal but it is cheaper and easier to shape."
    },
    {
        words: ["Aluminum", "is", "one", "of", "the", "least", "dense", "metals,", "and", "it", "is", "used", "to", "make", "airplanes."],
        correctAnswer: "Aluminum is one of the least dense metals, and it is used to make airplanes."
    },
    {
        words: ["material,", "most", "making tyres.", "it", "flexible", "Rubber", "is", "used", "for", "so", "the"],
        correctAnswer: "Rubber is the most flexible material, so it is used for making tyres."
    },
    {
        words: ["than", "so", "often used", "most other", "tools.", "in", "is", "metals,", "Steel", "harder", "it is"],
        correctAnswer: "Steel is harder than most other metals, so it is often used in tools."
    },
    {
        words: ["than", "ductile", "for wire", "is", "because", "more", "Copper", "most other metals.", "it is", "used"],
        correctAnswer: "Copper is used for wire because it is more ductile than most other metals."
    },
    {
        words: ["harder", "wood,", "building construction.", "often used", "in", "than", "is", "it is", "so", "Concrete"],
        correctAnswer: "Concrete is harder than wood, so it is often used in building construction."
    }
];

// Biến toàn cục
let currentQuestion = 0;
let score = 0;
let draggedElement = null;
let completedQuestions = new Set(); // Track completed questions

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
const questionGrid = document.getElementById('questionGrid');

// Khởi tạo trò chơi
function initGame() {
    currentQuestion = 0;
    score = 0;
    completedQuestions.clear();
    createQuestionGrid();
    showQuestion();
    updateProgress();
    scoreBoard.style.display = 'none';
}

// Tạo grid danh sách câu hỏi
function createQuestionGrid() {
    questionGrid.innerHTML = '';
    
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.textContent = String(i + 1).padStart(2, '0');
        btn.addEventListener('click', () => goToQuestion(i));
        questionGrid.appendChild(btn);
    }
}

// Chuyển đến câu hỏi cụ thể
function goToQuestion(questionIndex) {
    if (questionIndex >= 0 && questionIndex < questions.length) {
        currentQuestion = questionIndex;
        showQuestion();
        updateProgress();
        updateQuestionGrid();
    }
}

// Cập nhật hiển thị grid câu hỏi
function updateQuestionGrid() {
    const buttons = questionGrid.querySelectorAll('.question-btn');
    
    buttons.forEach((btn, index) => {
        btn.classList.remove('active', 'completed');
        
        if (index === currentQuestion) {
            btn.classList.add('active');
        } else if (completedQuestions.has(index)) {
            btn.classList.add('completed');
        }
    });
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
    
    // Cập nhật grid câu hỏi
    updateQuestionGrid();
    
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
    const userAnswer = answerWords.map(word => word.textContent).join(' ').trim();
    const correctAnswer = questions[currentQuestion].correctAnswer.trim();
    
    result.style.display = 'block';
    
    // Debug: hiển thị câu trả lời để kiểm tra
    console.log('User answer:', `"${userAnswer}"`);
    console.log('Correct answer:', `"${correctAnswer}"`);
    console.log('Are equal:', userAnswer === correctAnswer);
    
    if (userAnswer === correctAnswer) {
        result.className = 'result correct';
        result.textContent = '🎉 Chính xác! Câu trả lời của bạn đúng!';
        score++;
        completedQuestions.add(currentQuestion);
    } else {
        result.className = 'result incorrect';
        result.innerHTML = `❌ Chưa đúng. Đáp án đúng là:<br><strong>"${correctAnswer}"</strong>`;
    }
    
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    updateQuestionGrid();
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
