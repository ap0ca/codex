<div class="feed">
    <? foreach ($feed_items as $i => $item): ?>

        <article class="feed-item <?= $item->marked ? 'feed-item--big' : ''?>" data-type="<?= $item::FEED_PREFIX; ?>" data-id="<?= $item->id; ?>">

            <div class="feed-item__info">
                <time class="feed-item__time">
                    <?= date_format(date_create($item->dt_create), 'd M Y'); ?>
                </time>

                <? if ($item::FEED_PREFIX == 'article'): ?>
                    <a class="feed-item__author-photo" href="/user/<?= $item->author->id ?>">
                        <img src="<?= $item->author->photo ?>" alt="<?= $item->author->name ?>">
                    </a>
                    <? if ($item->coauthor->id): ?>
                        <a class="feed-item__author-photo" href="/user/<?= $item->coauthor->id ?>">
                            <img src="<?= $item->coauthor->photo ?>" alt="<?= $item->coauthor->name ?>">
                        </a>
                    <? endif; ?>
                    <a class="feed-item__author-name" href="/user/<?= $item->author->id ?>">
                        <?= $item->author->name ?>
                    </a>
                    <? if ($item->coauthor->id): ?>
                        and <a class="feed-item__author-name" href="/user/<?= $item->coauthor->id ?>">
                            <?= $item->coauthor->name ?>
                        </a>
                    <? endif; ?>
                <? endif; ?>
            </div>

            <?
                $url = '';
                if ($item::FEED_PREFIX == 'article'){
                    $url = $item->uri ?: 'article/' . $item->id;
                } else {
                    $url = $item->uri ?: 'course/' . $item->id;
                }
            ?>

            <a class="feed-item__title js-emoji-included" href="/<?= $url  ?>">
                <?= HTML::chars($item->title) ?>
            </a>

            <div class="feed-item__description">
                <?= $item->description ?>
            </div>

        </article>

    <? endforeach; ?>
</div>
