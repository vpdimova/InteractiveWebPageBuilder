<?php

echo '<h2> Успешно изпратихте данни </h2> Натиснете [Създай страницата] за да се върнете. <br> Изпратени бяха следните данни: <br>';
echo '<pre>';
foreach($_POST as $key => $val) {
    echo $key.': '.$val.'<br>';
}
echo '</pre>';



