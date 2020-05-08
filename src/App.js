import React from 'react'
import { PlanningGrid } from './Components/PlanningGrid'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="members">
        <h1>Proyecto: <b>Tienda online</b></h1>
        <span>Product Owner: <b>Adrián González</b></span>
        <span>Scrum Master: <b>Luis Lira</b></span>
        <span>Desarrollador: <b>José Ma. Gutiérrez</b></span>
        <span className="taskStatus">
          <div className="completedStatus"></div>
          <span>Completado</span>
        </span>
        <span className="taskStatus">
          <div className="enproceso"></div>
          <span>En Proceso</span>
        </span>
        <span className="taskStatus">
          <div className="uncompletedStatus"></div>
          <span>Incompleto</span>
        </span>
        
      </div>
      <PlanningGrid />
    </div>
  )
}

export default App
