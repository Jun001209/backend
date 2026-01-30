export default function handler(req, res) {
  // Vercel 환경 변수에 저장된 값이 있는지 확인하는 코드입니다.
  const isConnected = process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY;

  res.status(200).json({
    status: "Vercel Backend is Live!",
    database_connection: isConnected ? "Connected (Environment Variables Found)" : "Disconnected (Missing Variables)",
    supabase_url: process.env.SUPABASE_URL ? "URL Configured" : "Not Found"
  });
}
