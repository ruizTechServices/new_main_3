import client from '../lib/clients/google/client'
import dotenv from 'dotenv'
dotenv.config()

console.log('🧠 Testing Google Client...')
console.log('✅ Google client initialized:', !!client)
console.log('🔑 API key configured:', !!process.env.GEMINI_API_KEY)

// Test basic client properties
try {
    console.log('📋 Client type:', typeof client)
    console.log('🛠 Client constructor:', client.constructor.name)
} catch (error) {
    console.error('❌ Error testing client:', error)
}
