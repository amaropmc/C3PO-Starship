package com.codeforall.online.c3po.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

/**
 * A generic model domain entity to be used as a base for concrete types of models
 */
@MappedSuperclass
public class AbstractModel implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Version
    private Integer version;

    @CreationTimestamp
    private Timestamp creationTime;

    @UpdateTimestamp
    private Timestamp updateTime;

    /**
     * Returns the model's id
     * @return model id
     */
    public long getId() {
        return id;
    }

    /**
     * Sets the model's id
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Returns the model's version
     * @return model version
     */
    public Integer getVersion() {
        return version;
    }

    /**
     * Sets the model's version
     * @param version the version to set
     */
    public void setVersion(Integer version) {
        this.version = version;
    }

    /**
     * Returns the model's creation time
     * @return model creation time
     */
    public Timestamp getCreationTime() {
        return creationTime;
    }

    /**
     * Sets the model's creation time
     * @param creationTime the creation time to set
     */
    public void setCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
    }

    /**
     * Returns the model's last update time
     * @return model last update time
     */
    public Timestamp getUpdateTime() {
        return updateTime;
    }

    /**
     * Sets the model's update time
     * @param updateTime the update time to set
     */
    public void setUpdateTime(Timestamp updateTime) {
        this.updateTime = updateTime;
    }
}
