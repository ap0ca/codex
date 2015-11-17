<?php defined('SYSPATH') OR die('No Direct Script Access');

Class Model_User extends Model
{
    public $id;
    public $name = '';
    public $photo = '';
    public $photo_big = '';
    public $photo_small = '';
    public $dt_create;
    public $vk_id = 0;
    public $fb_id = 0;


	/**
	 *
     */
	public function __construct()
	{
	}


	/**
     	* Возвращает статус заполненности модели
	* @return bool
     */
	public function is_empty()
	{
		return empty($this->id);
	}


    /**
     * Возвращает модель пользователя по его id
     * @param int $id
     * @return Model_User
     */
    public static function get($id = 0)
    {
        return self::findByAttribute('id', $id);
    }


    /**
     * Возвращает модель пользователя по его уникальному атрибуту
     * @param string $attr
     * @param int $value
     * @return Model_User
     */
    public static function findByAttribute($attr = 'id', $value = 0)
    {
        $model = new Model_User();

        $user = DB::select()->from('Users')->where($attr, '=', $value)->execute()->current();
        if(!empty($user['id']))
        {
            $model->id = $user['id'];
            $model->name = $user['name'];
            $model->photo = $user['photo'];
            $model->dt_create = Date::formatted_time($user['dt_create'],'Y-m-d');
            $model->vk_id = $user['vk_id'];
        }
        return $model;
    }


	/**
	 * Создает новую запись в БД
	 * @return true, если данные успешно записаны в БД
	 */
	public function save()
	{
		if (DB::insert('Users', array('name', 'vk_id', 'fb_id', 'photo', 'photo_small', 'photo_big'))->
		values(array($this->name, $this->vk_id, $this->fb_id, $this->photo, $this->photo_small, $this->photo_big))
		->execute())
			return true;
		else
			return false;
	}


    /**
     * Обновляет запись в БД
     * @return true, если данные успешно записаны в БД
     */
    public function update()
    {
        if (DB::update('Users')->set(array(
            'name' => $this->name,
            'vk_id' => $this->vk_id,
            'fb_id' => $this->fb_id,
            'photo' => $this->photo,
            'photo_small' => $this->photo_small,
            'photo_big' => $this->photo_big,
        ))->where('id', '=', $this->id)->execute())
            return true;
        else
            return false;
    }


    /**
     * Возвращает массив опубликованных статей пользователя
     * @return true, если данные успешно записаны в БД
     */
	public function get_articles_list()
	{
        return Model_Article::getByUserId($this->id);
	}

}
