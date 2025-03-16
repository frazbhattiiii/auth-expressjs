### **🚀 User Management API**  
A **Role-Based Access Control (RBAC)** system using **Express.js, Prisma, PostgreSQL (Supabase)** with **JWT authentication**.

---

## **📂 Tech Stack**  
- **Backend:** Express.js (TypeScript)  
- **ORM:** Prisma  
- **Database:** PostgreSQL (Supabase)  
- **Auth:** JWT (Access & Refresh Tokens)  
- **Docs:** Swagger (`/api-docs`)  

---

## **📥 Setup**  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Configure environment variables**  
   - Create `.env` file (or use `.env.sample` as reference)

4. **Run database migrations & seed admin user**  
   ```sh
   npx prisma migrate dev  
   npm run db:seed
   ```  
   - **Admin Login:**  
     ```
     Email: admin@example.com  
     Password: admin@123
     ```

5. **Start the server**  
   ```sh
   npm run dev
   ```
   - API runs at **`http://localhost:8000`**  
   - **Swagger Docs:** `http://localhost:8000/api-docs`

---

## **🔑 API Routes**  

### **Auth (`/api/auth`)**  
- `POST /login` → Authenticate user  
- `POST /refresh` → Refresh token  
- `POST /logout` → Logout user  

### **Admin (`/api/admin`)** *(Admin-only)*  
- `GET /dashboard` → Admin dashboard  
- `POST /some-operation` → Admin action  

---

## **📌 Notes**  
- **Admin user is pre-seeded** (`npm run db:seed`) and cannot be created via frontend.  
- **Use Bearer Token** for authentication.  

---

## **📧 Contact & Support**  
For issues, raise a GitHub issue or contact the development team.  

🚀 **Built with Prisma & Express.js**  

---

### **📌 `.env.sample` (Example .env file)**
```env
DATABASE_URL="postgresql://your-user:your-password@your-db-url:5432/postgres"
DIRECT_URL="postgresql://your-user:your-password@your-db-url:5432/postgres"

JWT_ACCESS_SECRET="your_access_secret"
JWT_REFRESH_SECRET="your_refresh_secret"

ACCESS_TOKEN_EXPIRY="30m"
REFRESH_TOKEN_EXPIRY="7d"
```# auth-expressjs
