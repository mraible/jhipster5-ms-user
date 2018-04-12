package com.okta.developer.blog.repository;

import com.okta.developer.blog.domain.Entry;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the Entry entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {

    @Query(value = "select distinct entry from Entry entry left join fetch entry.tags",
        countQuery = "select count(distinct entry) from Entry entry")
    Page<Entry> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct entry from Entry entry left join fetch entry.tags")
    List<Entry> findAllWithEagerRelationships();

    @Query("select entry from Entry entry left join fetch entry.tags where entry.id =:id")
    Optional<Entry> findOneWithEagerRelationships(@Param("id") Long id);

}
