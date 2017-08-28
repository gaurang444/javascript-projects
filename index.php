<!DOCTYPE html>
<?php
  include 'db.php';  
  $sql="select * from tasks";
  $rows=$db->query($sql);









?>
<html>
<head>

	<title>crud app in php</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<center><h1>To Do List</center>
      <div class="col-md-10 col-md-offset-1">
      <!--THis will make an alert boc when you click on model-->
      <button data-target="#myModal" data-toggle="modal" type="button" class="btn btn-success btn-primary">Add Items</button>
      <button type="button" class="btn btn-success btn-primary">Print</button>
      <!-- Trigger the modal with a button -->

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add Task</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>Task Name</label>
            <input type="text" required name="task" class="form-control">
          </div>
          <input type="submit" name="send" value="send" class="btn btn-success">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
			<table class="table">
      <hr>
      <br>
  <thead>
    <tr>
      <th>Id</th>
      <th>Task</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <th>1</th>

      <td class="col-md-10">Mark</td>
      <td><a href="#" class="btn btn-success">Edit</a></td>
      <td><a href="#" class="btn btn-danger">Delete</a></td>
    </tr>
    
  </tbody>
</table>
				
			</div>
		</div>
	</div>



 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
</body>
</html>