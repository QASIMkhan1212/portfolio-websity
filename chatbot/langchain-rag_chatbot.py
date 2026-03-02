import os
from langchain_community.document_loaders import WebBaseLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.chains import create_retrieval_chain
# from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file
# --- Configuration ---
# Set your API Key as an environment variable (e.g., in your terminal: export GEMINI_API_KEY="YOUR_KEY")
# Or uncomment the line below and replace "YOUR_API_KEY"
# os.environ["GEMINI_API_KEY"] = "YOUR_API_KEY"

# The URL you want to scrape for content.
# Replace this with the target website you want to read.
TARGET_URL = "localhost:3000"

def setup_web_qa_chain(url: str):
    """
    Sets up the Retrieval-Augmented Generation (RAG) chain to query content from a single URL.
    
    Args:
        url (str): The URL of the website to scrape.
        
    Returns:
        RetrievalChain: The fully configured LangChain retrieval chain.
    """
    
    # 1. Load data from the specified URL using the WebBaseLoader
    print(f"Loading content from: {url}...")
    try:
        loader = WebBaseLoader(url)
        docs = loader.load()
        print(f"Successfully loaded {len(docs)} documents (pages).")
    except Exception as e:
        print(f"Error loading content: {e}")
        return None

    # 2. Split the document into smaller chunks for retrieval
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    split_documents = text_splitter.split_documents(docs)
    print(f"Split content into {len(split_documents)} chunks.")

    # 3. Create embeddings and store them in a Vector Store (FAISS)
    # Using Google's embedding model
    print("Creating embeddings and vector store...")
    embeddings = GoogleGenerativeAIEmbeddings(model="text-embedding-004")
    vector_store = FAISS.from_documents(split_documents, embeddings)
    retriever = vector_store.as_retriever()
    print("Vector store created and retriever is ready.")

    # 4. Define the Chat Model (Gemini) and Prompt Template
    llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", api_key="GEMINI_API_KEY")
    
    prompt = ChatPromptTemplate.from_template("""
    Answer the user's question based *only* on the provided context. 
    If you cannot find the answer in the context, clearly state that you do not have enough information.
    
    Context: {context}
    
    Question: {input}
    """)

    # 5. Create the document chain and the main retrieval chain
    document_chain = create_stuff_documents_chain(llm, prompt)
    retrieval_chain = create_retrieval_chain(retriever, document_chain)
    
    return retrieval_chain

def run_qa_session():
    """Initializes and runs the Q&A session."""
    
    if not os.getenv("GEMINI_API_KEY"):
        print("FATAL ERROR: GEMINI_API_KEY environment variable is not set.")
        print("Please set the key to run the application.")
        return

    qa_chain = setup_web_qa_chain(TARGET_URL)
    
    if not qa_chain:
        print("Cannot start the Q&A session due to loading error.")
        return

    print("\n--- Web Content Q&A Session Started ---")
    print(f"Source URL: {TARGET_URL}")
    print("Type 'exit' to quit.")
    
    while True:
        user_input = input("\nYour Question: ")
        if user_input.lower() == 'exit':
            break

        print("Thinking...")
        try:
            # Invoke the retrieval chain with the user's question
            response = qa_chain.invoke({"input": user_input})
            
            # The retrieval chain returns a dictionary, the answer is in the 'answer' key
            print("\n--- Answer ---")
            print(response["answer"])
            
            # Optionally show the chunks used to generate the answer
            print("\n--- Sources Found ---")
            for i, doc in enumerate(response["context"]):
                # The 'metadata' key contains the source of the chunk (in this case, the URL)
                source = doc.metadata.get('source', 'N/A')
                print(f"Chunk {i+1} from: {source}")
            
        except Exception as e:
            print(f"An error occurred during chain invocation: {e}")

# Run the main function
if __name__ == "__main__":
    run_qa_session()