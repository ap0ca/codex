<?php defined('SYSPATH') or die('No Direct Script Access');

/**
 * Describes relationships between Articles and Users as coauthors:
 * In Coauthors database table sets corresponding 'article_id' : 'user_id'
 * Can add coauthors to articles, update, remove,
 * get articles by coauthor id, get coauthor by article's id
 *
 * @author Polina Shneider
 */
class Model_Coauthors extends Model
{
    public $user_id = null;
    public $article_id;

    public function __construct($article_id, $user_id = null)
    {
        $this->article_id = $article_id;

        $this->get();

        if ($user_id) {
            $this->user_id = $user_id;
        }
    }

    /**
     * Adds new record to database
     * @param  int $article_id       - article's ID
     * @param  int $user_id          - coauthor's ID
     * @return Dao_Coauthors::insert
     */
    public function add()
    {
        return Dao_Coauthors::insert()
            ->set('user_id', $this->user_id)
            ->set('article_id', $this->article_id)
            ->clearcache('article:' . $this->article_id)
            ->execute();
    }

    /**
     * If record with Article ID already exists, update it
     * @param  int $article_id       - Article's ID
     * @param  int $user_id          - ID of co-author User
     * @return Dao_Coauthors::update
     */
    public function update()
    {
        return Dao_Coauthors::update()->where('article_id', '=', $this->article_id)
            ->set('user_id', $this->user_id)
            ->clearcache('article:' . $this->article_id)
            ->execute();
    }

    /**
     * Remove coauthorship record from Coauthors table
     * @return Dao_Coauthors::delete
     */
    public function remove()
    {
        return Dao_Coauthors::delete()->where('article_id', '=', $this->article_id)
            ->clearcache('article:' . $this->article_id)
            ->execute();
    }

    /**
     * Get Article by its ID from Coauthors table
     * @param  integer $id             - Article ID
     * @param  boolean $needClearCache - pass true to clear cache
     * @return Model_Coauthor          - Model of an Article
     */
    public function get($needClearCache = false)
    {
        $coauthors = Dao_Coauthors::select()
            ->where('article_id', '=', $this->article_id)
            ->limit(1);

        if ($needClearCache) {
            $coauthors->clearcache('article:' . $this->article_id);
        } else {
            $coauthors->cached(Date::MINUTE * 5, 'article:' . $this->article_id);
        }

        $coauthors = $coauthors->execute();

        $this->fillModel($coauthors);
    }

    /**
     * Check if database record with Article ID exists
     * @return [bool]
     */
    public function checkCoauthors()
    {
        $query = Dao_Coauthors::select()
            ->where('article_id', '=', $this->article_id)
            ->limit(1)->execute();
        return (bool) $query;
    }

    /**
     * Fill Coauthors Model with database values
     * @param resource $data   - data from the database
     * @return Model_Coauthors  - Coauthors Model obj
     */
    private function fillModel($data)
    {
        if (!empty($data['user_id'])) {
            $this->article_id   = $data['article_id'];
            $this->user_id      = $data['user_id'];
        }
        return $this;
    }

    /**
     * Gets all articles where specific User is coauthor to show them in his profile
     * @param  int  $coathorId     - ID of co-author User
     * @param  boolean $clearCache - pass true to clear cache
     * @return Model_Article[]     - Array of Articles
     */
    public static function getArticlesByCoauthorId($user_id)
    {
        $coauthor_articles = array();
        $coauthors_rows = Dao_Coauthors::select('article_id')
             ->where('user_id', '=', $user_id)
             ->limit(200)
             ->cached(Date::MINUTE * 5, 'user:' . $user_id)
             ->execute('article_id');

        if ($coauthors_rows) {
            $coauthor_articles = Model_Article::getSome(array_keys($coauthors_rows));
        }

        return $coauthor_articles;
    }
}