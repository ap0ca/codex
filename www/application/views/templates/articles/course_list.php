<section class="course <?= $onPagePositionClass ?>">

    <h2 class="course__title <?= $mobileToggleClass ?>">
        <a href="<?= "/course/" . $course->id ?>">
            <?=$course->title; ?>
        </a>
    </h2>

    <? if (!empty($articles)) : ?>
        <ul class="courses-list js-courses-list">
            <? foreach ($articles as $article) : ?>
                <?
                    $isCurrent = $article->id == $currentArticle->id;
                ?>
                <li class="courses-list__item">
                    <a href="<?=URL::site($article->uri ?: '/article/ ' . $article->id ); ?>" class="courses-list__link <?= $isCurrent ? 'courses-list__link--current' : '' ?>" href="">
                        <?= $article->title; ?>
                    </a>
                </li>
            <? endforeach; ?>
        </ul>
    <? endif; ?>
</section>