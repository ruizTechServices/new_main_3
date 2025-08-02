import client from '../lib/clients/openai/client'
import dotenv from 'dotenv'
dotenv.config()

console.log('🧠 Testing OpenAI Client...')
console.log('✅ OpenAI client initialized:', !!client)
console.log('🔑 API key configured:', !!process.env.OPENAI_API_KEY)

// Test basic client properties
try {
    console.log('📋 Client type:', typeof client)
    console.log('🛠 Client constructor:', client.constructor.name)
} catch (error) {
    console.error('❌ Error testing client:', error)
}
