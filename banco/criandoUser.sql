CREATE USER 'myplumbob'@'%' IDENTIFIED BY 'Urubu100@';
GRANT ALL PRIVILEGES ON myplumbob.* TO 'myplumbob'@'%';
FLUSH PRIVILEGES;