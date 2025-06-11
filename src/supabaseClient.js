// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phornduxpfldrlglxobr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBob3JuZHV4cGZsZHJsZ2x4b2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMzQwNjMsImV4cCI6MjA2NDYxMDA2M30.RXO5pKuZcxu7XnLn4qjNYM0yOXqBkYDe6fDslaqLe1E'

export const supabase = createClient(supabaseUrl, supabaseKey)
