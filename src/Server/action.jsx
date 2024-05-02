"use server";
const bearer_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhaGFtbGVnYWN5QGdtYWlsLmNvbSIsImp0aSI6ImMzOGZkMDFiLTdmZTgtNDdlYS1hNTM1LTYxODVjM2U0OTZiMSIsInVzZXJJZCI6IjY0ZWVjMWM4ZGYyYWEyNTE0MjE5MmJhOCIsImFjY291bnRJZCI6IjRIaXNQSm5TVXVqVUg3N3FZdUJNQSIsImV4cCI6MjUzNDAyMzAwODAwLCJpc3MiOiJodHRwczovL2R5bnR1YmUuY29tIiwiYXVkIjoiTWFuYWdlIn0.U7h76cQkMhl0SshAKRGU1_zsPefuo5SAjxW3-qSkZ-M";
export async function getdata() {
  const res = await fetch(
    "https://api.dyntube.com/v1/videos/sCVsiHmUok6DDfUocwn56w",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearer_token}`,
      },
    }
  );
  const data = await res.json();
  return data;
}
