function Dashboard() {
  return (
    <div className="row">
      <h2>Dashboard</h2>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Tasks</h5>
            <p className="card-text">
              11 Total Tasks
            </p>
            <a href="#" className="btn btn-primary">
              View Tasks
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Completed</h5>
            <p className="card-text">
              9 Completed Tasks
            </p>
            <a href="#" className="btn btn-primary">
              View Complete
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Overdues</h5>
            <p className="card-text">
              2 Overdue Tasks
            </p>
            <a href="#" className="btn btn-danger">
              View Overdues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
