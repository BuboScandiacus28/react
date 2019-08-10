import React from 'react';

const Profile = () => {
	return (
		<section className = "content">
			<div className = "content__main-img-container">
				<img className = "content__main-img" src="https://cdn.stocksnap.io/img-thumbs/960w/WMH53WWA3J.jpg" alt=""/>
			</div>
			<div className = "content__profile-img-and-user-info-container">
				<div className = "content__profile-img-container">
					<img className = "content__profile-img" src="https://cdn.stocksnap.io/img-thumbs/960w/QO8V4WRO3T.jpg" alt=""/>
				</div>
				<div className = "user-info">
					<h2 className = "user-info__name">Alex K.</h2>
					<p className = "user-info__birthday">Date of Birth:
						<span className = "user-info__birthday-date"> 23 november</span>
					</p>
					<p className = "user-info__city">City:
						<span className = "user-info__city-name"> Lugansk</span>
					</p>
					<p className = "user-info__education">Education:
						<span className = "user-info__education-name"> V. Dal University</span>
					</p>
					<p className = "user-info__web-site">Web Site:
						<a href = "https://buboscandiacus28.github.io" className = "user-info__web-site-name"> https://buboscandiacus28.github.io</a>
					</p>
				</div>
			</div>
			<div className = "posts">
				<h1 className = "posts__title">My posts</h1>
				<form className = "input-form">
					<textarea className = "input-form__input" id="" cols="30" rows="5" placeholder = "your news..."></textarea>
					<button className = "input-form__send">Send</button>
				</form>
				<div className = "post">
					<svg className = "post__circle">
						<circle fill = "orange" r = "29" cx = "29" cy = "29" />
					</svg>
					<p className = "post__text">Hey, why nobody love my?</p>
				</div>
				<div className = "post">
					<svg className = "post__circle">
						<circle fill = "orange" r = "29" cx = "29" cy = "29" />
					</svg>
					<p className = "post__text">It's out new program! Hey!</p>
				</div>
			</div>
		</section>
		);
}

export default Profile;

