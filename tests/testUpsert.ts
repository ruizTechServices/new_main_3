// tests/testUpsert.ts
import 'dotenv/config'
import { indexDocument } from '@/lib/functions/pinecone/upsertVectors'

const testDocument = {
  docId: 'test-doc-002',
  content: `
    RAG solves these issues, as you no longer have to constantly fine-tune your LLM on new data (or even private data). Directly injecting the necessary data to respond to user questions into the prompts that are fed to the LLM is enough to generate correct and valuable answers. To conclude, RAG is key for a robust and flexible generative AI system. But how do we inject the right data into the prompt based on the user’s questions? We will dig into the technical aspects of RAG in the next sections. The vanilla RAG framework Every RAG system is similar at its roots. We will first focus on understanding RAG in its simplest form. Later, we will gradually introduce more advanced RAG techniques to improve the system’s accuracy. Note that we will use vanilla and naive RAG interchangeably to avoid repetition.
  `.trim()
}

async function testIndexDocument() {
  console.log('🔍 Testing indexDocument function...')
  
  try {
    console.log(`📄 Document ID: ${testDocument.docId}`)
    console.log(`📝 Content length: ${testDocument.content.length} characters`)
    
    await indexDocument(testDocument.docId, testDocument.content)
    
    console.log('✅ Document successfully indexed to Pinecone')
  } catch (error) {
    console.error('❌ Error indexing document:', error)
  }
}

testIndexDocument()
