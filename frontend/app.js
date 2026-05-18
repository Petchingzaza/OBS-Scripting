const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", sendQuestion)

async function sendQuestion(){

    const name = document
        .getElementById("name")
        .value
        .trim()

    const question = document
        .getElementById("question")
        .value
        .trim()

    const status = document
        .getElementById("status")

    // validate
    if(!name || !question){

        status.innerText =
            "กรุณากรอกข้อมูลให้ครบ"

        return
    }

    // payload
    const data = {
        name,
        question,
        timestamp:Date.now()
    }

    console.log(data)

    // =========================
    // FIREBASE WRITE EXAMPLE
    // =========================

    /*
    await set(
        ref(db, "currentQuestion"),
        data
    )
    */

    // =========================

    status.innerText =
        "ส่งคำถามเรียบร้อย"

    // reset
    document.getElementById("question").value = ""
}