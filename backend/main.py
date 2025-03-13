from typing import Optional
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlmodel import Field, SQLModel
from starlette_admin.contrib.sqlmodel import Admin, ModelView

engine = create_engine("sqlite:///basic.db", connect_args={"check_same_thread": False})


class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    done: bool


SQLModel.metadata.create_all(engine)

app = FastAPI()

# First Admin Panel
admin1 = Admin(engine, title="Admin Panel 1")
admin1.add_view(ModelView(Todo, icon="fas fa-list"))
admin1.mount_to(app)  # Mount at /admin1

# Second Admin Panel
admin2 = Admin(engine, title="Admin Panel 2")
admin2.add_view(ModelView(Todo, icon="fas fa-check"))
admin2.mount_to(app)  # Mount at /admin2

# Third Admin Panel (Optional)
admin3 = Admin(engine, title="Admin Panel 3")
admin3.add_view(ModelView(Todo, icon="fas fa-tasks"))
admin3.mount_to(app)  # Mount at /admin3
