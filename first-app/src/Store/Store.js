import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import messagesReducer from "./messagesReducer";
import quotesReducer from "./quotesReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = { // Cоздаем объект конфигурации для persist
  key: "React App",
  storage,
  blacklist: ["quotes"]
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  quotes: quotesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // оборачиваем редьюсеры в persist

export const store = createStore( // Cоздаем store с использованием persistedReducer
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store); // Cоздаем persistor