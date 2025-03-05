from fastapi import FastAPI
app=FastAPI()

@app.get("/")
def getitem():
    return "thanks"






