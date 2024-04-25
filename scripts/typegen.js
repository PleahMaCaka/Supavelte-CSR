import "dotenv/config"
import { exec } from "child_process"
import { exit } from "process"

const ref = process.env.SUPABASE_PROJECT_ID ?? null
const failLog = (msg) => {
    console.log(msg)
    exit(1)
}

if (!ref)
    failLog("No SUPABASE_PROJECT_ID found in .env")

exec(`pnpx supabase gen types typescript --project-id ${ref} > src/lib/types/Supabase.ts`, (err, stdout, stderr) => {
    if (err) failLog(err)
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})


console.log("Supabase types will be generated!")
