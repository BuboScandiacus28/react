import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
			<div>
				<div className = {style.main_img_container}>
					<img src="https://cdn.stocksnap.io/img-thumbs/960w/WMH53WWA3J.jpg" alt=""/>
				</div>
				
				<div className = {style.user_info_container}>
					
					<div className = {style.user_img_container}>
						<img src="https://cdn.stocksnap.io/img-thumbs/960w/QO8V4WRO3T.jpg" alt=""/>
					</div>

					<div className = {style.user_info}>
						<h2 className = {style.user_name}>Alex K.</h2>
						<p>Date of Birth:
							<span id = "user_birthday"> 23 november</span>
						</p>
						<p>City:
							<span id = "user_city"> Lugansk</span>
						</p>
						<p>Education:
							<span id = "user_education"> V. Dal University</span>
						</p>
						<p>Web Site:
							<a href = "https://buboscandiacus28.github.io" className = {style.user_site_link}> https://buboscandiacus28.github.io</a>
						</p>
					</div>

				</div>
			</div>
			
		);
}

export default ProfileInfo;

