let request = require("supertest")
let app = require("../server")

describe("GET /contacts", () => {
    it("เรียกดูลิสรายชื่อ", (done) => {
        request(app).get("/contacts")
            .expect(200)
            .then((res) => {
                let contacts = res.body
                expect(contacts).toHaveLength(12)
                let contact = contacts[0]
                expect(contact).toHaveProperty("id")
                expect(contact).toHaveProperty("name")
                expect(contact).toHaveProperty("email")
                expect(contact).toHaveProperty("phone")
                expect(contact).toHaveProperty("url")
                expect(contact).toHaveProperty("notes")
                done()
            })
    })
})

describe("POST /contacts", () => {
    it("เพิ่มรายชื่อเข้ารายการ", (done) => {
        let sendContact = {
            name: 'jesica',
            email: 'jesica@gmail.com',
            phone: '0877771234',
            url: 'www.google.com',
            notes: 'ทำได้แค่นี้'
        }

        request(app).post("/contacts")
            .send(sendContact)
            .expect(201)
            .then((res) => {
                let reciveContact = res.body
                expect(reciveContact).toHaveProperty("id", 12)
                expect(reciveContact).toHaveProperty("name", sendContact.name)
                expect(reciveContact).toHaveProperty("email", sendContact.email)
                expect(reciveContact).toHaveProperty("phone", sendContact.phone)
                expect(reciveContact).toHaveProperty("url", sendContact.url)
                expect(reciveContact).toHaveProperty("notes", sendContact.notes)
                done()
            })
    })
})