export const form = (Form, Inputs, state) => {
    const 
        form = document.querySelector(Form),
        inputs = document.querySelectorAll(Inputs);

    const message = {
        loading: '⏳ Processing...',
        success: '✔ Payment accepted, thanks',
        failure: '⛔ Something getting wrong'
    }

    const clearAllInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        })
    }

    let isSubmitting = false;

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return; // Если уже отправляется, не делать ничего
          }
          
        isSubmitting = true;

        let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

        const formData = new FormData(form);
        for (let key in state) {
            formData.append(key, state[key]);
        }

        postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    setTimeout(() => {
                        clearAllInputs();
                        statusMessage.remove();
                    }, 4000);
                });
        return;
    });
}