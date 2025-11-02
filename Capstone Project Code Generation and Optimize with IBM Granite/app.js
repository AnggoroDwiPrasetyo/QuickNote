// Menunggu sampai seluruh konten HTML dimuat sebelum menjalankan JS
document.addEventListener('DOMContentLoaded', () => {

    // --- FITUR JAM & TANGGAL REAL-TIME (Sudah ada) ---
    
    const elTanggal = document.getElementById('tampilan-tanggal');
    const elJam = document.getElementById('tampilan-jam');

    function updateWaktu() {
        const sekarang = new Date();
        const opsiTanggal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const tanggalString = sekarang.toLocaleDateString('id-ID', opsiTanggal);
        const jam = String(sekarang.getHours()).padStart(2, '0');
        const menit = String(sekarang.getMinutes()).padStart(2, '0');
        const detik = String(sekarang.getSeconds()).padStart(2, '0');
        const jamString = `${jam}:${menit}:${detik} WIB`;
        elTanggal.innerText = tanggalString;
        elJam.innerText = jamString;
    }
    setInterval(updateWaktu, 1000);
    updateWaktu();
    
    // --- KODE TO-DO LIST ---

    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const STORAGE_KEY = 'todos';

    // (Helper Function: getTodos - tidak berubah)
    const getTodos = () => {
        const todos = localStorage.getItem(STORAGE_KEY);
        return todos ? JSON.parse(todos) : [];
    };

    // (Helper Function: saveTodos - tidak berubah)
    const saveTodos = (todos) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    };

    // --- (BARU) FITUR 1: Fungsi untuk Toggle Complete ---
    const toggleComplete = (id) => {
        let todos = getTodos();
        // Cari todo berdasarkan ID, lalu ubah status 'isCompleted'-nya
        todos = todos.map(todo => 
            todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        saveTodos(todos);
        renderTodos(); // Render ulang list
    };

    /**
     * OPERASI (R)EAD: Merender semua 'todos' ke dalam list HTML
     * (File ini banyak dimodifikasi)
     */
    const renderTodos = () => {
        const todos = getTodos();
        todoList.innerHTML = ''; // Kosongkan list

        // --- (BARU) FITUR 3: Cek "Empty State" ---
        if (todos.length === 0) {
            todoList.innerHTML = `
                <li class="empty-state">
                    <span>🎉 Selamat! Tidak ada tugas hari ini.</span>
                </li>
            `;
            return; // Hentikan fungsi jika tidak ada tugas
        }
        // --- AKHIR FITUR 3 ---

        todos.forEach(todo => {
            const li = document.createElement('li');
            
            // --- (MODIFIKASI) FITUR 1: Tambahkan ID ke LI & Cek status complete ---
            li.dataset.id = todo.id; // Simpan ID di <li> agar lebih mudah diakses
            if (todo.isCompleted) {
                li.classList.add('completed');
            }
            // --- AKHIR MODIFIKASI FITUR 1 ---
            
            const span = document.createElement('span');
            span.textContent = todo.text;
            li.appendChild(span);

            const editButton = document.createElement('button');
            editButton.textContent = '✏️';
            editButton.className = 'edit-btn';
            // (ID di tombol sekarang tidak wajib, tapi kita biarkan)
            editButton.dataset.id = todo.id; 
            li.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑️';
            deleteButton.className = 'delete-btn';
            deleteButton.dataset.id = todo.id; 
            li.appendChild(deleteButton);

            todoList.appendChild(li);
        });
    };

    /**
     * OPERASI (C)REATE: Menambahkan todo baru
     */
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const newTodoText = todoInput.value.trim();
        if (newTodoText === '') return; 

        const todos = getTodos();
        
        const newTodo = {
            id: Date.now(), 
            text: newTodoText,
            isCompleted: false // --- (BARU) FITUR 1: Tambahkan status default ---
        };

        saveTodos([...todos, newTodo]);
        todoInput.value = '';
        renderTodos();
    });

    /**
     * OPERASI (U)PDATE & (D)ELETE
     * (Logika event klik dimodifikasi untuk menangani toggle complete)
     */
    todoList.addEventListener('click', (e) => {
        const target = e.target; // Element yang diklik
        
        // --- (MODIFIKASI) Logika untuk mendapatkan ID dari LI terdekat ---
        const li = target.closest('li');
        if (!li) return; // Klik di luar <li>

        const id = li.dataset.id;
        if (!id) return; // Klik pada <li> empty state (tidak punya ID)
        // --- AKHIR MODIFIKASI ---

        let todos = getTodos();

        // (U)PDATE
        if (target.classList.contains('edit-btn')) {
            const todoToEdit = todos.find(t => t.id == id);
            const newText = prompt('Masukkan teks baru:', todoToEdit.text);
            
            if (newText !== null && newText.trim() !== '') {
                todos = todos.map(todo => 
                    todo.id == id ? { ...todo, text: newText.trim() } : todo
                );
                saveTodos(todos);
                renderTodos();
            }
        }

        // (D)ELETE
        if (target.classList.contains('delete-btn')) {
            if (confirm('Apakah Anda yakin ingin menghapus tugas ini?')) {
                todos = todos.filter(todo => todo.id != id);
                saveTodos(todos);
                renderTodos();
            }
        }

        // --- (BARU) FITUR 1: Cek klik pada SPAN (teks tugas) ---
        if (target.tagName === 'SPAN') {
            toggleComplete(id);
        }
        // --- AKHIR FITUR 1 ---
    });

    // --- Inisialisasi ---
    renderTodos();
});