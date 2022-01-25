<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wordpress' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HSPupP_1q7HTZ%e,+y~WkaV<-yB)v -.2iV+5|&o+7%DJ-@!n@nBCJouIOqv^6lJ' );
define( 'SECURE_AUTH_KEY',  '^{2SyK*dKGM+[uy]Z[a_N@ od/maC jwCgofrQy b3XCmr!-f >j&.P=YtTP~)gw' );
define( 'LOGGED_IN_KEY',    '&kS+pO a~m,F-17e7&(Vgrjj,4vL{pD.7ms/hHA53N+g?sV]3;K(1SR0kDJrOHw]' );
define( 'NONCE_KEY',        ':w!@)[5=f3 =8+xrU79.Fm]AklB@[*MC9I5d@^Bw_~~F)yLpsp:Q@iJP}]urF5O9' );
define( 'AUTH_SALT',        '5.N$:_^-.R)`{2[R+RTpE:7HGE@w#38w< Ta$}IZRvN[8883e7XW,q/,`zd{&O1)' );
define( 'SECURE_AUTH_SALT', 'B4K-.HRqOML qcU`yeSj(F3*UaDXAwig<%is&GBf+i)>]3bX6mF[g?GPyCXd/j-t' );
define( 'LOGGED_IN_SALT',   'IFR[NnIhD=:/oK1L>_yVT4ZKWb|.[dPuleb^0e1uVWZkK]HK#MTB+%/HS3%.&&:J' );
define( 'NONCE_SALT',       'AYX_]3$BhwM5p9;DG_)H2Tz`[rKZ69mKTr2<>s`5$oabVs&m tUxkjAfGalJ&T+2' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_database';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
