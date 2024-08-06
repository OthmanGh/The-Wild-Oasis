import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://wfwvbqlkbofmxwuehaco.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmd3ZicWxrYm9mbXh3dWVoYWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NTE1NDAsImV4cCI6MjAzODUyNzU0MH0.E6dxzQhF41tmJMqKJIJFR8gSqbLvbWCjx0zjB9EoUY4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
