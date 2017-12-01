<?php include 'database.php';
connected(); ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PHP prepared Statements</title>
    <link rel="stylesheet" href="style.css">
    <script src="myscript.js"></script>
    <!-- jquery -->
    <script src="jquery.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
      //alert('jquery is working');
      $('#testJQuery').html('jquery is definetly working').slideUp(1000);
    });
    </script>
  </head>
  <body>

    <?php
          $name="";
          $password = "";
     ?>

    <form class="form1" name="form1" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" onsubmit="return validateForm();">
      <h3>Enter your Details</h3>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value="<?php echo $name; ?>"><br><br>
            <label for="password">Password:</label><br>
            <input type="text" name="password" value="<?php echo $password; ?>"><br><br>
            <input type="submit" name="submit" value="submit" ><br>
    </form>

    <div id="testJQuery">

    </div>

    <?php
        //prepared statements

     ?>

  </body>
</html>
