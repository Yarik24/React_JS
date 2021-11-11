import ProfileReducer from "./ProfileReducer";
import ChatsReducer from "./ChatsReducer";
import MessagesReducer from "./MessagesReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = { // Cоздаем объект конфигурации для persist
  key: "React App",
  storage,
};

const rootReducer = combineReducers({
  profile: ProfileReducer,
  chats: ChatsReducer,
  messages: MessagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // оборачиваем редьюсеры в persist

export const store = createStore( // Cоздаем store с использованием persistedReducer
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store); // Cоздаем persistor