import React from 'react'
import styles from './SectionCenter.module.css';
// import PropTypes from 'prop-types'
import local from '../img/local.png'
import twitter from '../img/twitter.png'
import url from '../img/url.png'
import house from '../img/building.png'
import cn from 'classnames'

export default function SectionCenter ( props ) {
    const { data } = props;
    const { login, followers, name,bio,public_repos,following,location,avatar_url,twitter_username,blog,company,created_at } = props.data;

    const notfound = (not) => {
        return not ?  not : 'Not found' 
    }

    return (
        <>
            {
                data.user === 0 ?  <></> : <div className={cn(styles['box-center'])} >
                <div className={cn(styles.logo)}>
                    <img src={avatar_url} alt="" className={styles.img} />
                </div>
                <div>
                    <div className={cn(styles.headerr)}>
                        <h1 className={styles.account}>
                            {name}
                            <b className={styles['search-acc']}>@{login}</b>
                        </h1>
                        <span className={styles.joinded}>{created_at}</span>
                    </div>
                    <h3 className={styles.bio}>{bio}</h3>
                    <div className={styles['repos-res']}>
                        <div className={styles['box-res']}>
                            <span className={styles.repos}>Repos</span>
                            <b className={styles.number}>{public_repos}</b>
                        </div>
                        <div className={styles['box-res']}>
                            <span className={styles.repos}>Followers</span>
                            <b className={styles.number}>{followers}</b>
                        </div>
                        <div className={styles['box-res']}>
                            <span className={styles.repos}>Following</span>
                            <b className={styles.number}>{following}</b>
                        </div>
                    </div>
                    <div className={styles.adress}>
                        <div className={styles['local-add']}>   
                                <img src={local} alt="img" className={styles.logotip} />
                            <span className={styles['add-local']}>{ notfound(location) }</span>
                        </div>
                        <div className={styles['local-add']}>   
                        <img src={twitter} alt="img" className={styles.logotip} />
                            <span className={styles['add-local']}>{ notfound(twitter_username) }</span>
                        </div>
                        <div className={styles['local-add']}>   
                        <img src={url} alt="img" className={styles.logotip} />
                            <span className={styles['add-local']}>{ notfound(blog) }</span>
                        </div>
                        <div className={styles['local-add']}>   
                        <img src={house} alt="img" className={styles.logotip} />
                            <span className={styles['add-local']}>{ notfound(company) }</span>
                        </div>
                    </div>
                </div>
                </div>
            }
        </>
      )
}

// SectionCenter.propTypes = {
//     info: PropTypes.shape({
//         repos: PropTypes.number.isRequired,
//         followers: PropTypes.number.isRequired,
//         following: PropTypes.number.isRequired
//     }).isRequired,
// };