import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Баланс: {cash}</p>
        <button
          className={styles.button}
          onClick={() => addCash(+prompt("сумма пополнения: "))}
        >
          Пополнить счет
        </button>
        <button
          className={styles.button}
          onClick={() => getCash(+prompt("сумма снятия: "))}
        >
          Снять со счета
        </button>
        <button
          className={styles.button}
          onClick={() => addCustomer(prompt("Добавить клиента: "))}
        >
          Добавить клиента
        </button>
        <button
          className={styles.button}
          onClick={() => getCash(+prompt("сумма снятия: "))}
        >
          Удалить клиента
        </button>
        {customers.length > 0 ? (
          <div>
            {customers.map((it) => (
              <div key={Date.now()} onClick={() => removeCustomer(it)}>{it.name}</div>
            ))}
          </div>
        ) : (
          <div>Клиентов нет</div>
        )}
      </header>
    </div>
  );
}

export default App;
