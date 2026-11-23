// Vercel runs this once a day (see vercel.json) so the free Supabase
// database sees regular activity and is not paused for inactivity.
const SB_URL = "https://vdujpeaxcbcwnnyvhboa.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdWpwZWF4Y2Jjd25ueXZoYm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzOTMyNTgsImV4cCI6MjExMDk2OTI1OH0.POZdBz3hgkZC6p4VsykFDJDE-4r4Al5MYFIsuFHvNSU";

module.exports = async (req, res) => {
  try {
    const r = await fetch(`${SB_URL}/rest/v1/person_details?select=person_id&limit=1`, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
    });
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(502).json({ ok: false, error: String(e && e.message || e) });
  }
};
